import { useMutation } from "@tanstack/react-query";
import type { NavigateFunction } from "react-router-dom";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/auth.store.ts";
import type { LoginData } from "../../types/auth.types.ts";

export function useLogin(navigate: NavigateFunction) {
    const setAccessToken = useAuthStore((s) => s.setAccessToken);

    return useMutation({
        mutationFn: ({ email, password }: LoginData) => authService.login(email, password),
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            navigate("/");
        },
    });
}
