import { useMutation } from "@tanstack/react-query";
import type { NavigateFunction } from "react-router-dom";
import authService from "../../services/authService.ts";
import { useAuthStore } from "../../store/AuthStore.ts";

export function useRegister(navigate: NavigateFunction) {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => authService.register(username, email, password),
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
  });
}
