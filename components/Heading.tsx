import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';


const Heading = () => {

    const { lightTheme, switchTheme } = useContext(ThemeContext);

    return (<h1>Ordo Consultancy Ltd <span>- A Digital Consultancy Service</span>
        <a title="Change theme" className="icon-eye theme-switcher" onClick={switchTheme}></a>
        <style jsx>{`

      h1 { 
        display:block; 
        background-color: ${lightTheme ? '#404040' : '#000'};
        margin:0; 
        position: relative;
        color: #ececec; 
        font-family: Arial, Helvetica, sans-serif; 
        padding: 5px 0 5px 20px; 
        font-size: 1.4em; 
        text-align: center;
        border-top-left-radius: 0; 
        border-top-right-radius: 0; 
        border-bottom-left-radius: 0; 
        border-bottom-right-radius: 0;
        margin: 0 0 20px 0;
        transition: background-color 0.2s;
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
                border-radius: 1.6em; 
            }

            span {
                display: inline;
            }
        }
`}</style>
    </h1>)
}

export default Heading
