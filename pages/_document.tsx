import Document, {Head, Html, Main, NextScript, DocumentContext} from "next/document";
class MyDocument extends Document {

        render(){
        return (
            <Html lang="ko">
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Catch V</title>
                    <base href='/'/>
                    <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"/>

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