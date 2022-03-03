import React, { useState, useEffect } from "react";
import PostComment from './AjoutCommentaire'
import GetComment from './ListeCommentaire'
import axios from 'axios';
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd

function PostsPublies() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const [postsRefresh, setPostsRefresh] = useState(false)
    const [postsData, setPostsData] = useState([])
    const [posts, setPosts] = useState([]);

    const listingPublication = async (e) => {
        await axios
            .get(`http://localhost:8080/api/posts/`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => { 
                res.data.forEach((e)=>{
                    posts.push(e)
                })
            })
            .catch(() => {console.log("problème envoi au serveur")});
    }

    const deletePublication = async (e) => {
        await axios
            .delete(`http://localhost:8080/api/posts/:${userId}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                },
                params: {
                    id: userId
                }
            })
            .then((res) => {
                console.log(res)
                window.location.reload();
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        listingPublication()
        setPostsRefresh(false)
     
    }, [postsRefresh, listingPublication])
    
    return(
        <div>  
            {posts.map(post =>     
                <div className="statut-a-publier blocRouge"  key={post.createdAt}>
                    <div className="statut-a-publier__avatar-text">
                        <div>
                            <img 
                                src={photoProfil} 
                                alt="photoprofil" 
                                className="grp-banner__vignette-profil statut-left"
                            />
                            <div className="auteur">
                                <span className="auteur-prenom">{post.author}</span>
                            </div>
                        </div>
                
                        <div className='statut-center publication'>
                            <div className="publi-ami" >{post.contenu}</div>
                                <GetComment/>
                                <PostComment/>
                            </div> 

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon poubelle" onClick={deletePublication}>🗑</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>    
    )
};

export default PostsPublies