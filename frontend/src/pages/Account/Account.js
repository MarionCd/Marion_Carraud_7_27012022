import BannerConnecte from '../../components/BannerConnecte/BannerConnecte'
import Footer from '../../components/Footer/Footer'
import AccountInformations from '../../components/Account/Account'
import './Account.css'

function Account() {
    return (
        <div>
            <BannerConnecte />
            <AccountInformations />
            <Footer />
        </div>
    )
}

export default Account