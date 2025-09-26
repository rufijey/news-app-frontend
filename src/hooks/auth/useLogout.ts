import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/auth.store.ts";

export function useLogout() {
    const setAccessToken = useAuthStore((s) => s.setAccessToken);

    return useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            setAccessToken(null);
        },
    });
}
