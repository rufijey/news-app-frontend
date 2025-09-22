import { Button } from "@mui/material";
import { useLogout } from "../../hooks/auth/useLogout.ts";

export default function LogoutButton() {
    const { mutate: logout } = useLogout();

    return (
        <Button variant="contained" color="error" size="medium" onClick={() => logout()}>
            Logout
        </Button>
    );
}
