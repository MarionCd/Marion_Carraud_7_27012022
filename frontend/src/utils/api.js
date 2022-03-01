import jwtDecode from "jwt-decode";

export function login() {
    const token = (window.localStorage.getItem("userToken"));
    const resToken = token ? tokenIsValid(token) : false;

    if (resToken === false) {
        window.localStorage.removeItem("userToken");
    }
    return resToken;
}

export function logout() {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("userId");
}

export function tokenIsValid(token) {
    const {exp: expiration} = jwtDecode(token);
    
    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }
    return false;
}
