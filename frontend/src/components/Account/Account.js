import './Account.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import { useState } from 'react'

function Account() {
   
    const surname = "Prénom"
    const name = "Nom"
    const birthday ="1950-01-01"
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()
    const [anniversaire, setAnniversaire] = useState()
    const validate = () => { console.log(prenom) // récupération des changements et envoi des données au backend avec axios
        console.log(nom)
        console.log(anniversaire)  
    }

    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form id="infos-profil"  onSubmit={(event) => {event.preventDefault();} }>
                        <div>
                            <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left tooltip" title="Modifier la photo"/>
                        </div>

                        <div className='info-modifiable'>
                            <label>Prénom</label>
                            <input defaultValue={surname} tabindex="1" onChange={(e) => setPrenom(e.target.value)}></input>
                        </div>

                        <div className='info-modifiable'>
                            <label>Nom</label>
                            <input defaultValue={name} tabindex="1" onChange={(e) => setNom(e.target.value)}></input>
                        </div>

                        <div className='info-modifiable'>
                            <label>Date de naissance 🎂</label>
                            <input type="date" defaultValue={birthday} tabindex="1" onChange={(e) => setAnniversaire(e.target.value)}></input>
                        </div>

                        <div>
                            <button className="save__btn" type="submit" onClick={() => validate()} >Enregistrer mes modifications</button>
                        </div>
                    </form>
                </div>

                <div className="grp-accueil__signup">
                    <a href="#" id="delete-account">❌ Supprimer mon compte définitivement ❌</a>
                </div>
            </div>
        </div>
    )
}

export default Account