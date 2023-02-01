import { createContext, useContext, useEffect, useState } from "react";

import { removeToken } from "./helpers";

type UserT = { [key: string]: any }

type AuthContextT = {
    user?: UserT;
    setUser: (user: { [key: string]: any }) => void;
    logoutUser: () => void
}

type AuthenticationProviderPropsT = {
    children: React.ReactNode;
}

export const AuthContext = createContext({
    user: undefined,
    setUser: () => { },
    logoutUser: () => { },
} as AuthContextT);

export const useAuthContext = () => useContext(AuthContext);

export const AuthenticationProvider = ({ children }: AuthenticationProviderPropsT) => {
    const [userData, setUserData] = useState<UserT>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!userData && token) {
            removeToken();
        }
    }, [userData])

    const handleSetUser = (user: UserT) => {
        setUserData(user);
    };

    // callback for redirection or any action following logout
    const handleLogout = (callback?: () => void) => {
        setUserData(undefined);
        callback && callback();
    };

    return (
        <AuthContext.Provider value={{ user: userData, setUser: handleSetUser, logoutUser: handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}