import { useMutation } from "@tanstack/react-query";
import type { NavigateFunction } from "react-router-dom";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/AuthStore.ts";
import type { LoginData } from "../../types/auth.types.ts";

export function useLogin(navigate: NavigateFunction) {
    const setUser = useAuthStore((s) => s.setUser);

    return useMutation({
        mutationFn: ({ email, password }: LoginData) => authService.login(email, password),
        onSuccess: (data) => {
            setUser(data);
            navigate("/");
        },
    });
}
