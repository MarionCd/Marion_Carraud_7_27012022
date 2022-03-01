import React from "react";

function PostComment() {

    const envoiCommentaire = (e) => {
        console.log("envoi commentaire")
    }

    const handleChangeComment = (e) =>{
        console.log("contenu du commentaire");
    };
    return(
        <div className="commentaire-a-publier">
            <div className="publi-ami__commentaire statut-a-publier__avatar-text">
                <div>
                    <img 
                        src="{photoProfil}" 
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"
                    />
                    <div className="auteur">
                        <span className="auteur-prenom">Prénom</span>
                        <span className="auteur-nom">Nom</span>
                    </div>
                </div>
                                        
                <div className="statut-center publication">
                    <textarea 
                        id="commentaire-sous-publi" 
                        type="text" 
                        placeholder="Commenter la publication" 
                        value="{commentaire}" 
                        onChange={handleChangeComment} 
                    />
                    <div className="encart-btn">
                        <button 
                            className="commentaire__btn" 
                            onClick={() => envoiCommentaire()} >Commenter
                        </button>
                    </div>
                </div>

                <div className="statut-right bouton-publication"/>
            </div>
        </div>                      
    )
};

export default PostComment