import { api } from "@/infrastructure/http";

export interface LoginResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    token: string;
}
export interface Login {
    token: string;
}

export const loginApi = {
    postLoginUserData: async (): Promise<Login> => {
        const { data } = await api.get('/login');
        return data;
    },
    postLogin: async (username: string, password: string): Promise<LoginResponse> => {
        const { data } = await api.get(`/login`, { params: { username, password } });
        return data;
    },
};