import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null) as any;
  const passwordInputRef = useRef<HTMLInputElement>(null) as any;

  const submitHandler = useCallback((event: any) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: any) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data: any) => {
          const errorMessage = "Authentication failed";
          throw new Error(errorMessage);
        });
      })
      .then(() => {
        console.log(enteredEmail, enteredPassword);
        router.reload();
      })
      .catch((err: any) => {
        alert(err.message);
      });
  }, []);
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
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
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setUserPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage("특수문자 포함 8글자 이상");
        setIsPassword(false);
      } else {
        setPasswordMessage("It's safe");
        setIsPassword(true);
      }
    },
    []
  );

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (userPassword === passwordConfirmCurrent) {
        setPasswordConfirmMessage("It's valid");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("Please enter same password again");
        setIsPasswordConfirm(false);
      }
    },
    [userPassword]
  );
  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="m-3 text-center">REGISTER</div>
              <form onSubmit={submitHandler}>
                <div className="mb-6">
                  <span>Email</span>

                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    ref={emailInputRef}
                    onChange={onChangeEmail}
                    value={userEmail}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {userEmail.length > 0 && (
                    <div className={"text-right"}>
                      <span
                        className={`message${isEmail ? "success" : "error"}`}
                      >
                        {emailMessage}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <span>Password</span>
                  <input
                    type="text"
                    id="password"
                    placeholder="password"
                    ref={passwordInputRef}
                    onChange={onChangePassword}
                    value={userPassword}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {userPassword.length > 0 && (
                    <div className={"text-right"}>
                      <span
                        className={`message${isPassword ? "success" : "error"}`}
                      >
                        {passwordMessage}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <span>Password Confirm</span>

                  <input
                    onChange={onChangePasswordConfirm}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {passwordConfirm.length > 0 && (
                    <div className="text-right">
                      <span
                        className={`message ${
                          isPasswordConfirm ? "success" : "error"
                        }`}
                      >
                        {passwordConfirmMessage}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center lg:text-left">
                  {!isLoading && (
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Submit
                    </button>
                  )}
                  {isLoading && (
                    <button className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
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

export default RegisterForm;
