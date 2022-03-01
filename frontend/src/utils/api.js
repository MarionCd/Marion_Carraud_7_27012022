import jwtDecode from "jwt-decode";

export function hasAuthenticated() {
    const token = (window.localStorage.getItem("userToken"));
    const resultTokenValidation = token ? tokenIsValid(token) : false;

    if (resultTokenValidation === false) {
        window.localStorage.removeItem("userToken");
    }
    return resultTokenValidation;
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
