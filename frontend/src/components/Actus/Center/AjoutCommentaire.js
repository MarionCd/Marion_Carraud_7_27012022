import React, { useState, createRef, useEffect } from "react";
import Picker from 'emoji-picker-react';
import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd
import axios from 'axios';

function PostComment({addCommentaire,  idPost}) {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const auteur = userName+" "+userLastname;
    const [showPicker, setShowPicker] = useState(false);
    const [cursorPosition, setCursorPosition] = useState();
    const inputRef = createRef() 
    const [comment, setComment] = useState('');

    const handleChangeComment = (e) =>{
        setComment(e.target.value)
        console.log(comment)
    };

    const choixEmoji = (e, { emoji }) => {
        const ref = inputRef.current;
        ref.focus();
        const start = comment.substring(0,ref.selectionStart);
        const end = comment.substring(ref.selectionStart);
        const text = start + emoji + end;
        setComment(text);
        setCursorPosition(start.length + emoji.length)
    }

    const handleShowEmojis = () => {
        inputRef.current.focus();
        setShowPicker(!showPicker);
    }

    useEffect(() => {
        inputRef.current.selectionEnd = cursorPosition;
    }, [cursorPosition]);

    const envoiCommentaire = async (e) => {

            let commentaire = {
                _id: userId,
                author: auteur,
                contenu: comment,
            }
            console.log(commentaire)
            await axios
                .post(`http://localhost:8080/api/comments/${idPost}`, commentaire, {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data.error)
                    } else {
                        
                        addCommentaire(commentaire)
                        setComment('')
                    }    
                })
                .catch(() => {console.log("problème envoi au serveur pour l'envoi commentaire")});
   
    }
    
    return(
        <div className="commentaire-a-publier">
            <div className="publi-ami__commentaire statut-a-publier__avatar-text">
                <div>
                    <img 
                        src={photoProfil} 
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"
                    />
                    <div className="auteur">
                        <span className="auteur-prenom">{auteur}</span>
                    </div>
                </div>
                                        
                <div className="statut-center publication">
                    <textarea 
                        id="commentaire-sous-publi" 
                        type="text" 
                        placeholder="Commenter la publication" 
                        value={comment}
                        ref={inputRef}
                        onChange={handleChangeComment} 
                    />
                    <div className="encart-btn">
                        <button 
                            className="commentaire__btn" 
                            onClick={() => envoiCommentaire()} >Commenter
                        </button>
                    </div>
                </div>

                <div className="statut-right bouton-publication">
                    <div className="parent__ajout-photo">
                        <button 
                            className="picture-icon" 
                            onClick={handleShowEmojis} 
                            title="ajouter un smiley" >😃
                        </button>
                    </div>
                    {showPicker && <Picker className="emoji-list" onEmojiClick={choixEmoji}/>}
                </div>

            </div>
        </div>                      
    )
};

export default PostComment