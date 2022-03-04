import React, { useState, useEffect } from "react";
import PostComment from './AjoutCommentaire'
import GetComment from './ListeCommentaire'
import axios from 'axios';
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd
import PostAPublier from "./AjoutPublication";

function PostsPublies() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const [posts, setPosts] = useState([]);
    const [listeComment, setListeComment] = useState([]);

    const [postData, setPostData] = useState();
   //const postId = publi.id;

    const listingPublication = async (e) => {
        await axios
            .get(`http://localhost:8080/api/posts/`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => { 
                setPosts(res.data)
                //console.log(res.data)
            })
            .catch(() => {console.log("problème envoi au serveur")});
    }

    const deletePublication = async (postId) => {
   
       //console.log(token)
        //console.log(postId)
       
        await axios
        
            .delete(`http://localhost:8080/api/posts/${postId}`, {
                headers: {
                    'authorization': `Bearer ${token}`     
                },
                params: {
                    id: postId
                }
            })
            .then((res) => {
                console.log('test')
                console.log(postId)
                //console.log(res)
               // setPostsRefresh(true) 
                // window.location.reload();
            })
            .catch((error) => console.log(error))
    }

    const addNewPost = (newPost) => {
        setPosts(posts.concat(newPost))
        //console.log(newPost)
    }

    const addNewComment = (newComment) => {
        console.log(newComment)
        console.log(listeComment)
        setListeComment(listeComment.concat(newComment))
        
    }


    useEffect(() => {
        listingPublication()     
    }, [])
    
    return(
    <>
       <div>
       <PostAPublier addPost = {(newPost)=>addNewPost(newPost)} />

        </div>
       <h2>Ce qui a été publié</h2>
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
                               {console.log(post.id)}
                                <GetComment idPost={post.id} />

                                <div>
       <PostComment  idPost={post.id} addCommentaire = {(newComment)=>addNewComment(newComment)} />

        </div>
                                {/* <PostComment/> */}
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
    </>)
};

export default PostsPublies