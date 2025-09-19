import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";
import { useAuthStore } from "../../store/AuthStore.ts";

export function useLogout() {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setUser(null);
    },
  });
}
