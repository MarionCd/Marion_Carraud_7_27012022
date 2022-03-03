import React, { useState } from "react";
import PostAPublier from './AjoutPublication'
import PostPublies from './ListePublications'

function ActusCenter() {

    return (
        <div className='accueil__center'>
            <h2>Bienvenue sur Groupomania !</h2>
                <PostAPublier />
            <h2>Ce que votre réseau a publié</h2> 
                <PostPublies />     
        </div>
    )
}

export default ActusCenter