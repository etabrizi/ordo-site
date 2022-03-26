
import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';


type Props = {
    active: string
}

const Navigation = ({ active }: Props) => {
    const { lightTheme } = useContext(ThemeContext);
    return (<nav>
        <ul>
            <li id="home" className={active === 'home' ? 'active' : ''}><Link href="/"><a>Home</a></Link></li>
            <li id="web" className={active === 'web' ? 'active' : ''}><Link href="/web"><a>Web</a></Link></li>
            <li id="design" className={active === 'design' ? 'active' : ''}><Link href="/design"><a>Design</a></Link></li>
            <li id="training" className={active === 'training' ? 'active' : ''}><Link href="/training"><a>Training</a></Link></li>
            <li id="contact" className={active === 'contact' ? 'active' : ''}><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
        <style jsx>{`
    nav {
        width: 100%;
      
    }
    nav ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 1.4em;
        line-height: 1em;
        flex-direction: column;
    }
    nav li a {
        background: #494949;
        color: #fff;
        padding: 20px;
        text-decoration: none;
        width: 100%;
        display: block;
        box-sizing: border-box;
    }
    nav li.active a {
        background-color: ${lightTheme ? '#fff' : '#000'};
        color: ${lightTheme ? '#000' : '#fff'};
        transition: color 0.2s, background-color 0.2s;
     }
     @media only screen and (min-width: 767px) {

        nav {
            width: 100%;
            margin-left: 20px;
        }
        nav ul {
            flex-direction: row;
        }
        nav ul li{ 
            margin-right: 3px;
        }
        nav li a {
            padding: 14px 40px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

     }
`}</style>
    </nav>)
}

export default Navigation
