import { createContext, useContext } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import authStorage from './storage';

interface User {
    expires_at: string;
    name: string;
    partner_id: string;
    session_id: string;
    uid: string;
    username: string;

    // "expires_at": "2022-02-28T22:47:55",
    // "name": "Tester",
    // "partner_id": 1089,
    // "session_id": "c6c136010286e3796ca4dd8618929811b3ef6503",
    // "uid": 8,
    // "username": "09011223299",
}

interface ContextType {
    user: User;
    setUser: (user: Object | null) => void;
    logout: () => void;
}

const AuthContext = createContext<ContextType | any>({ user: {} });

const useAuthContext = () => {
    const { user, setUser } = useContext<ContextType>(AuthContext);

    const login = (data: any) => {
        const currentUser = data;
        setUser(currentUser);
        authStorage.storeUser(data);
        authStorage.storeToken(data['session_id']);
        console.log(currentUser);
    };

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
        authStorage.removeUser();
    };

    return { user, login, logout };
};

export { AuthContext, useAuthContext };
