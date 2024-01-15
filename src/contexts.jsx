import { createContext } from "react";

export const tweetContext = createContext(null);
export const UserContext = createContext({
    isLogged: false,
    name: "",
    pseudo: "",
    userImageProfil:""
});
