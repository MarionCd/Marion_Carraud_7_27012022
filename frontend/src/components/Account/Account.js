import './Account.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import { useState } from 'react'
import axios from 'axios';

function Account() {
    const token = window.localStorage.getItem("userToken").replace(/"/g, '');
    const userName = window.localStorage.getItem("userName").replace(/"/g, '');
    const userLastname = window.localStorage.getItem("userLastname").replace(/"/g, '');
    const userId = window.localStorage.getItem("userId");
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()

    const updateAccount = async (e) => {  // récupération des changements et envoi des données au backend avec axios
        e.preventDefault();

        let account = {
            username: prenom,
            userlastname: nom,
        }
       // console.log(account)
        await axios
            .put(`http://localhost:8080/api/account/${userId}`, account, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                setPrenom(res.data.user.name)
                setNom(res.data.user.lastname)
                window.localStorage.setItem("userName", JSON.stringify(res.data.user.name));
                window.localStorage.setItem("userLastname", JSON.stringify(res.data.user.lastname));
                
                window.alert('vos changements ont été pris en compte')
            })
            .catch((error) => console.log(error))  
        }

    const deleteAccount = async (userId) => {
        console.log(token)
        await axios
            .delete(`http://localhost:8080/api/account/${userId}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                window.alert("votre compte a bien été supprimé")
                window.location = '/';
            })
            .catch((error) => console.log(error))
    }
    
    return (
        <div className='grp-accueil'>
            <div className="grp-accueil__login-ou-signup">
                <div className="grp-accueil__login">
                    <form 
                        id="infos-profil"
                        onSubmit={updateAccount}>
                        
                        <div>
                            <img 
                                src={photoProfil} 
                                alt="photo profil" 
                                className="grp-banner__vignette-profil statut-left tooltip" 
                                title="Modifier la photo"/>
                        </div>

                        <div className='info-modifiable'>
                            <label>Prénom</label>
                            <input 
                                placeholder={userName} 
                                tabIndex="1" 
                                onChange={(e) => setPrenom(e.target.value)}/>
                        </div>

                        <div className='info-modifiable'>
                            <label>Nom</label>
                            <input 
                                placeholder={userLastname} 
                                tabIndex="1" 
                                onChange={(e) => setNom(e.target.value)}/>
                        </div>

                        <div>
                            <button 
                                className="save__btn" 
                                // type="submit" 
                                onClick={updateAccount} >Enregistrer mes modifications
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grp-accueil__signup">
                    <div 
                        id="delete-account"
                        onClick={()=>deleteAccount(userId)}>❌ Supprimer mon compte définitivement ❌</div>
                </div>
            </div>
        </div>
    )
}

export default Account