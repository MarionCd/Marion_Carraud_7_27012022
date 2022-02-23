import React from "react";
import { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; //possibilité de faire des liens


// Components
import Emoji from '../../Emoji/Emoji' // Emojis

// Style
import '../Actus.css';

// A remplacer par bdd
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd

function ActusCenter() {

    const validate = () => { console.log(message) // récupération de contenu et envoi des données au backend avec axios
        let post = {
            id: 3,
            contenu: message
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
    const [message, setMessage] = useState();
    const [commentaire, setCommentaire] = useState();
    const [showEmojis, setShowEmojis ] = useState ();
    const [cursorPosition, setCursorPosition] = useState();

    const pickEmoji = (e, { emoji }) => {
        const ref = inputRef.current;
        ref.focus();
        const start = message.substring(0, ref.selectionStart);
        const end = message.substring(ref.selectionStart);
        const msg = start + emoji + end;
        setMessage(msg);
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

                <h2>Ce que vous avez publié</h2> 
               
                <div> 
                    {posts.map(post =>
                        <div className="statut-a-publier blocRouge">
                        <div className="statut-a-publier__avatar-text">
                            <div>
                                <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                                <div className="auteur">
                                    <span className="auteur-prenom">Prénom</span> <span className="auteur-nom">Nom</span>
                                </div>
                            </div>
                            
                            <div className='statut-center publication'>
                                <div className="publi-ami" >{post.contenu}</div>  
                                
                                <div className="publi-ami__commentaire statut-a-publier__avatar-text">
                                    <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                    
                                    
                                    <div className="statut-center publication">
                                        <textarea type="text" placeholder="Commenter la publication"  value={commentaire} onChange={handleChange} ref={inputRef}></textarea>
                                        <div className="encart-btn">
                                            <button className="commentaire__btn" onClick={() => validate()}>Commenter</button>
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

                            <div className="statut-right bouton-publication">
                                <div className="parent__ajout-photo">
                                    <button className="picture-icon poubelle">🗑</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                
            </div>
    )
}

export default ActusCenter