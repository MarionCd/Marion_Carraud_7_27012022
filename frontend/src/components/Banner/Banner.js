import logo from '../../assets/icon-left-font-monochrome-white.svg'
import './Banner.css'

function Banner() {
    const slogan = "Echanger pour mieux créer"
    return (
        <div className='grp-banner'>
            <img src={logo} alt='Groupomania' className='grp-logo' />
            <div className="grp-banner__line"></div>
            <div className="grp-banner__slogan">{slogan}</div>
        </div>
    )
}

export default Banner