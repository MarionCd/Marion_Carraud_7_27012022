import './FormSignup.css'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

function FormSignup(){
    let regexSimple = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    let regexEmail = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ //Min 8 characters, au moins 1 lettre et 1 chiffre

    const [email, setEmail] = useState();
    const emailIsValid = regexEmail.test(email)

    const [prenom, setPrenom] = useState();
    const prenomIsValid = regexSimple.test(prenom)

    const [nom, setNom] = useState();
    const nomIsValid = regexSimple.test(nom)

    const [password, setPassword] = useState();
    const passwordIsValid = regexPassword.test(password)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const validate = async (e) => { // récupération de l'email et password et envoi des données au backend avec axios
        if(prenomIsValid && nomIsValid && emailIsValid && passwordIsValid){
            const user = {
                email: email,
                password: password,
                name: prenom,
                lastname: nom
            };
        
            axios
                .post("http://localhost:8080/api/signup",  user)
                .then(res => {
                    console.log(res)
                    console.log("utilisateur enregistré")
                    window.alert( "Bienvenue ! Vous pouvez vous connecter maintenant")
                    window.location = '/';
                })
                .catch(() => {console.log("problème envoi au serveur")})
            
        } else {
            console.log("impossible d'enregistrer l'utilisateur")
        }  
    }
    
    return(
        <div className='grp-accueil'>
            <form className='form__signup' onSubmit={handleSubmit}>
                <h2>Inscrivez-vous</h2>

                    <div className="prenom-nom__signup">
                        <input type="text" name="Prenom" id="prenom__signup" required placeholder="Prénom" defaultValue="" onChange={(e) => setPrenom(e.target.value)}></input>
                        <input type ="text" name="Nom" id="nom__signup" required placeholder="Nom de famille" defaultValue="" onChange={(e) => setNom(e.target.value)}></input>
                    </div>

                    <input type="email" name="email" id="email__signup" required placeholder="Adresse email" defaultValue="" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" name="mdp" id="mdp__signup" required placeholder="Mot de passe" defaultValue="" onChange={(e) => setPassword(e.target.value)}></input>
                    <small>Le mot de passe doit contenir au moins 8 caractères dont au moins 1 chiffre et 1 lettre</small>
                    
                    <input name="btn__signup" id="submit__signup" value="Je m'inscris" onClick={() => validate()}></input> 
                    
                <div className="link__login">
                    J'ai déjà un compte&nbsp;<a href=""><Link to="/">Je me connecte</Link></a>
                </div>
            
            </form>
            
        </div>
    
    )
}

export default FormSignup