import logo from '../../assets/icon-left-font-monochrome-white.svg'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import './BannerConnecte.css'
import { Link } from 'react-router-dom'

function BannerConnecte() {
    const slogan = "La détente au service de l'équipe"
    
    return (
        <div className='grp-banner'>
            <div className="grp-banner__logo-bloc">
                <Link to="/accueil"><img src={logo} alt='Groupomania' className='grp-logo' /></Link>
                <div className="grp-banner__line"></div>
                <div className="grp-banner__slogan">{slogan}</div>
            </div>
            <div className="grp-banner__slogan-bloc">
                <div className="grp-banner__profil"> 
                    
                        <div>
                            <Link to="/account"><img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil" title="accéder aux infos profil"/></Link>
                        </div>
                        <p>&nbsp;Prénom</p><p>&nbsp;Nom</p> 
                </div>   
               
                    <Link to="/" id="logout" >🔴 <span>Se déconnecter</span></Link>
               
            </div>
        </div>
    )
}

export default BannerConnecte