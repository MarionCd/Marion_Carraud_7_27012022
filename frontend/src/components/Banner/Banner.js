import { Link } from 'react-router-dom'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import './Banner.css'

function Banner() {
    const slogan = "La détente au service de l'équipe"
    const citationH1 = "Réseau social interne Groupomania"
    return (
        <div className='grp-banner'>
            <div className="grp-banner__logo-bloc">
                <Link to="/">
                    <img 
                        className='grp-logo'
                        src={logo} 
                        alt='Groupomania'  />
                </Link>
                <div className="grp-banner__line"></div>
                <div className="grp-banner__slogan">{slogan}</div>
            </div>
            <div className="grp-banner__slogan-bloc">
                <div className="grp-banner__citation">
                    <h1>{citationH1}</h1>
                    <p><span>#divertir</span> <span>#lienSocial</span> <span>#creativite</span></p>
                </div>
            </div>
        </div>
    ) 
}

export default Banner