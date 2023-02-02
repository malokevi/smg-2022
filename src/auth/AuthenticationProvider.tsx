import { createContext, useContext, useEffect, useState } from "react"
import { TOKEN_KEY, USER_KEY } from "./constants"
import { deleteStorage, getStorage, setStorage } from "./helpers"

type UserT = { [key: string]: any }

type AuthContextT = {
    user?: UserT
    loginUser: (
        user: { [key: string]: any },
        token: string,
        callback?: () => void
    ) => void
    logoutUser: () => void
}

type AuthenticationProviderPropsT = {
    children: React.ReactNode
}

export const AuthContext = createContext({
    user: undefined,
    loginUser: () => {},
    logoutUser: () => {}
} as AuthContextT)

export const useAuthContext = () => useContext(AuthContext)

export const AuthenticationProvider = ({
    children
}: AuthenticationProviderPropsT) => {
    const [userData, setUserData] = useState<UserT>()

    useEffect(() => {
        const user = getStorage(USER_KEY)
        const token = getStorage(TOKEN_KEY)

        if (user && token && typeof userData === "undefined") {
            setUserData(JSON.parse(user))
        }
    }, [])

    // TODO - use cookies instead of local storage. add TTL
    const handleLogin = (user: UserT, token: string, callback?: () => void) => {
        setStorage(TOKEN_KEY, token)
        setStorage(USER_KEY, JSON.stringify(user))
        setUserData(user)
        callback && callback()
    }

    const handleLogout = (callback?: () => void) => {
        deleteStorage(TOKEN_KEY)
        deleteStorage(USER_KEY)
        setUserData(undefined)
        callback && callback()
    }

    return (
        <AuthContext.Provider
            value={{
                user: userData,
                loginUser: handleLogin,
                logoutUser: handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
