const API_URL = import.meta.env.VITE_API_URL;

const authService = {
    async login(email: string, password: string) {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error("Login failed");
        }
        return await res.json();
    },

    async register(username: string, email: string, password: string) {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!res.ok) {
            throw new Error("Registration failed");
        }

        return await res.json();
    },

    async logout() {
        console.log("logout");
    },
};

export default authService;
