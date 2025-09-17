import { useAuthStore } from "../../store/AuthStore.ts";
import LinkButton from "../UI/LinkButton.tsx";
import LogoutButton from "./LogoutButton.tsx";

export default function AuthLinks() {
  const user = useAuthStore((s) => s.user);

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm"> {user.email}</span>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <LinkButton to="/login">Login</LinkButton>
      <LinkButton to="/register">Registration</LinkButton>
    </div>
  );
}
