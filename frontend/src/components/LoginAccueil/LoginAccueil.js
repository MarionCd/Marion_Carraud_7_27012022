

import './LoginAccueil.css'
import { Link } from 'react-router-dom'

function LoginAccueil() {
    //const slogan = "Créer du lien sur la toile"
    const titreLogin = "Connectez-vous"

    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form className="grp-accueil__login--form">
                        <h2>{titreLogin}</h2>
                        <div>
                            <input  type="email" name="email" id="email__login" required placeholder="Adresse email"></input>
                        </div>
                        <div>
                            <input placeholder="Mot de passe" id="mdp__login"></input>
                        </div>
                        <div>
                            <input type="submit" name="btn__login" id="submit__login" value="je me connecte"></input>   
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