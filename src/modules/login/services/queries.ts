import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./api";



export const useLogin = () =>
    useMutation({
        mutationFn: ({ username, password }: { username: string; password: string }) => loginApi.postLogin(username, password),
    });


// EJEMPLO DE GET (USAR useQuery)

// export const useLoginUser = () =>
//     useQuery({
//         queryKey: ['login'],
//         queryFn: () => loginApi.postLoginUserData(),
//     });


