import {useContext, useRef} from "react";
import {useRouter} from "next/router";
import AuthContext from "../../store/auth";

const PasswordChangeForm = () => {
  const router = useRouter();
  const newPasswordInputRef = useRef() as any;
  useContext(AuthContext);
  const submitHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const enteredNewPassword = newPasswordInputRef.current.value;
    const userEmail = localStorage.getItem('userEmail');
    // add validation
    fetch(
      `http://localhost:8080/user/api`,
      {
        method: "PATCH",
        body: JSON.stringify({
          userEmail: userEmail,
          userPassword: enteredNewPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async(data:any) => {
      const response = await data.json();
      if (response === "ACCEPTED") {
        alert("비밀번호가 변경되었습니다.");
        await router.push('/');
      }
      else{
        alert("비밀번호 변경에 실패하였습니다.");
        await router.push("/profile");
      }
    }).catch((error: any) => {
      console.log(error);
      alert("비정상적인 접근입니다.");
      router.push("/profile");
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
           ref={newPasswordInputRef}
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
