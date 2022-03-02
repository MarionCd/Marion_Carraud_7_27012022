import React, { useState, useContext } from "react";
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd
import Auth from "../../../utils/context";  
import axios from 'axios';

function PostAPublier() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '')
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");

    const auteur = userName+" "+userLastname;
    // const publiValue = document.getElementById('statut-publication').value

    const [publication, setPublication] = useState();
    const [listePublications, setListePublications] = useState([]);
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

    const handleChange = (e) =>{
        setPublication(e.target.value)
    };

    const envoiPublication = async (e) => {
        let publiValue = document.getElementById('statut-publication').value
        
        if(publiValue != ""){   
            let post = {
                _id: userId,
                author: auteur,
                contenu: publication,
            }
            
            await axios
                .post(`http://localhost:8080/api/posts/:${userId}`, post, {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                } )
                    .then((res) => {
                        if (res.data.error) {
                            console.log("test")
                            console.log(res.data.error)
                        } else {
                            console.log(res)
                            listePublications.push(post)
                             
                        }    
                    })
                .catch(() => {console.log("problème envoi au serveur")});
        } else {
            window.alert('veuillez saisir au moins 1 caractère')
        }
        document.getElementById('statut-publication').value = "";
    }

    const ouvrirMenuSmiley = (e) => {
        console.log("ouverture du menu à smileys")
    }

    return(
        <div className="statut-a-publier blocBleu">
            <div className="statut-a-publier__avatar-text">
                <div>
                    <img 
                        src={photoProfil}
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"/>
                    <div className="auteur">
                        <span className="auteur-prenom" >{userName}&nbsp;</span>
                        <span className="auteur-nom" >{userLastname}</span>
                    </div>
                </div>

                <div className='statut-center publication'>
                    <textarea 
                        id="statut-publication" 
                        type="text" 
                        placeholder="Que voulez-vous partager aujourd'hui ?" 
                        value={publication}
                        onChange={handleChange} />

                    <div className="encart-btn">
                        <div 
                            className="statut__btn" 
                            onClick={() => envoiPublication()}>Publier
                        </div>
                    </div>    
                </div> 

                <div className="statut-right bouton-publication">
                    <div className="parent__ajout-photo">
                        <button 
                            className="picture-icon" 
                            onClick={() => ouvrirMenuSmiley()} 
                            title="ajouter un smiley" >😃
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostAPublier