// import App from 'next/app'
import '../reset.css'
import '../main.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContextProvider from '../contexts/themeContext';


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Ordo Consultancy Ltd - A Digital Consultancy Service</title>
        <meta name="description" content="Our aim is to provide UK business with the best skilled consultants, in all areas of Digital Delivery."
        />
        <link rel='shortcut icon' sizes='16x16 32x32 48x48' href='/assets/favicon.ico' type='image/x-icon' />
        <meta name="keywords" content="digital,consultancy,psd,html,php,css,ASP,CMS,web,development,xhtml" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Nunito&v1&display=swap' rel='stylesheet' type='text/css' />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}