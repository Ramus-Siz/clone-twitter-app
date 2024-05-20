import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "./utils/baseUrl.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);

  const signin = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_API_URL}/api/auth/signin`,
        data
      );
      if (response.status === 200) {
        setCurrentUser(response.data.currentUser);
        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.currentUser)
        );
        sessionStorage.setItem("tweets", JSON.stringify(response.data.tweets));

        sessionStorage.setItem(
          "userWithInfos",
          JSON.stringify(response.data.userWithInfos)
        );
        sessionStorage.setItem(
          "session",
          JSON.stringify(response.data.session)
        );
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Signin error:", error);
      return false;
    }
  };

  const signout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("tweets");
    sessionStorage.removeItem("userWithInfos");
  };
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
