import React, { useContext } from 'react';
import logo from '../../assets/icon-left-font-monochrome-white.svg';
import photoProfil from '../../assets/Photo-profil-defaut.png';
import './BannerConnecte.css';
import { Link } from 'react-router-dom';
import Auth from "../../utils/context";
import { logout } from "../../utils/api";

function BannerConnecte() {
    const slogan = "La détente au service de l'équipe"

    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    }
    
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
                            <Link to="/account">
                                <img 
                                    src={photoProfil} 
                                    alt="photoprofil" 
                                    className="grp-banner__vignette-profil" 
                                    title="accéder aux infos profil"
                                />
                            </Link>
                        </div>
                        <p>&nbsp;{userName}</p>
                        <p>&nbsp;{userLastname}</p> 
                </div>   
                <Link to="/" id="logout">
                    <button onClick={handleLogout}>🔴 Se déconnecter</button>
                </Link> 
               
            </div>
        </div>
    )
}

export default BannerConnecte