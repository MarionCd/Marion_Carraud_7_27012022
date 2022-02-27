import './FormSignup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function FormSignup(){
    const [email, setEmail] = useState()
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()
    const [password, setPassword] = useState()

    const validate = async (event) => { // récupération de l'email et password et envoi des données au backend avec axios
        try{
            const inscription = {
                email: email,
                password: password,
                name: prenom,
                lastname: nom
            }
            console.log(inscription)
        } catch {
            console.log("impossible d'enregistrer l'utilisateur");

        }
    
    }

    return(

        <div className='grp-accueil'>
            <form className='form__signup'>
                <h2>Inscrivez-vous</h2>

                    <div className="prenom-nom__signup">
                        <input type="text" name="Prenom" id="prenom__signup" required placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)}></input>
                        <input type ="text" name="Nom" id="nom__signup" required placeholder="Nom de famille" onChange={(e) => setNom(e.target.value)}></input>
                    </div>

                    <input type="email" name="email" id="email__signup" required placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" name="mdp" id="mdp__signup" required placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
                    
                    <input name="btn__signup" id="submit__signup" value="je m'inscris" onClick={() => validate()}></input> 
                    
                <div className="link__login">
                    J'ai déjà un compte&nbsp;<a href=""><Link to="/">Je me connecte</Link></a>
                </div>
            </form>
            
        </div>
    
    )
}

export default FormSignup