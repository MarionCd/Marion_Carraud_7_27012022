import '../Actus.css';
import { Link } from 'react-router-dom';
import photoProfil from '../../../assets/Photo-profil-defaut.png';
import { createRef, useEffect, useState } from 'react'
import InputEmoji from 'react-input-emoji'
import Emoji from '../../Emoji/Emoji'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import PropTypes from "prop-types";

import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import CancelIcon from "@material-ui/icons/Cancel"
import InputEmojiWithRef from 'react-input-emoji';

function ActusCenter() {
    const [publication, setPublication] = useState()
    const validate = () => { console.log(message) // récupération de contenu et envoi des données au backend avec axios
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

   

    const inputRef = createRef();
    const [message, setMessage] = useState('');
    const [showEmojis, setShowEmojis ] = useState ();
    const [cursorPosition, setCursorPosition] = useState();

    const pickEmoji = (e, { emoji }) => {
        const ref = inputRef.current;
        ref.focus();
        const start = message.substring(0, ref.selectionStart);
        const end = message.substring(ref.selectionStart);
        const msg = start + emoji + end;
        setMessage(msg);
        // inputRef.current.selectionEnd = start.length+emoji.length;
        setCursorPosition(start.length+emoji.length);
    };

    const handleChange = e =>{
        setMessage(e.target.value);
    }

    const handleShowEmojis = () => {
        inputRef.current.focus();
        setShowEmojis(!showEmojis);
    };

    useEffect(() => {
        inputRef.current.selectionEnd = cursorPosition;
    }, [cursorPosition])
  
   
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
                            <textarea type="text" placeholder="Que voulez-vous partager aujourd'hui ?"  value={message} onChange={handleChange} ref={inputRef}></textarea>  
                            <div className="encart-btn">
                                <button className="statut__btn" onClick={() => validate()}>Publier</button>
                            </div>

                           
                            
                        </div> 

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon" onClick={handleShowEmojis}>😃</button>
                            </div>

                            <div className="parent__ajout-photo">
                                    <button className="picture-icon">📸</button>
                                    <input type="file" name="upfile" />
                            </div>

                            {showEmojis && <Emoji className="emoji-list" pickEmoji={pickEmoji} />}
                        </div>
                    </div>
                </div>
               
                <h2>Ce que votre réseau a écrit</h2> 
            </div>
    )
}

export default ActusCenter