import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import Hub from '../components/Hub'
import Link from 'next/link'
import { isMobile } from 'react-device-detect';



const IndexPage = () => {

  const { lightTheme } = useContext(ThemeContext);

  return (<Hub activeNav="home" pageTitle={isMobile ? `The best skilled consultants, in all areas of digital delivery` : `Our aim is to provide UK business with the best skilled consultants, in all areas of digital delivery`}>
     
    <div className="home-panel">      
      <div>
        <h3>Web Services</h3>
        <ul>
          <li>Front-end Development</li>
          <li>Mobile App Development</li>
        </ul>
        <Link href="/web"><a>View our web services</a></Link>
      </div>
      <div>
        <h3>Design Services</h3>
        <ul>
          <li>UI / UX Design</li>
          <li>Printed Marketing</li>
          <li>Digital illustration</li>
        </ul>
        <Link href="/design"><a>View our design services</a></Link>
      </div>
      <div>
        <h3>Training Services</h3>
        <ul>
          <li>Web Development</li>
          <li>Web / Digital Design </li>
        </ul>
        <Link href="/training"><a>View our training services</a></Link>
      </div>
    </div>
    <style jsx>{`
     .home-panel {
       display: flex; 
       width: 100%;
       background-color: ${lightTheme ? '#fff' : '#000'};
       border-radius: 1.6em;
       padding: 25px;
       box-sizing: border-box;
       flex-direction: column;
       transition: background-color 0.2s;
       min-height: 260px;
     }
     .home-panel div {
       width: 100%;
     }
     h3 {
      font-size: 1.7em;
      margin: 0 0 30px 0;
      color: ${lightTheme ? '#000' : '#fff'};
      transition: color 0.2s;
    }
    ul {
      font-size: 1.6em;
      margin-bottom: 30px;
      padding: 0 0 0 20px;
      color: ${lightTheme ? '#000' : '#fff'};
      transition: color 0.2s;
    }
    a {
      font-size: 1.6em;
      text-align: center;
      background: #ffa800;
      bottom: 0;
      display: block;
      padding: 7px 20px;
      border-radius: 1.6em;
      text-decoration: none;
      color: #000;
      transition: scale 12.2s;
      margin-bottom: 30px;
    }
    a:hover {
      background: #e0e0e0;
      transform: scale(1.05,1.05);
      transition: transform 0.2s;
    }
     @media only screen and (min-width: 767px) {

      h3 {
        font-size: 1.8em;
        margin: 10px 0 20px 0;
      }
     
      .home-panel {
        flex-direction: row;
      }
      .home-panel div {
        width: 33.333%;
        position: relative;
        min-height: 170px;
      }
      a {
        font-size: 1.6em;
        text-align: left;
        position: absolute;
        bottom: 0;
        display: block;
        margin: 0;
        padding: 7px 20px;
        border-radius: 1.6em;
        text-decoration: none;
        transition: transform 0.2s;
      }
      a:hover {
        background: #e0e0e0;
        transform: scale(1.05,1.05);
        transition: transform 0.2s;
      }
     
     }
    `}</style>
  </Hub>)
}

export default IndexPage
