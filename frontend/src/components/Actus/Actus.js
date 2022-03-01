import './Actus.css'
// import { Link } from 'react-router-dom'
// import photoProfil from '../../assets/Photo-profil-defaut.png'
import ActusRight from './Right/ActusRight'
import ActusLeft from './Left/ActusLeft'
import ActusCenter from './Center/ActusCenter'

import React, { useState, useEffect, useContext } from "react";
// import axios from 'axios'

function Actus() {
    return (
        <div className='grp-accueil__connecte'>
            <ActusLeft />
            <ActusCenter />
            <ActusRight/>
        </div>
    )
}

export default Actus

// import './Actus.css'
// import { Link } from 'react-router-dom'
// import photoProfil from '../../assets/Photo-profil-defaut.png'
// import ActusRight from './Right/ActusRight'
// import ActusLeft from './Left/ActusLeft'
// import ActusCenter from './Center/ActusCenter'

// import React, { useState, useEffect, useContext } from "react";

// // import { Contexte } from '../../utils/context'
// import axios from 'axios'

// function Actus() {

//     // const auth = useContext(Contexte);
//     // console.log(auth.token)

//     // useEffect(() => {
//     //     const accueilConnecte = async () => {
//     //         try {
//     //             axios
//     //                 .get('http://localhost:8080/api/posts');  
//     //                 Authorization: "Bearer " + auth.token,

//     //         } catch {
//     //             console.log('non');
//     //         }
//     //     }
//     // })
//     // const auth = useContext(Contexte);

//     // useEffect(() => {
//     //     const accueilConnecte = async() => {
//     //         try{
//     //             axios
//     //                 .get("http://localhost:8080/api/posts"),

//     //         } catch {

//     //         }
//     //     }

//     // })
//     /*
//             axios
//             .post("http://localhost:8080/api/login",  user)
//             .then(res => { 
//                 console.log(res)
//                 console.log("utilisateur connecté")
        
//                 auth.login(res.data.userId, res.data.token, res.data.account);
//                 window.alert( "Bienvenue !")
//                 window.location = '/accueil';
//             })
//             .catch(() => {console.log("problème envoi au serveur")})
//     */

//             /**
//              * 
//              *     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const postsData = await sendRequest(`${process.env.REACT_APP_API_URL}/posts`, "GET", null, {
//                     Authorization: "Bearer " + auth.token,
//                 });
//                 setPosts(postsData);
//             } catch (err) {}
//         };
//         fetchPosts();
//     }, [sendRequest, auth.token]);

//             */


//     // useEffect(() => {
//     //     const fetchPost = async () => {
//     //         try {
//     //             const post = await sendRequest(`${process.env.REACT_APP_API_URL}/posts/${postId}`, "GET", null, {
//     //                 Authorization: "Bearer " + auth.token,
//     //             });
//     //             setPost(post[0]);
//     //             setComments(post[1].comments);
//     //         } catch (err) {}
//     //     };
//     //     fetchPost();
//     // }, [sendRequest, setPost, auth.token, postId, setComments]);

//     // axios
//     // .post("http://localhost:8080/api/signup",  user)
//     // .then(res => {
//     //     console.log(res)
//     //     console.log("utilisateur enregistré")
//     //     window.alert( "Bienvenue ! Vous pouvez vous connecter maintenant")
//     //     window.location = '/';
//     // })
//     // .catch(() => {console.log("problème envoi au serveur")})


//     return (
//         <div className='grp-accueil__connecte'>
//             <ActusLeft />
//             <ActusCenter />
//             <ActusRight/>
//         </div>
//     )
// }

// export default Actus