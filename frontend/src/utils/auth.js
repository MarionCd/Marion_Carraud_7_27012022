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
