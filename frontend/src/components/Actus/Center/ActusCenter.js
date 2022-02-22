import '../Actus.css';
import { Link } from 'react-router-dom';
import photoProfil from '../../../assets/Photo-profil-defaut.png';
import { useState } from 'react'
import InputEmoji from 'react-input-emoji'

import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import CancelIcon from "@material-ui/icons/Cancel"

function ActusCenter() {
    const [ message, setMessage ] = useState('')
  
        const handleOnEnter = (message) => {
          console.log('enter', message)
        }

    return (
            <div className='accueil__center'>
                <h2>Bienvenue sur Groupomania !</h2>
                <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        
                            <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                            
                            <InputEmoji 
                            value={message}
                            onChange={setMessage}
                            cleanOnEnter
                            // onEnter={handleOnEnter}
                            fontFamily= "Cambria, Cochin, Georgia, Times, serif"
                            placeholder="Que voulez-vous partager aujourd'hui ?"/>

                            <div className="statut-right"></div>
    
                    </div>

                    <div className="statut-a-publier__icones">

                        
                    </div>
                </div>
                {/* <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                        
                        <InputEmoji
                            value={message}
                            onChange={setMessage}
                            cleanOnEnter
                            // onEnter={handleOnEnter}
                            placeholder="Que voulez-vous partager aujourd'hui ?"/> */}

                        {/* <textarea type="text" placeholder="Que voulez-vous partager aujourd'hui ?" className="statut-center" onChange={(e) => setContenu(e.target.value)}></textarea> */}
                        {/* <div className="statut-right"></div>
                    </div>
                </div>

                <h2>Ce que votre réseau a écrit</h2> */}
            </div>
    )
}

export default ActusCenter