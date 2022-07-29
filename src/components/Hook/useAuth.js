import { useState } from "react";

const useAuth = () => {
  const getAuthStr = () => {
    const authString = localStorage.getItem("authStr");
    const authKey = JSON.parse(authString);
    return authKey;
  };

  const [auth, setAuth] = useState(getAuthStr());

  const saveAuth = (authKey) => {
    localStorage.setItem("authStr", JSON.stringify(authKey));
    setAuth(authKey);
  };

  return {
    saveAuth,
    auth,
    setAuth,
  };
};

export default useAuth;
