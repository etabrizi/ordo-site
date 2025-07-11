import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Other head elements can go here */}
                </Head>
                <body>
                    <Main />
                    <NextScript />   
                </body>
            </Html>
        );
    }
}

export default MyDocument;
