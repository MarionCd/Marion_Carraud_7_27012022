import React, { useState } from "react";
import PostAPublier from './AjoutPublication'
import PostPublies from './ListePublications'

function ActusCenter() {

    return (
        <div className='accueil__center'>
            <h2>Bienvenue sur Groupomania !</h2>
                {/* <PostAPublier /> */}
            
                <PostPublies />     
        </div>
    )
}

export default ActusCenter