import { useState } from "react";

export const useAuth = () => {
  const [userData, setUserData] = useState({ name: "Test" });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return { userData, setUserData, isLoggedIn, setIsLoggedIn };
};
