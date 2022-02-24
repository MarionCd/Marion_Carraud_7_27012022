import '../Actus.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../../assets/Photo-profil-defaut.png'

function ActusLeft() {

    return (
            <div className='accueil__left'>
                <ul>
                    <li><a href="http://localhost:3000/accueil">Accueil</a></li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                </ul>
            </div>
    )
}

export default ActusLeft