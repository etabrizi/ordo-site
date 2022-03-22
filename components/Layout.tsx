
import { ReactNode, Fragment } from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import Heading from './Heading';
import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';

type Props = {
  children?: ReactNode
  pageTitle?: string,
  activeNav: string
}

const Layout = ({ children, pageTitle, activeNav }: Props) => {

  const { lightTheme } = useContext(ThemeContext);

  return (<Fragment>
    <div className="container">
      <header>
        <Heading />
        {pageTitle && <h2>{pageTitle}</h2>}
        <Navigation active={activeNav} />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
    <style jsx>{`
        .container {
          margin: 0 auto;
          position: relative;
          width: 100%;
          height: 529px;
          border-radius: 1.6em;
          background: ${lightTheme ? '#191919' : '#282828'};
        }
        .container:after {
          content: '';
          height: 50px;
          width: 125px;
          position: absolute;
          top: 60px;
          left: 25px;
          background: transparent url('data:image/svg+xml,%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504.9 138" style="enable-background:new 0 0 504.9 138;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E .st0%7Bfill:%23EDEDED;%7D .st1%7Bfill:%23F39200;%7D%0A%3C/style%3E%3Cpath class="st0" d="M440.1,8.4c-27,0-50.2,16.6-59.9,40.2V0H355v22c-11-8.5-24.8-13.7-39.7-13.7c-29.8,0-55,20.3-62.5,47.8 c-7.5-27.5-32.7-47.8-62.5-47.8c-30.1,0-55.5,20.7-62.7,48.6C120.3,29,94.9,8.4,64.8,8.4C29.1,8.4,0,37.4,0,73.2 C0,108.9,29.1,138,64.8,138c30.1,0,55.5-20.7,62.8-48.6c3.6,14.1,11.9,26.3,23,35V71.1h0.1c1.1-20.9,18.4-37.6,39.6-37.6 c21.2,0,38.5,16.7,39.6,37.6h20.7c0,0.7-0.1,1.4-0.1,2.1c0,35.7,29.1,64.8,64.8,64.8c29.7,0,54.7-20,62.4-47.3 c7.7,27.2,32.7,47.3,62.4,47.3c35.7,0,64.8-29.1,64.8-64.8C504.9,37.4,475.8,8.4,440.1,8.4 M64.8,112.9c-21.9,0-39.7-17.8-39.7-39.7 c0-21.9,17.8-39.7,39.7-39.7c21.9,0,39.7,17.8,39.7,39.7C104.5,95.1,86.7,112.9,64.8,112.9 M355,73.2c0,21.9-17.8,39.7-39.7,39.7 c-21.9,0-39.7-17.8-39.7-39.7c0-21.9,17.8-39.7,39.7-39.7C337.2,33.5,355,51.3,355,73.2L355,73.2z M440.1,112.9 c-21.9,0-39.7-17.8-39.7-39.7c0-21.9,17.8-39.7,39.7-39.7c21.9,0,39.7,17.8,39.7,39.7C479.8,95.1,462,112.9,440.1,112.9"/%3E%3Cpath class="st1" d="M128.2,109.7c-2.9,11.3-9.4,21.1-18.2,28.3h36.5C137.6,130.8,131.1,121,128.2,109.7"/%3E%3C/svg%3E%0A') no-repeat;
        }
        h2 {
          font-size: 4em;
          margin: 80px 0 40px 25px;
        }
        @media only screen and (min-width: 767px) { 
          .container { 
            width: 1000px;
            margin: 20px auto;
          }
          .container:after {
            width: 182px;
          }
          h2 {
            font-size: 5em;
            margin: 100px 0 80px 25px;
          }
        }
    `}</style>
  </Fragment>)
}

export default Layout
