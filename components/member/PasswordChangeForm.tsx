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
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-password" className="relative block p-3 border-2 border-gray-200 rounded-lg">
            <input
              className=" bg-orange-50 w-full px-0 pt-3.0 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
              placeholder="userEmail"
              minLength={7}
              type="password"
              id="new-password"
              ref={newPasswordInputRef}
            />
            <span className="absolute bg-orange-50 text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
              New Password
            </span>
          </label>
          <button>Change password</button>
        </div>
      </form>
    </>
  );
};
export default PasswordChangeForm;
