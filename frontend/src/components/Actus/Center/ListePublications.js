import React from "react";
import PostComment from './AjoutCommentaire'
import GetComment from './ListeCommentaire'

function PostsPublies() {
    return(
        <div className="statut-a-publier blocRouge">
            <div className="statut-a-publier__avatar-text">
                <div>
                    <img 
                        src="" 
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"
                    />
                    <div className="auteur">
                        <span className="auteur-prenom">Prénom</span>
                        <span className="auteur-nom">Nom</span>
                    </div>
                </div>
                
                <div className='statut-center publication'>
                    <div className="publi-ami" > 'post contenu'</div>
                    <GetComment/>
                    <PostComment/>
                </div> 

                <div className="statut-right bouton-publication">
                    <div className="parent__ajout-photo">
                        <button className="picture-icon poubelle">🗑</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostsPublies