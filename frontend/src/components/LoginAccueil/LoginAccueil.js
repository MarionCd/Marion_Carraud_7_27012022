import './LoginAccueil.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function LoginAccueil() {
    //const slogan = "Créer du lien sur la toile"
    const titreLogin = "Connectez-vous"
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const validate = () => { console.log(email) // récupération de l'email et password et envoi des données au backend avec axios
         console.log(password)}


    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form className="grp-accueil__login--form">
                        <h2>{titreLogin}</h2>
                        <div>
                            <input  type="email" name="email" id="email__login" required placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Mot de passe" id="mdp__login" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <input name="btn__login" id="submit__login" value="je me connecte"  onClick={() => validate()}></input>   
                            {/* penser à e.preventDefault(); */}
                        </div>
                    </form>
                   
                </div>
                <div className="grp-accueil__signup">
                    Pas encore de compte ?&nbsp;<a href=""><Link to="/signup">Inscrivez-vous</Link></a>
                </div>
            </div>
        </div>
    )
}

export default LoginAccueil