import { useState, useCallback } from "react";

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [account, setAccount] = useState(false);
   
    const login = useCallback((userId, token, account) => {
        setUserId(userId);
        setToken(token);
        setAccount(account);

        localStorage.setItem(
            "data",
            JSON.stringify({
                userId: userId,
                token: token,
                account: account,
               
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setAccount(null);
      
        localStorage.removeItem("data");
    }, []);

       return { userId, token, account, login, logout };
};



// import { useState, useCallback, useEffect } from "react";

// let logoutTimer;

// export const useAuth = () => {
//     // UseState du AuthContext
//     const [token, setToken] = useState(false);
//     const [userId, setUserId] = useState(false);
//     const [account, setAccount] = useState(false);
//     const [tokenExpirationDate, setTokenExpirationDate] = useState();
 
//     // Login usCallback pour ne pas rentrer dans un cycle infinit
//     const login = useCallback((userId, token, account, expirationDate) => {
//         setUserId(userId);
//         setToken(token);
//         setAccount(account);

//         // Creér une date 24h dans le futur (validité de la session)
//         const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
//         setTokenExpirationDate(tokenExpirationDate);

//         // Stocker les paramètres dans le localStorage du navigateur
//         localStorage.setItem(
//             "userData",
//             JSON.stringify({
//                 userId: userId,
//                 token: token,
//                 account: account,
//                 expiration: tokenExpirationDate.toISOString(),
//             })
//         );
//     }, []);

//     // logout remets tout à null et supprime l'objet du localStorage
//     const logout = useCallback(() => {
//         setToken(null);
//         setUserId(null);
//         setAccount(null);
//         setTokenExpirationDate(null);
//         localStorage.removeItem("userData");
//     }, []);

//     // Timer de la session
//     useEffect(() => {
//         if (token && tokenExpirationDate) {
//             const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
//             logoutTimer = setTimeout(logout, remainingTime);
//         } else {
//             clearTimeout(logoutTimer);
//         }
//     }, [token, logout, tokenExpirationDate]);

//     // Auto-login à l'application en utilisant le localStorage pour s'identifier
//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem("userData"));

//         if (
//             storedData &&
//             storedData.userId &&
//             storedData.token &&
//             storedData.account &&
//             new Date(storedData.expiration) > new Date()
//         ) {
//             login(storedData.userId, storedData.token, storedData.account, new Date(storedData.expiration));
//         }
//     }, [login]);

//     return { userId, token, account, login, logout };
// };




// import { useState, useCallback, useEffect } from "react";

// let deconnexion;

// export const useAuth = () => {
//     const [token, setToken] = useState(false);
//     const [userId, setUserId] = useState(false);
//     const [account, setAccount] = useState(false);
//     const [tokenExpire, setTokenExpire] = useState();
   
//     const login = useCallback((userId, token, account) => {
//         setUserId(userId);
//         setToken(token);
//         setAccount(account);
    
//         const tokenExpire = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
//         setTokenExpire(tokenExpire);
  
//         localStorage.setItem(
//             "data",
//             JSON.stringify({
//                 userId: userId,
//                 token: token,
//                 account: account,
//                 expiration: tokenExpire.toISOString(),
               
//             })
//         );
//     }, []);

//     const logout = useCallback(() => {
//         setToken(null);
//         setUserId(null);
//         setAccount(null);
//         setTokenExpire(null);
      
//         localStorage.removeItem("data");
//     }, []);

//     useEffect(() => {
//         if (token && tokenExpire) {
//             const remainingTime = expirationDate.getTime() - new Date().getTime();
//             deconnexion = setTimeout(logout, remainingTime);
//         } else {
//             clearTimeout(deconnexion);
//         }
//     }, [token, logout, expirationDate])


//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem("userData"));

//         if (
//             storedData &&
//             storedData.userId &&
//             storedData.token &&
//             storedData.account &&
//             new Date(storedData.expiration) > new Date()
//         ) {
//             login(storedData.userId, storedData.token, storedData.account, new Date(storedData.expiration));
//         }
//     }, [login]);




//        return { userId, token, account, login, logout };
// };
