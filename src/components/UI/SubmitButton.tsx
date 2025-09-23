import { Button, type ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

export default function SubmitButton({ label, ...props }: SubmitButtonProps) {
    return (
        <Button type="submit" variant="contained" color="primary" fullWidth {...props}>
            {label}
        </Button>
    );
}
