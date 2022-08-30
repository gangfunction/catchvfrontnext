import {useContext, useRef} from "react";
import AuthContext from "../../store/auth";
import {useNavigate} from "react-router-dom";
import {useRouter} from "next/router";
const PasswordChangeForm = () => {
    const router = useRouter();
    const newPasswordInputRef = useRef() as any;
    const authCtx= useContext(AuthContext) ;
    const submitHandler = (event:any)=>{
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;
        //add validation
        fetch(`https://identitytoolkit.googleapis.com/vi/accounts:update?key=${process.env.}`,
            {
                method:'POST',
                body:JSON.stringify({
                    idToken:authCtx.token,
                    password:enteredNewPassword,
                    returnSecureToken:false,
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((res:any)=>{
                router.push('/');
        })

    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='new-password'>New Password</label>
                    <input minLength={7} type='password' id='new-password' ref={newPasswordInputRef}/>
                </div>
                <div>
                    <button>Change password</button>
                </div>
            </form>


        </>
    );

}
export default PasswordChangeForm;