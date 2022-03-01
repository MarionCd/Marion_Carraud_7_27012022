import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Inscription from './pages/Inscription/Inscription'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import Error from '../src/components/Error/index'
import {hasAuthenticated} from "./utils/api";
import Auth from "./utils/context"
import AuthenticatedRoute from "./utils/authenticated";
import './index.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    
    return (
        <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <BrowserRouter>
                <Switch>
                    <AuthenticatedRoute exact path="/accueil" component={Home}/>
                    <AuthenticatedRoute exact path="/account" component={Account}/>
                    
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Inscription}/>
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </Auth.Provider>
    );
     
};

export default App;






// import React from 'react';
// import './index.css';
// import { Route, Switch } from 'react-router-dom'
// import Login from './pages/Login/Login'
// import Inscription from './pages/Inscription/Inscription'
// import Error from '../src/components/Error/index'
// import Home from './pages/Home/Home'
// import Account from './pages/Account/Account'
// import { useAuth } from "./utils/auth";
// import { Contexte } from './utils/context'

// const App = () => {
//     const { userId, token, account, login, logout } = useAuth();
 
//     if (token) {
//             <Switch>
//                 <Route exact path="/accueil"><Home/></Route>
//                 <Route exact path="/account"><Account/></Route>
//                 <Route><Error/></Route>
//             </Switch>
//     } else {
//             <Switch>
//                  <Route exact path="/"><Login/></Route>
//                 <Route exact path="/signup"><Inscription/></Route>
//                 <Route><Error/></Route>
//             </Switch>
//     }

//     return ( 
//         <Contexte.Provider
//             value={{
//                 isLoggedIn: !!token,
//                 token: token,
//                 userId: userId,
//                 account: account,
//                 login: login,
//                 logout: logout,
//             }}
//         >   
//              <Switch>
//                 <Route exact path="/"><Login/></Route>
//                 <Route exact path="/signup"><Inscription/></Route>
//                 <Route><Error/></Route>
//             </Switch>
//         </Contexte.Provider>
//     );
// };

// export default App;
