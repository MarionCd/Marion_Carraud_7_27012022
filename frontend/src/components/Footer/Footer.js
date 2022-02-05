import './Footer.css'
import logo from '../../assets/icon-rouge.png'

function Footer(){
    return(
        
        <footer>
            <div class="limitedWidthBlockContainer footerMain">
                <div class="limitedWidthBlock">
                    <div>
                        <img class="logo" src={logo} alt="Logo de l'entreprise"/>
                    </div>
                    <div>
                        <p>10 quai de la charente 75019 Paris 19</p>
                    </div>
                    <div>
                        <p>Téléphone : 01 23 45 67 89</p>
                    </div>
                    <div>
                        <p>Email : support@name.com</p>
                    </div>
                </div>
            </div>
            <div class="limitedWidthBlockContainer footerSecondary">
                <div class="limitedWidthBlock">
                    <p>© Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All Rights Reserved | Powered </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer