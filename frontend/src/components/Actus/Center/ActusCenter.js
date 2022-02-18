import '../Actus.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../../assets/Photo-profil-defaut.png'

function ActusCenter() {

    return (
            <div className='accueil__center'>
                <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                        <textarea type="text" placeholder="Que voulez-vous partager aujourd'hui ?" className="statut-center"></textarea>
                        <div className="statut-right"></div>
                    </div>
                    <div className="statut-a-publier__icones">
                        <div className="statut-left"></div>
                        <div className="statut-center">
                            <div className="statut-center__bloc1">Ajouter à votre publication : &nbsp;</div>
                            <a href="#" className="ajout-photo"><div className="statut-center__bloc2">📸 </div></a>
                        </div>
                        <div className="statut-right"></div>
                    </div>
                    <div className="statut-a-publier__icones">
                        <div className="statut-left"></div>
                        <div className="statut-center">
                            <div className="statut__btn">
                                <button>Publier</button>
                            </div>
                        </div>
                        <div className="statut-right"></div>
                    </div>
                </div>

                <h2>Ce que votre réseau a écrit</h2>

                <div >

                    <div className="statut-a-publier blocRouge">
                        <div className="statut-a-publier__avatar-text">
                            <div className="statut-left reseau__statut--profil">
                                <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil"/>
                                <div className="reseau__statut--nom"><a href="#">Prénom&nbsp;Nom</a></div>
                            </div>
                            <div className="publications__texte statut-center">Globos latera urbis ait cuncta quod 
                            per familiarium subversasque urbis terga subversasque 
                            transiturus tamquam latera discurrunt etc. etc.
                            </div>
                            
                            <div className="statut-right"></div>
                        </div>

                    <div className="statut-a-publier__icones">
                        <div className="statut-left"></div>
                        <div className="statut-center">
                            <div className="statut-a-publier">
                                <div className="statut-a-publier__avatar-text">
                                    <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                                    <textarea type="text" placeholder="Commenter..." className="statut-center"></textarea>
                                    <div className="statut-right"></div>
                                </div>
                                <div className="statut-a-publier__icones">
                                    <div className="statut-left"></div>
                                    <div className="statut-center">
                                        <div className="statut-center__bloc1">Ajouter à votre publication : &nbsp;</div>
                                        <a href="#" className='ajout-photo'><div className="statut-center__bloc2">📸 </div></a>
                                    </div>
                                <div className="statut-right"></div>
                            </div>
                    
                    <div className="statut-a-publier__icones">
                        <div className="statut-left"></div>
                        <div className="statut-center">
                            <div className="statut__btn commentaire__btn">
                                <button>Commenter</button>
                            </div>
                        </div>
                        <div className="statut-right"></div>
                    </div>
                </div>
                            
                        </div>
                        <div className="statut-right"></div>
                    </div>
                    
                </div>
                
                    
                </div>

            </div>
    )
}

export default ActusCenter