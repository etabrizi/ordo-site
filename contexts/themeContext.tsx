import { createContext, useState } from 'react';

interface IContextProps {
    lightTheme: boolean,
    switchTheme: () => void
}

export const ThemeContext = createContext({} as IContextProps);

const ThemeContextProvider = (props: any) => {
    const [lightTheme, setLightTheme] = useState(true);

    const switchTheme = () => {
        lightTheme ? setLightTheme(false) : setLightTheme(true);
    }

    return (
        <ThemeContext.Provider value={{ lightTheme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;