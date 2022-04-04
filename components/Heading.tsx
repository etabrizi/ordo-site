import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import Link from 'next/link'

const Heading = () => {

    const { lightTheme} = useContext(ThemeContext);

    return (<h1><Link href="/"><a className="home-link">Ordo Consultancy Ltd</a></Link> <span>- A Digital Consultancy Service</span>
        <style jsx>{`
      h1 { 
        display:block; 
        background-color: ${lightTheme ? '#404040' : '#000'};
        margin:0; 
        position: relative;
        color: #ececec; 
        font-family: Arial, Helvetica, sans-serif; 
        padding: 25px 0 25px 25px; 
        font-size: 1.4em; 
        text-align: left;
        border-top-left-radius: 0; 
        border-top-right-radius: 0; 
        border-bottom-left-radius: 0; 
        border-bottom-right-radius: 0;
        margin: 0;
        transition: background-color 0.2s;
        }
        .home-link {
            color: #fff;
            text-decoration: none;
            
        }
        .theme-switcher {
            position: absolute;
            right: 7px;
            top: 3px;
            cursor: pointer;
        }
        span {
            display: none;
        }
        @media only screen and (min-width: 767px) {
            h1 {
                padding: 5px 0 5px 20px; 
                border-radius: 1.6em; 
                text-align: center;
            }

            span {
                display: inline;
            }
        }
`}</style>
    </h1>)
}

export default Heading
