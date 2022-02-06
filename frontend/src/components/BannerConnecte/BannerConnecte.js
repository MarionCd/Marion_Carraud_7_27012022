import logo from '../../assets/icon-left-font-monochrome-white.svg'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import './BannerConnecte.css'

function BannerConnecte() {
    const slogan = "La détente au service de l'équipe"
    
    return (
        <div className='grp-banner'>
            <div className="grp-banner__logo-bloc">
                <img src={logo} alt='Groupomania' className='grp-logo' />
                <div className="grp-banner__line"></div>
                <div className="grp-banner__slogan">{slogan}</div>
            </div>
            <div className="grp-banner__slogan-bloc">
                <div className="grp-banner__profil">
                   <div>
                       <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil"/>
                    </div>
                    <p>&nbsp;Prénom</p><p>&nbsp;NOM</p> 
                   
                </div>
            </div>
        </div>
    )
}

export default BannerConnecte