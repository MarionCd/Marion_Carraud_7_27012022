import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Picker from 'emoji-picker-react';

// Style
import '../Actus.css';

// A remplacer par bdd
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd

function ActusCenter() {
    const [message, setMessage] = useState();
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (e, emojiObject) => { // choix d'un smiley
      setMessage(start => start + emojiObject.emoji); 
      setShowPicker(false);
    };

    const handleChange = e =>{
        setMessage(e.target.value);
    }

    const validate = () => { console.log(message) // récupération de contenu et envoi des données au backend avec axios
        let post = {
            id: 3,
            contenu: message
        } 
        posts.push(post)   
        setMessage()
    };

    const [posts, setPosts] = useState([]);
  
    return (
            <div className='accueil__center'>

                <h2>Bienvenue sur Groupomania !</h2>

                <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                        
                        <div className='statut-center publication'>
                            <textarea type="text" placeholder="Que voulez-vous partager aujourd'hui ?" value={message} onChange={handleChange} ></textarea>  
                            <div className="encart-btn">
                                <button className="statut__btn" onClick={() => validate()}>Publier</button>
                            </div>    
                        </div> 

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon" onClick={() => setShowPicker(val => !val)} >😃</button>
                            </div>

                            <div className="parent__ajout-photo">
                                    <button className="picture-icon">📸</button>
                                    <input type="file" name="upfile" />
                            </div>
                            {showPicker && <Picker className="emoji-list" onEmojiClick={onEmojiClick} />}
                          
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
                                        <textarea type="text" placeholder="Commenter la publication"  ></textarea>
                                        <div className="encart-btn">
                                            <button className="commentaire__btn" onClick={() => validate()}>Commenter</button>
                                        </div>
                                    </div>

                                    <div className="statut-right bouton-publication">
                                        <div className="parent__ajout-photo">
                                            <button className="picture-icon" >😃</button>
                                        </div>

                                        <div className="parent__ajout-photo">
                                            <button className="picture-icon">📸</button>
                                            <input type="file" name="upfile" />
                                        </div>

                                        {/* {showEmojis && <Emoji className="emoji-list" pickEmoji={pickEmoji} />} */}
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