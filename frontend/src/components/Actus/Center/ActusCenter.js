import '../Actus.css';
import { Link } from 'react-router-dom';
import photoProfil from '../../../assets/Photo-profil-defaut.png';
import { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import Emoji from '../../Emoji/Emoji'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import CancelIcon from "@material-ui/icons/Cancel"

function ActusCenter() {
    const [publication, setPublication] = useState()
    const validate = () => { console.log(publication) // récupération de contenu et envoi des données au backend avec axios
        let post = {
            id: 3,
            contenu: publication
        }
        posts.push(post)
    };
    const [posts, setPosts] = useState([
        {
            id: 1,
            contenu: "texte",

        },
        {
            id:2,
            contenu:"2e texte"
        }
    ]);

  
   
    // const [ message, setMessage ] = useState('')
  
    //     const handleOnEnter = (message) => {
    //       console.log('enter', message)
    //     }

    return (
            <div className='accueil__center'>
                <h2>Bienvenue sur Groupomania !</h2>
                <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                        
                        <div className='statut-center publication'>
                            <textarea type="text" placeholder="Que voulez-vous partager aujourd'hui ?"  onChange={(e) => setPublication(e.target.value)}></textarea>  
                            <div className="encart-btn">
                                <button className="statut__btn" onClick={() => validate()}>Publier</button>
                            </div>
                            <Emoji/>
                            
                        </div> 

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon" >😃</button>
                            </div>

                            <div className="parent__ajout-photo">
                                    <button className="picture-icon">📸</button>
                                    <input type="file" name="upfile" />
                            </div>
                        </div>

                        

                    </div>

                  
                </div>
               

                

                <h2>Ce que votre réseau a écrit</h2> 
            </div>
    )
}

export default ActusCenter