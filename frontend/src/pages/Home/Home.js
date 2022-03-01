import BannerConnecte from '../../components/BannerConnecte/BannerConnecte'
import Actus from '../../components/Actus/Actus'
import Footer from '../../components/Footer/Footer'
import './Home.css'

import React, { useState, useEffect, useContext } from "react";

import { Contexte } from '../../utils/context'
import axios from 'axios'

function Home() {

    // const { token } = useContext(Contexte);
    // console.log(auth.token)

    return (
        <div>
            <BannerConnecte />
            <Actus />
            <Footer />
        </div>
    )
}

export default Home