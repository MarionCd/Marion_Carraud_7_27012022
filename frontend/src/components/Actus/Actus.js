import './Actus.css'
import { Link } from 'react-router-dom'
import photoProfil from '../../assets/Photo-profil-defaut.png'
import ActusRight from './Right/ActusRight'
import ActusLeft from './Left/ActusLeft'
import ActusCenter from './Center/ActusCenter'

function Actus() {

    return (
        <div className='grp-accueil__connecte'>
            <ActusLeft />
            <ActusCenter />
            <ActusRight/>
        </div>
    )
}

export default Actus