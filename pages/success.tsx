import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import Hub from '../components/Hub'
import Link from 'next/link'



const IndexPage = () => {

  const { lightTheme } = useContext(ThemeContext);

  return (<Hub pageTitle="Our aim is to provide UK business with the best skilled consultants, in all areas of digital delivery.">
    <div className="home-panel">
      Thanks for your message
    </div>
    <style jsx>{`
     .home-panel {
       display: flex; 
       width: 100%;
       background-color: ${lightTheme ? '#fff' : '#000'};
       border-radius: 1.6em;
       padding: 20px;
       box-sizing: border-box;
       flex-direction: column;
       transition: background-color 0.2s;
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
      font-size: 1.4em;
      margin-bottom: 30px;
      padding: 0 0 0 20px;
      color: ${lightTheme ? '#000' : '#fff'};
      transition: color 0.2s;
    }
    a {
      font-size: 1.4em;
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
        font-size: 1.4em;
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
