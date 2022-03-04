import React, { useState, useEffect } from "react";
import PostComment from './AjoutCommentaire'
import axios from 'axios';
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd


function GetComment(idPost) {

    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
   // const [commentsRefresh, setCommentsRefresh] = useState(false)
   // const [commentsData, setCommentsData] = useState([])
   const [comments, setComments] = useState([]);

    const [listeComment, setListeComment] = useState([]);
    console.log(idPost)

    const listingCommentaires = async () => {
        await axios
            .get(`http://localhost:8080/api/comments/${idPost.idPost}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => { 
                console.log(res.data) 
                setListeComment(listeComment.concat(res.data))
            })
            .catch(() => {console.log("problème envoi liste commentaire au serveur")});
    }

    // const deleteComment = (prevComment) => {
    //     setPosts(posts.concat(newPost))
    //     //console.log(newPost)
    // }

    const deleteCommentaire = async (idComment) => {
        console.log(idComment)
        await axios
            .delete(`http://localhost:8080/api/comments/${idComment}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
               
            })
            .then((res) => {
                console.log(listeComment)
                setListeComment(listeComment.filter(comment => comment.id != idComment))
                console.log(res)
                
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        listingCommentaires()
        //setCommentsRefresh(false) 
     
    }, [])
   

    return(
        <div>
            {listeComment.map(commentaire =>   
                <div className="commentaire-publie"  key={commentaire.createdAt} >
                    <div className="publi-ami__commentaire statut-a-publier__avatar-text">
                        <div>
                            <img 
                                src={photoProfil}
                                alt="photoprofil" 
                                className="grp-banner__vignette-profil statut-left"
                            />
                            <div className="auteur">
                                <span className="auteur-prenom">{commentaire.author}</span>
                            </div>
                        </div>
                                            
                        <div className="statut-center publication">
                            <div className="publi-ami">{commentaire.contenu}</div>
                        </div>

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon poubelle" onClick={()=>deleteCommentaire(commentaire.id)}>🗑</button>
                            </div>
                        </div>
                    </div>
                </div>  
            )}
        </div>
    )
};

export default GetComment