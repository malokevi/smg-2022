import { createContext, useContext, useEffect, useState } from "react";

import { API, BEARER } from "./constants";
import { getToken } from "./helpers";

type UserT = { [key: string]: any }

type AuthContextT = {
    user?: UserT;
    isLoading: boolean;
    setUser: (user: { [key: string]: any }) => void;
}

type AuthenticationProviderPropsT = {
    children: React.ReactNode;
}

export const AuthContext = createContext({
    user: undefined,
    isLoading: false,
    setUser: () => { },
} as AuthContextT);

export const useAuthContext = () => useContext(AuthContext);

export const AuthenticationProvider = ({ children }: AuthenticationProviderPropsT) => {
    const [userData, setUserData] = useState<UserT>();
    const [isLoading, setIsLoading] = useState(false);

    const authToken = getToken();

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

    useEffect(() => {
        if (authToken) {
            fetchLoggedInUser(authToken);
        }
    }, [authToken]);

    return (
        <AuthContext.Provider value={{ user: userData, setUser: handleUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}