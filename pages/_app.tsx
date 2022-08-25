import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";
import {AuthContextProvider} from "../store/auth";
import HomePage from "./index";

function App({Component, pageProps}: AppProps) {
    return (
        <AuthContextProvider>
            <Layout>
                <HomePage/>
                <Component {...pageProps} />
            </Layout>
        </AuthContextProvider>
    );
}

export default App
