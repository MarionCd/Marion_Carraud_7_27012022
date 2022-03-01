import React from "react";

function GetComment() {
    return(
        <div className="commentaire-publie">
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
                    <div className="publi-ami">"comment.contenu"</div>
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

export default GetComment