import "../styles/globals.css";

import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../store/auth";
import MainNavigation from "../components/Layout/MainNavigation";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={7}
          showOnShallow={true}
        />
        <MainNavigation />
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
