import { createContext, useContext, useEffect, useState } from "react";

import { API, BEARER } from "./constants";
import { getToken, removeToken } from "./helpers";

type UserT = { [key: string]: any }

type AuthContextT = {
    user?: UserT;
    isLoading: boolean;
    setUser: (user: { [key: string]: any }) => void;
    logoutUser: () => void
}

type AuthenticationProviderPropsT = {
    children: React.ReactNode;
}

export const AuthContext = createContext({
    user: undefined,
    isLoading: false,
    setUser: () => { },
    logoutUser: () => { },
} as AuthContextT);

export const useAuthContext = () => useContext(AuthContext);

export const AuthenticationProvider = ({ children }: AuthenticationProviderPropsT) => {
    const [userData, setUserData] = useState<UserT>();
    const [isLoading, setIsLoading] = useState(false);
    const authToken = getToken();

    useEffect(() => {
        if (authToken) {
            fetchLoggedInUser(authToken);
        }
    }, [authToken]);


    const fetchLoggedInUser = async (token: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API}/users/me`, {
                headers: { Authorization: `${BEARER} ${token}` },
            });
            const data = await response.json();

            setUserData(data);
        } catch (error) {
            console.error(error);
            // TODO - handle error
            console.log("Error While Getting Logged In User Details")
            // message.error("Error While Getting Logged In User Details");
        } finally {
            setIsLoading(false);
        }
    };

    const handleUser = (user: UserT) => {
        setUserData(user);
    };

    const handleLogout = (callback?: () => void) => {
        removeToken();
        callback && callback()
    };

    return (
        <AuthContext.Provider value={{ user: userData, setUser: handleUser, logoutUser: handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}