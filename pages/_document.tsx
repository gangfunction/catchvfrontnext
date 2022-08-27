import Document, {Head, Html, Main, NextScript, DocumentContext} from "next/document";
class MyDocument extends Document {

        render(){
        return (
            <Html lang="ko">
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Catch V</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    };
}
export default MyDocument;