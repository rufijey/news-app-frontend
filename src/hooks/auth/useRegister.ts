import { useMutation } from "@tanstack/react-query";
import type { NavigateFunction } from "react-router-dom";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/auth.store.ts";
import type { RegisterData } from "../../types/auth.types.ts";

export function useRegister(navigate: NavigateFunction) {
    const setAccessToken = useAuthStore((s) => s.setAccessToken);

    return useMutation({
        mutationFn: ({ username, email, password }: RegisterData) =>
            authService.register(username, email, password),
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            navigate("/");
        },
    });
}
