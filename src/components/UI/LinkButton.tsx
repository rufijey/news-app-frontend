import { Button, type ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

interface LinkButtonProps extends ButtonProps {
  to: string;
}

export default function LinkButton({ to, ...props }: LinkButtonProps) {
  return (
    <Button
      component={Link}
      to={to}
      variant="outlined"
      size="medium"
      sx={{
        borderWidth: 2,
        fontWeight: 500,
      }}
      {...props}
    />
  );
}
