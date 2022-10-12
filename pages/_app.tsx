import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../store/auth";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Head>
          <title>Catch V</title>
          <link rel="shortcut icon" href="/icon/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
          <link rel="manifest" href="/icon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/img/favi/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Our Website Supports for Revenge Porno Victims"/>
          <meta property="og:title" content="Catch V"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content=""/>
          <meta property="og:image" content=""/>
          <meta property="og:article:author" content="Catch V"/>
        </Head>
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
