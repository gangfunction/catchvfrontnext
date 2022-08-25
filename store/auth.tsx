import React, {useCallback, useEffect, useState} from 'react'

let logoutTimer: any
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: any, s: any) => {
    },
    logout: () => {
    }
})
const calculateRemainingTime = (expirationTime: any) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()
    const remainingDuration = adjExpirationTime - currentTime

    return remainingDuration
}
const retrieveStoredToken = () => {
    if(typeof window  !== 'undefined'){
        const storedToken = localStorage.getItem('token')
        const storeExpirationDate = localStorage.getItem('expirationTime')
        const remainingTime = calculateRemainingTime(storeExpirationDate)

        if (remainingTime <= 3600) {
            localStorage.removeItem('token')
            localStorage.removeItem('expirationTime')
            return null
        }
        return {
            token: storedToken,
            duration: remainingTime
        }
    }




}

export const AuthContextProvider = (props: any) => {
    const tokenData = retrieveStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const loginHandler = (token: any, expirationTime: any) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        const remainingTime = calculateRemainingTime(expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }
    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData,logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    } as any
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext
