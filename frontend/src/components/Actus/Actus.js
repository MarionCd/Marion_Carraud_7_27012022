import './Actus.css'
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