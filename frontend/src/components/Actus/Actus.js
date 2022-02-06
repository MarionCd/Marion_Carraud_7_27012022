import './Actus.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../assets/Photo-profil-defaut.png'

function Actus() {
    const TitreActu1 = "Rencontre avec les producteurs"
    const TitreActu2 = "Prime de fin d'année"
    const TitreActu3 = "Conseils pour le télétravail"
    const TitreActu4 = "Point sur les mesures anti-covid"

    return (
        <div className='grp-accueil__connecte'>
            <div className='accueil__left'>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Messages privés</a></li>
                    <li><a href="">Top 10</a></li>
                    <li><a href="">Brainstorming</a></li>
                </ul>
            </div>
            <div className='accueil__center'>
                <div className="statut-a-publier">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil"/>
                        <input type="text" placeholder="Que voulez-vous partager aujourd'hui ?"></input>
                        <div></div>
                </div>
                <div className="statut__btn">
                    <button>Publier</button>
                </div>

                <div className='autres-publications'>
                    <div className="publications__profil">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil"/>
                        <div className="publications__identite"> <p>&nbsp;Prénom Nom</p> </div>
                    </div>
                    <div className="publications__texte">Globos latera urbis ait cuncta quod 
                    per familiarium subversasque urbis terga subversasque 
                    transiturus tamquam latera discurrunt tamquam longius 
                    transiturus post.
                    </div>
                    <div className="marge__right"></div>
                </div>

            </div>
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
        </div>
    )
}

export default Actus