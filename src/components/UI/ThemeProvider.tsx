import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <div className="bg-theme text-theme min-h-screen transition-colors duration-300">
      {children}
    </div>
  );
}
