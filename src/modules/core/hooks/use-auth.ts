import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const { token, setToken, clearToken } = useAuthStore();

    useEffect(() => {
        if (cookies.token && !token) {
            setToken(cookies.token);
        }
    }, [cookies.token, token, setToken]);

    const login = (tokenValue: string) => {
        setCookie('token', tokenValue, { path: '/', maxAge: 60 * 60 * 24 }); // 1 día
        setToken(tokenValue);
    };

    const logout = () => {
        removeCookie('token', { path: '/' });
        clearToken();
    };

    return { token, login, logout };
};