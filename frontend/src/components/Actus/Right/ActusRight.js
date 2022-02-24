import '../Actus.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../../assets/Photo-profil-defaut.png'

function ActusRight() {
    const TitreActu1 = "Rencontre avec les producteurs"
    const TitreActu2 = "Prime de fin d'année"
    const TitreActu3 = "Conseils pour le télétravail"
    const TitreActu4 = "Point sur les mesures anti-covid"

    return (
            <div className='accueil__right'>
                <h2>Actualités</h2>
                <div className='actu1'>
                    <div className="image-actu1"></div>
                    <div className="titre-actu">{TitreActu1}<br/>
                    <a href="">En savoir plus...</a></div>
                </div>
                <div className='actu2'>
                    <div className="image-actu2"></div>
                    <div className="titre-actu">{TitreActu2}<br/>
                    <a href="">En savoir plus...</a></div>
                </div>
                <div className='actu3'>
                    <div className="image-actu3"></div>
                    <div className="titre-actu">{TitreActu3}<br/>
                    <a href="">En savoir plus...</a></div>
                </div>
                <div className='actu4'>
                    <div className="image-actu4"></div>
                    <div className="titre-actu">{TitreActu4}<br/>
                    <a href="">En savoir plus...</a></div>
                </div>
            </div>
    )
}

export default ActusRight