import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
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
                    {/* Tawk.to Script */}
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                                (function(){
                                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                                    s1.async=true;
                                    s1.src='https://embed.tawk.to/66c45425ea492f34bc080a77/1i5nehd39';
                                    s1.charset='UTF-8';
                                    s1.setAttribute('crossorigin','anonymous');
                                    s0.parentNode.insertBefore(s1,s0);
                                })();
                            `,
                        }}
                    />
                    {/* End of Tawk.to Script */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
