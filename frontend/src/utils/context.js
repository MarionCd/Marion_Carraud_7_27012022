import { createContext } from "react";

export const Contexte = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    account: null,
    login: () => {},
    logout: () => {},
});
