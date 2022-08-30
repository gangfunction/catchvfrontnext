import React, { useContext, useState } from "react";
import getConfig from "next/config";
import AuthContext from "../store/auth";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";

const HomePage = () => {
  const { publicRuntimeconfig } = getConfig();
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <>
      {!authCtx.isLoggedIn && (isLogin ? <LoginForm /> : <RegisterForm />)}
      {!authCtx.isLoggedIn &&
        (!isLogin ? (
          <button
            type="button"
            className="inline-block m-3 px-5 py-1 bg-white-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={switchAuthModelHandler}
          >
            Login with Existing Account
          </button>
        ) : (
          <button
            type="button"
            className="inline-block  px-5 py-1 bg-white-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={switchAuthModelHandler}
          >
            Creating new Account
          </button>
        ))}
    </>
  );
};

export default HomePage;
