import { useMutation } from "@tanstack/react-query";
import type { NavigateFunction } from "react-router-dom";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/AuthStore.ts";
import type { RegisterData } from "../../types/auth.types.ts";

export function useRegister(navigate: NavigateFunction) {
    const setUser = useAuthStore((s) => s.setUser);

    return useMutation({
        mutationFn: ({ username, email, password }: RegisterData) =>
            authService.register(username, email, password),
        onSuccess: (data) => {
            setUser(data);
            navigate("/");
        },
    });
}
