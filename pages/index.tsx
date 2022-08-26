import {useContext} from "react";
import AuthContext from "../store/auth";
import LoginForm from "../components/login/LoginForm";


const HomePage=(props:any)=> {
    const authCtx = useContext(AuthContext)
    return (
        <>
            {!authCtx.isLoggedIn && <LoginForm/>}
        </>
    )
}


export default HomePage;