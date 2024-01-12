import { createContext } from "react";

export const tweetContext = createContext(null);
export const UserContext = createContext({
    isLogged: false,
    pseudo: "",
});
