import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'


const AuthContext = createContext({
    user: null,
    login : () => {},
    logout : () => {},
    authReady: false
});

export const AuthContextProvider = ({ children } : any) => {
   
const [user, setUser] = useState(null)
const [authReady, setAuthReady] = useState(false)

useEffect(() => {
    netlifyIdentity.on('login', (user : any) => {
        setUser(user)
        netlifyIdentity.close()
        console.log('Login event')
    })
    netlifyIdentity.on('logout', () => {
        setUser(null)
        console.log('Logout')
    })

    netlifyIdentity.on('init', (user : any) => {
        setUser(user)
        setAuthReady(true)
        console.log('init event')
    })

    
    netlifyIdentity.init()

    return () => {
        netlifyIdentity.off('login')
        netlifyIdentity.off('logout')
    }

}, [])

const login = () => {
    netlifyIdentity.open()
}

const logout = () => {
    netlifyIdentity.logout()
}

const context = {user, login, logout, authReady }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;