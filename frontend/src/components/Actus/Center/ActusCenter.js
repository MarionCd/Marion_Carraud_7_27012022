import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Picker from 'emoji-picker-react';

// Style
import '../Actus.css';

// A remplacer par bdd
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd

function ActusCenter() {
    const prenom = "Prénom"
    const nom = "Nom"

    const [message, setMessage] = useState();
    const [commentaire, setCommentaire] = useState();
    const [showPicker, setShowPicker] = useState(false);
    const [showPickerComment, setShowPickerComment] = useState(false);

    const auteur = prenom+" "+nom;

    const onEmojiClick = (e, emojiObject) => { // choix d'un smiley
      setMessage(prevInput => prevInput + emojiObject.emoji);
      setShowPicker(false);
    };

    const handleChange = (e) =>{
        setMessage(e.target.value);
    };

    const onEmojiClickComment = (e, emojiObject) => { // choix d'un smiley
        setCommentaire(start => start + emojiObject.emoji);
        setShowPickerComment(false);
    };

    const handleChangeComment = (e) =>{
        setCommentaire(e.target.value);
    };

    const validate = () => { 
        let post = {
            id: 1,
            contenu: message,
            author: auteur
        }
        posts.push(post)
        setMessage()
        document.getElementById('statut-publication').value = '';
    }

    const [posts, setPosts] = useState([]);
  
    return (
            <div className='accueil__center'>

                <h2>Bienvenue sur Groupomania !</h2>

                <div className="statut-a-publier blocBleu">
                    <div className="statut-a-publier__avatar-text">
                        <div>
                            <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                            <div className="auteur">
                                <span className="auteur-prenom" >{prenom}</span> <span className="auteur-nom" >{nom}</span>
                            </div>
                        </div>
                        <div className='statut-center publication'>
                            <textarea id="statut-publication" type="text" placeholder="Que voulez-vous partager aujourd'hui ?" value={message} onChange={handleChange} ></textarea>  
                            <div className="encart-btn">
                                <div className="statut__btn" onClick={() => validate()}>Publier</div>
                            </div>    
                        </div> 

                        <div className="statut-right bouton-publication">
                            <div className="parent__ajout-photo">
                                <button className="picture-icon" onClick={() => setShowPicker(val => !val)} title="ajouter un smiley" >😃</button>
                            </div>

                            <div className="parent__ajout-photo">
                                    <button className="picture-icon" title="ajouter une photo" >📸</button>
                                    <input type="file" name="upfile" accept=".jpeg,.jpg,.gif" />
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
                                    <div>
                                        <img src={photoProfil} alt="photo profil" className="grp-banner__vignette-profil statut-left"/>
                                        <div className="auteur">
                                            <span className="auteur-prenom">Prénom</span> <span className="auteur-nom">Nom</span>
                                        </div>
                                    </div>
                                    
                                    <div className="statut-center publication">
                                        <textarea type="text" placeholder="Commenter la publication" value={commentaire} onChange={handleChangeComment} ></textarea>
                                        <div className="encart-btn">
                                            <button className="commentaire__btn" >Commenter</button>
                                        </div>
                                    </div>

                                    <div className="statut-right bouton-publication">
                                        <div className="parent__ajout-photo">
                                            <button className="picture-icon" onClick={() => setShowPickerComment(val => !val)} title="ajouter un smiley">😃</button>
                                        </div>

                                        <div className="parent__ajout-photo">
                                            <button className="picture-icon" title="ajouter une">📸</button>
                                            <input type="file" name="upfile" accept=".jpeg,.jpg,.gif" />
                                        </div>

                                        {showPickerComment && <Picker className="emoji-list" onEmojiClick={onEmojiClickComment} />}
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