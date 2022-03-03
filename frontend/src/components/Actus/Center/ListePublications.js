import React, { useState, useEffect } from "react";
import PostComment from './AjoutCommentaire'
import GetComment from './ListeCommentaire'
// import Auth from "../../../utils/context";  
import axios from 'axios';

function PostsPublies() {
    // const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    // const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    // const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    // const userId = window.localStorage.getItem("userId");

    const [postsRefresh, setPostsRefresh] = useState(false)
    const [postsData, setPostsData] = useState([])

    const listingPublication = async (e) => {
        const token = window.localStorage.getItem("userToken");

        await axios
            .get(`http://localhost:8080/api/posts/`, {
                headers:{
                    'authorization' : `Bearer ${token}`
                }
            })
            
            .then((res) => {
                setPostsData(res.data)
                setPostsRefresh(false)
                console.log(res)
            })
            .catch(() => {console.log("problème réception listing")});
    
        }
    useEffect(() => {
        listingPublication()
        setPostsRefresh(false)
            
        }, [postsRefresh, listingPublication])

        // const listingPublication = (e) => {
        //     const token = window.localStorage.getItem("userToken");
    
        //      axios
        //         .get(`http://localhost:8080/api/posts/${userId}`, {
        //             headers:{
        //                 'authorization' : `Bearer ${token}`
        //             }
        //         })
        //         .then((res) => {
        //             setPostsData(res.data)
        //             setPostsRefresh(false)
        //             console.log(res)
        //         })
        //         .catch(() => {console.log("problème réception listing")});
        // }
        // useEffect(() => {
        //     listingPublication()
        //     setPostsRefresh(false)
                
        //     }, [postsRefresh, listingPublication])

    return(
        
        <div className="statut-a-publier blocRouge">
            <div className="statut-a-publier__avatar-text">
                <div>
                    <img 
                        src="" 
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"
                    />
                    <div className="auteur">
                        <span className="auteur-prenom"></span>
                        <span className="auteur-nom"></span>
                    </div>
                </div>
                
                <div className='statut-center publication'>
                    <div className="publi-ami" ></div>
                    <GetComment/>
                    <PostComment/>
                </div> 

                <div className="statut-right bouton-publication">
                    <div className="parent__ajout-photo">
                        <button className="picture-icon poubelle">🗑</button>
                    </div>
                </div>
            </div>
        </div>
            
       
    )
};

export default PostsPublies