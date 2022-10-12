import {useContext} from "react";
import AuthContext from "../../store/auth";

const ProfileStatus = ()=>{
  const authCtx= useContext(AuthContext);

  return (
    <>
    <section className="flex flex-col content-center text-center">
      <span className="text-2xl font-mono">Profile Status</span>
      <div className="text-xl ">

        <p>User ID: {authCtx.token}</p>
      </div>
    </section>
    </>
  )
}
export default ProfileStatus;