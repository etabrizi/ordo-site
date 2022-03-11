import { createContext, useState } from 'react';

interface IContextProps {
}

export const UserContext = createContext({} as IContextProps);

const UserContextProvider = (props: any) => {
    const [user, setUser] = useState('tom');

    const test = () => {
        setUser('bollocks');
    }

    return (
        <UserContext.Provider value={{ user, test }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;