import React, { useContext, useState } from "react";
import AuthContext from "../store/auth";
import LoginForm from "../components/member/login/LoginForm";
import RegisterForm from "../components/member/register/RegisterForm";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <>
      <section className="h-min">
      {!isLogin ? (!authCtx.token && <LoginForm />) : (<RegisterForm />)}
      <div className="text-right">
        {!authCtx.token &&
          (isLogin ? (
            <button
              type="button"
              className="text-2xl font-mono mt-10 px-5 py-2 bg-blue-500 text-white  text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={switchAuthModelHandler}
            >
              LOGIN
            </button>
          ) : (
            <button
              type="button"
              className="text-2xl font-mono mt-10 px-5 py-2 bg-blue-500 text-white  text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={switchAuthModelHandler}
            >
              REGISTER
            </button>
          ))}
      </div>

      </section>
    </>
  );
};

export default HomePage;
