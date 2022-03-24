import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';

type Props = {
    children?: ReactNode,
    minHeight?: number
}

const ContentBlock = ({ children, minHeight }: Props) => {
    const { lightTheme } = useContext(ThemeContext);

    return (<div className="content-block">
        {children}
        <style jsx>{`
        .content-block {
            padding: 20px;
            background-color: ${lightTheme ? '#fff' : '#000'};
            border-bottom-left-radius: 1.6em;
            border-bottom-right-radius: 1.6em;
            color: ${lightTheme ? '#000' : '#fff'};
            transition: background-color  0.2s, color 0.2s;
            position: relative;
        }
        @media only screen and (min-width: 767px) {
            .content-block {
                padding: 25px 390px 25px 25px;
                margin: 0;
                min-height: ${minHeight ? minHeight : '380'}px;
                display:block;
                position: relative;
            }
        }
`}</style>
    </div>)
}

export default ContentBlock
