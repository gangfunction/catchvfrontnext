import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../store/auth";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Header/>
        <main className="relative min-h-full ">
          <Component {...pageProps} />

        </main>
        <Footer/>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
