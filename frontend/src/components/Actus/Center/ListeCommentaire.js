import React, { useState, useEffect } from "react";
import PostComment from './AjoutCommentaire'
// import GetComment from './ListeCommentaire'
import axios from 'axios';
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd


function GetComment() {

    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const [commentsRefresh, setCommentsRefresh] = useState(false)
    const [commentsData, setCommentsData] = useState([])
    const [comments, setComments] = useState([]);

    const listingCommentaires = async (e) => {
        await axios
            .get(`http://localhost:8080/api/comments/`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => { 
                // res.data.forEach((e)=>{
                //     comments.push(e)
                // })
                console.log(res)
               
            })
            .catch(() => {console.log("problème envoi liste commentaire au serveur")});
    }

    const deleteCommentaire = async (e) => {
        await axios
            .delete(`http://localhost:8080/api/comments/:${userId}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                },
                params: {
                    id: userId
                }
            })
            .then((res) => {
                //console.log(res)
                // setCommentsRefresh(true) 
                // window.location.reload();
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        listingCommentaires()
        setCommentsRefresh(false) 
     
    }, [commentsRefresh, listingCommentaires])
   

    return(
        <div>
            {comments.map(comment =>   
                <div className="commentaire-publie"  key={comment.contenu._id}>
                    <div className="publi-ami__commentaire statut-a-publier__avatar-text">
                        <div>
                            <img 
                                src={photoProfil}
                                alt="photoprofil" 
                                className="grp-banner__vignette-profil statut-left"
                            />
                            <div className="auteur">
                                <span className="auteur-prenom">{comment.author}</span>
                            </div>
                        </div>
                                            
                        <div className="statut-center publication">
                            <div className="publi-ami">{comment.contenu}</div>
                        </div>

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon poubelle" onClick={deleteCommentaire}>🗑</button>
                            </div>
                        </div>
                    </div>
                </div>  
            )}
        </div>
    )
};

export default GetComment