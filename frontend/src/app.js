import React from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Inscription from './pages/Inscription/Inscription'
import Error from '../src/components/Error/index'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import { useAuth } from "./utils/auth";
import { Contexte } from './utils/context'

const App = () => {
    const { userId, token, account, login, logout } = useAuth();
 
    if (token) {
            <Switch>
                <Route exact path="/accueil"><Home/></Route>
                <Route exact path="/account"><Account/></Route>
                <Route><Error/></Route>
            </Switch>
    } else {
            <Switch>
                <Route exact path="/signup"><Inscription/></Route>
                <Route><Error/></Route>
            </Switch>
    }

    return ( 
        <Contexte.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                account: account,
                login: login,
                logout: logout,
            }}
        >  
             <Switch>
                <Route exact path="/"><Login/></Route>
                <Route exact path="/signup"><Inscription/></Route>
                <Route><Error/></Route>
            </Switch>
        </Contexte.Provider>
    );
};

export default App;
