const authService = {
    async login(email: string, password: string) {
        console.log("login", email, password);
        return { id: "1", username: "demoUser", email };
    },

    async register(username: string, email: string, password: string) {
        console.log("register", email, password);
        return { id: "2", username, email };
    },

    async logout() {
        console.log("logout");
    },
};
export default authService;
