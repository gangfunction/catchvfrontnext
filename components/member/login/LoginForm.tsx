import React, {useState, useRef, useContext, useCallback} from "react";
import {useRouter} from "next/router";
import AuthContext from "../../../store/auth";
import useSWR from 'swr';

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [, setIsPassword] = useState<boolean>(false);

  const [emailMessage, setEmailMessage] = useState<string>("");
  const emailInputRef = useRef<HTMLInputElement>() as any;
  const passwordInputRef = useRef<HTMLInputElement>() as any;


  const {data, error} = useSWR('http://localhost:8080/user/api');

  /**
   * 이메일을 보낼때 사용하는 함수
   */
  const submitHandler = useCallback((event: { preventDefault: () => void; stopPropagation: () => void; }) => {
      event.preventDefault();
      event.stopPropagation();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      /** 로그인할때 쿠키에 이메일 저장 */
      localStorage.setItem('userEmail', enteredEmail);
      // api 서버 주소
      fetch('http://localhost:8080/user/api', {
        method: "POST",
        body: JSON.stringify({
          userEmail: enteredEmail,
          userPassword: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data: any) => {
          setIsLoading(false);
          console.log(data);
          authCtx.login(enteredEmail);
        })
        .catch(() => {
          alert("Wrong with your email or password");
        });
    },
    [authCtx, router]
  );
  /**이메일 정규식 체크*/
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
      const emailCurrent = e.target.value;
      setUserEmail(emailCurrent);

      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("Invalid email form");
        setIsEmail(false);
      } else {
        setEmailMessage("Correct!");
        setIsEmail(true);
      }
    },
    []
  );
  /**패스워드 정규식 체크*/
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setUserPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    },
    []
  );

  return (
    <>
      <section className="h-min">
        <div className="px-4  text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
              <div className="m-3 text-center font-duo text-5xl text-blue-500 ">LOGIN</div>
              <form onSubmit={submitHandler}>
                <div className="mb-6">
                  <span className="font-mono text-xl text-blue-500 ">Email</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    ref={emailInputRef}
                    onChange={onChangeEmail}
                    value={userEmail}
                    className=" form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {userEmail.length > 0 && (
                    <div className={"text-right"}>
                      <span
                        className={`font-mono text-l text-blue-500 message${isEmail ? "success" : "error"}`}
                      >
                        {emailMessage}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <span className="font-mono text-xl text-blue-500">Password</span>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    ref={passwordInputRef}
                    onChange={onChangePassword}
                    value={userPassword}
                    className="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />

                </div>

                <div className="text-center lg:text-left">
                  {!isLoading && (
                    <button
                      type="submit"
                      className="text-2xl font-mono px-5 py-2 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Submit
                    </button>
                  )}
                  {isLoading && (
                    <button
                      className="text-2xl font-mono px-5 py-2 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Sending Signup Requests
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;

