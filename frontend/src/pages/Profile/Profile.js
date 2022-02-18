import BannerConnecte from '../../components/BannerConnecte/BannerConnecte'
import Footer from '../../components/Footer/Footer'
import Account from '../../components/Account/Account'
import './Profile.css'

function Profile() {
    return (
        <div>
            <BannerConnecte />
            <Account/>
            <Footer />
        </div>
    )
}

export default Profile