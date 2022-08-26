import {Head, Html, Main, NextScript} from "next/document";

const MyDocument =()=> {
    return(
            <Html lang="ko">
                <Head>
                    <meta charSet="utf-8" />
                    <title>Catch V</title>
                </Head>
               <body>
               <Main/>
               <NextScript/>
               </body>
            </Html>
        );
    };
export default MyDocument;