import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "Groupomania"
    return (
        <div className='lmj-banner'>
            <img src ={logo} alt ="Groupomania" className='lmj-logo'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner