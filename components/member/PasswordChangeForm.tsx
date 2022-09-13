import {useContext, useRef} from "react";
import {useRouter} from "next/router";
import AuthContext from "../../store/auth";

const PasswordChangeForm = () => {
  const router = useRouter();
  const newPasswordInputRef = useRef() as any;
  useContext(AuthContext);
  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    // add validation
    fetch(
      `http://localhost:8080/user/api`,
      {
        method: "PATCH",
        body: JSON.stringify({
          userEmail: localStorage.getItem('userEmail'),
          userPassword: enteredNewPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      router.push("/");
    });
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-mono">Password Change</span>
        <form onSubmit={submitHandler} className=" w-full max-w-sm">
        <div className="flex items-center border-b border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" placeholder="New Password" aria-label="Full name"
            onChange={newPasswordInputRef}
                   />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-300 border-blue-500 hover:border-blue-300 text-sm border-4 text-white py-1 px-2 rounded"
            type="button">
            Change
          </button>
        </div>
      </form>
      </div>

    </>
  );
};
export default PasswordChangeForm;
