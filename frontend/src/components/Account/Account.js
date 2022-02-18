import './Account.css'
import { Link } from 'react-router-dom'

function Account() {

    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                   
                   
                </div>
                <div className="grp-accueil__signup">
                    Pas encore de compte ?&nbsp;<a href=""><Link to="/signup">Inscrivez-vous</Link></a>
                </div>
            </div>
        </div>
    )
}

export default Account