import React, { useCallback, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token: any) => {},
  logout: () => {},
});
const retrieveStoredToken = () => {
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("token");
    return {
      token: storedToken,
    };
  }
};

export const AuthContextProvider = (props: any) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);


  const userIsLoggedIn = !!token;

  const loginHandler = (token: any) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  } as any;
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
