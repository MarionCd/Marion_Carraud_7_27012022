import './Account.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import { useState } from 'react'
import axios from 'axios';

function Account() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()

    const updateAccount = async (e) => {  // récupération des changements et envoi des données au backend avec axios
        let account = {
            username: userName,
            userlastname: userLastname,
        }
        await axios
            .put(`http://localhost:8080/api/comments/:${userId}`, account, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res)
                window.alert("test")
            })
            .catch((error) => console.log(error))
         
        }

    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form 
                        id="infos-profil"
                        onSubmit={updateAccount}>
                        
                        <div>
                            <img 
                                src={photoProfil} 
                                alt="photo profil" 
                                className="grp-banner__vignette-profil statut-left tooltip" 
                                title="Modifier la photo"/>
                        </div>

                        <div className='info-modifiable'>
                            <label>Prénom</label>
                            <input 
                                defaultValue={userName} 
                                tabIndex="1" 
                                onChange={(e) => setPrenom(e.target.value)}/>
                        </div>

                        <div className='info-modifiable'>
                            <label>Nom</label>
                            <input 
                                defaultValue={userLastname} 
                                tabIndex="1" 
                                onChange={(e) => setNom(e.target.value)}/>
                        </div>

                        <div>
                            <button 
                                className="save__btn" 
                                type="submit" 
                                onClick={updateAccount} >Enregistrer mes modifications
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grp-accueil__signup">
                    <div id="delete-account">❌ Supprimer mon compte définitivement ❌</div>
                </div>
            </div>
        </div>
    )
}

export default Account