import { useContext, useRef } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth";

const PasswordChangeForm = () => {
  const router = useRouter();
  const newPasswordInputRef = useRef() as any;
  const authCtx = useContext(AuthContext);
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
          returnSecureToken: false,
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
          <label htmlFor="new-password">New Password</label>
          <input
            minLength={7}
            type="password"
            id="new-password"
            ref={newPasswordInputRef}
          />
        </div>
        <div>
          <button>Change password</button>
        </div>
      </form>
    </>
  );
};
export default PasswordChangeForm;
