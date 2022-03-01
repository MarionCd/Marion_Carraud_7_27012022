import React from "react";
import BannerConnecte from '../../components/BannerConnecte/BannerConnecte'
import Actus from '../../components/Actus/Actus'
import Footer from '../../components/Footer/Footer'
import './Home.css'

function Home() {
    return (
        <div> 
            <BannerConnecte />
            <Actus />
            <Footer />
        </div>
    )
}

export default Home