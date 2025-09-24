import { useAuthStore } from "../../store/auth.store.ts";
import LinkButton from "../UI/LinkButton.tsx";
import LogoutButton from "./LogoutButton.tsx";

export default function AuthLinks() {
    const accessToken = useAuthStore((s) => s.accessToken);

    if (accessToken) {
        return (
            <div className="flex items-center gap-2">
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
