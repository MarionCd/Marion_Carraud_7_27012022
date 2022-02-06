import './FormSignup.css'
import { Link } from 'react-router-dom'

function FormSignup(){
    return(

        <div className='grp-accueil'>
            <form className='form__signup'>
                <h2>Inscrivez-vous</h2>
                    <div className="prenom-nom__signup">
                        <input type="text" name="Prenom" id="prenom__signup" required placeholder="Prénom"></input>
                        <input type ="text" name="Nom" id="nom__signup" required placeholder="Nom de famille"></input>
                    </div>
                    <input type="email" name="email" id="email__signup" required placeholder="Adresse email"></input>
                    <input type="password" name="mdp" id="mdp__signup" required placeholder="Mot de passe"></input>
                    <input type="submit" name="btn__signup" id="submit__signup" value="je m'inscris"></input> 
                    
                <div className="link__login">
                    J'ai déjà un compte&nbsp;<a href=""><Link to="/">Je me connecte</Link></a>
                </div>
            </form>
            
        </div>
    
    )
}

export default FormSignup