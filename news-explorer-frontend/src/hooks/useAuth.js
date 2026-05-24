import { useEffect, useState } from "react";
import { mainApi } from "../utils/MainApi.js";

export const useAuth = () => {
  const [userData, setUserData] = useState({ email: "", name: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) return;

      try {
        const data = await mainApi.getUserInfo();
        setUserData(data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return { userData, setUserData, isLoggedIn, setIsLoggedIn };
};
