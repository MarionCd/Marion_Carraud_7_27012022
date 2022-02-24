import './Footer.css'
import logo from '../../assets/icon-left-font-monochrome-white.svg'

function Footer(){
    return(
        
        <footer>
            <div className="Footer__main">    
                    <div>
                        <p>10 quai de la charente 75019 Paris 19</p>
                    </div>
                    <div>
                        <p>Téléphone : 01 23 45 67 89</p>
                    </div>
                    <div>
                        <p>Email : support@name.com</p>
                    </div>
                    <div className="Footer__bloc-logo">
                        <img className="Footer__logo" src={logo} alt="Logo Groupomania"/>
                        <div className="Footer__line"></div>
                    </div>
                </div>
            
            <div className="Footer__secondary">
                <div>
                    <p>© Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All Rights Reserved | Powered by Connect-e </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer