import './LoginAccueil.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Auth from "../../utils/context";  
import { useHistory } from 'react-router-dom';

function LoginAccueil() {
    const titreLogin = "Connectez-vous"
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    
    const history = useHistory()

    const validate = async () => { // récupération de l'email et password et envoi des données au backend avec axios
        const user = {
                    email: email,
                    password: password,
                };
         
                await axios
                    .post("http://localhost:8080/api/login/",  user)
                    .then((res) => {
                        if (res.data.error) {
                            console.log(res.data.error)
                        } else {
        
                            localStorage.clear();
                            window.localStorage.setItem("userToken", JSON.stringify(res.data.token));
                            window.localStorage.setItem("userId", JSON.stringify(res.data.userId));
                            window.localStorage.setItem("userName", JSON.stringify(res.data.userName));
                            window.localStorage.setItem("userLastname", JSON.stringify(res.data.userLastname));
                            setIsAuthenticated(true);       
                            // console.log(res.data)
                            // window.alert('félicitations !')
                            window.location = ("/accueil")
                        }
                    })
                    .catch(() => {console.log("problème envoi au serveur")})
            

    }


    // const validate = async () => { // récupération de l'email et password et envoi des données au backend avec axios
        
    //     const user = {
    //         email: email,
    //         password: password,
    //     };
 
    //     await axios
    //         .post("http://localhost:8080/api/login",  user)
    //         .then((res) => {
    //             if (res.data.error) {
    //                 console.log(res.data.error)
    //             } else {

    //                 localStorage.clear();
    //                 window.localStorage.setItem("userToken", JSON.stringify(res.data.token));
    //                 window.localStorage.setItem("userId", JSON.stringify(res.data.userId));
    //                 setIsAuthenticated(true);
    //                 // console.log(res.user.userId)
                          
    //                 window.alert('félicitations !')
    //                 window.location = ("/accueil")
    //             }
    //         })
    //         .catch(() => {console.log("problème envoi au serveur")})
    // }


    useEffect(() => {

        if (isAuthenticated) {

            history.replace("/");
        }
    }, [history, isAuthenticated]);
   
    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form className="grp-accueil__login--form">
                        <h2>{titreLogin}</h2>
                        <div>
                            <input  
                                type="email" 
                                name="email" 
                                id="email__login" 
                                placeholder="Adresse email" 
                                defaultValue="" 
                                required
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <input 
                                type="password"
                                placeholder="Mot de passe"
                                id="mdp__login"
                                defaultValue=""
                                required
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <div id="submit__login" onClick={() => validate()}>Je me connecte</div>
                        </div>
                    </form>
                   
                </div>

                <div className="grp-accueil__signup">
                    Pas encore de compte ?&nbsp;<Link to="/signup">Inscrivez-vous</Link>
                </div>

            </div>
        </div>
    )
}

export default LoginAccueil