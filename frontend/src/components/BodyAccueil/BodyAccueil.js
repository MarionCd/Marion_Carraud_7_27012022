import './BodyAccueil.css'

function BodyAccueil() {
    //const slogan = "Créer du lien sur la toile"
    const titreLogin = "J'ai déjà un compte"
    const titreSignUp = "Je me créé un compte"
    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form className="grp-accueil__login--form">
                        <h2>{titreLogin}</h2>
                        <div>
                            <label for="email">Email :</label>
                            <input  type="email" name="email" id="email__login" required placeholder="adresse email"></input>
                        </div>
                        <div>
                            <label for="password">Mot de passe :</label>
                            <input placeholder="Mot de passe"></input>
                        </div>
                        <div>
                            <input type="submit" name="btn__login"></input>   
                            {/* penser à e.preventDefault(); */}
                        </div>
                    </form>
                   
                </div>
                <div className="grp-accueil__signup">
                    <button><h2>{titreSignUp}</h2></button>
                </div>
            </div>
        </div>
    )
}

export default BodyAccueil