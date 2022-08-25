import {MongoClient} from "mongodb";
import {useContext} from "react";
import AuthContext from "../store/auth";
import LoginForm from "../components/login/LoginForm";
const MONGODB= process.env.MONGO_URL as any;
function HomePage(props:any) {
    const authCtx = useContext(AuthContext)
    return (
        <>
            {!authCtx.isLoggedIn && <LoginForm/>}
        </>
    )
}

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        MONGODB
    );



    await client.close();

    return {
        props: {
        },
    };
}

export default HomePage;