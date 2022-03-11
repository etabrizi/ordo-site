
import { ReactNode, Fragment } from 'react'
import Footer from './Footer';
import Heading from './Heading';
import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';

type Props = {
  children?: ReactNode
  pageTitle?: string,
  activeNav: string
}

const Layout = ({ children, pageTitle }: Props) => {

  const { lightTheme } = useContext(ThemeContext);

  return (<Fragment>
    <div className="container">
      <header>
        <Heading />
        {pageTitle && <h2>{pageTitle}</h2>}
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
    <style jsx>{`
        .container {
          margin: 0 auto;
          width: 100%;
          height: 529px;
          border-radius: 1.6em;
          background: ${lightTheme ? 'url(/pages_bg.png) no-repeat' : 'url(/pages_bg_dark.png) no-repeat'};
        }
        h2 {
          font-size: 4em;
          margin: 100px 0 20px 25px;
        }
        @media only screen and (min-width: 767px) { 
          .container { 
            width: 1000px;
            margin: 20px auto;
          }
          h2 {
            font-size: 4em;
            margin: 100px 0 80px 25px;
          }
        }
    `}</style>
  </Fragment>)
}

export default Layout
