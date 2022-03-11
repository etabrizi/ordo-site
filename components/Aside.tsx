import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';


type Props = {
    children?: ReactNode
}

const Aside = ({ children }: Props) => {

    const { lightTheme } = useContext(ThemeContext);
    return (
        <aside>
            {children}
            <style jsx>{`
        aside {
            position: block;
            padding: 20px;
            border-radius: 1.6em;
            width: 100%;  
            color: #000; 
            background-color: ${lightTheme ? '#ffa800' : '#fff'};
            transition: background-color 0.2s;
        }

        @media only screen and (min-width: 767px) {
            aside {
                position: absolute;
                width: 33.33%;
                right: 20px;
                top:40px;
            }
        }
    
`}</style>
        </aside>
    )
}

export default Aside
