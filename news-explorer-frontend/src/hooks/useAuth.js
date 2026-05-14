import { useState } from "react";

export const useAuth = () => {
  const [userData, setUserData] = useState({
    email: "test@test.com",
    name: "Test",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return { userData, setUserData, isLoggedIn, setIsLoggedIn };
};
