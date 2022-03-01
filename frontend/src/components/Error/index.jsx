import './Index.css'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
        <Banner />
        <div className='grp-accueil'>
            <div className="Msg__error-404">
                <p> Cette page n'existe pas ! 😢</p>
               <Link to="/">Revenir à la page d'accueil</Link>
            </div> 
        </div>
        <Footer />
    </div>
    )
}
 
export default Error