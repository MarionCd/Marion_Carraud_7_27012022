import React from "react";
// import photoProfil from '../../../assets/Photo-profil-defaut.png'; //à modifier avec la photo dans la bdd
 
function PostAPublier() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '')
    const userId = window.localStorage.getItem("userId");

    const envoiPublication = (e) => {
        console.log("envoi publication")
        console.log(token)
        console.log(userId)
    }

    const handleChange = (e) =>{
        console.log("contenu de la publication");
    };

    const ouvrirMenuSmiley = (e) => {
        console.log("ouverture du menu à smileys")
    }

    return(
        <div className="statut-a-publier blocBleu">
            <div className="statut-a-publier__avatar-text">
                <div>
                    <img 
                        src="{photoProfil}"
                        alt="photo profil" 
                        className="grp-banner__vignette-profil statut-left"/>
                    <div className="auteur">
                        <span className="auteur-prenom" >prenom</span>
                        <span className="auteur-nom" >nom</span>
                    </div>
                </div>

                <div className='statut-center publication'>
                    <textarea 
                        id="statut-publication" 
                        type="text" 
                        placeholder="Que voulez-vous partager aujourd'hui ?" 
                        value="{message}" 
                        onChange={handleChange} />

                    <div className="encart-btn">
                        <div 
                            className="statut__btn" 
                            onClick={() => envoiPublication()}>Publier
                        </div>
                    </div>    
                </div> 

                <div className="statut-right bouton-publication">
                    <div className="parent__ajout-photo">
                        <button 
                            className="picture-icon" 
                            onClick={() => ouvrirMenuSmiley()} 
                            title="ajouter un smiley" >😃
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostAPublier