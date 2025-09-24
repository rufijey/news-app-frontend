import dotenv from "dotenv";
dotenv.config();

function virtualModules() {
    const VITE_MODULES = process.env.VITE_MODULES || "";

    const modules = VITE_MODULES.split(",")
        .map((m: string) => m.trim())
        .filter(Boolean);

    return {
        name: "virtual-modules",
        resolveId(id: string) {
            if (id === "virtual:plugins") {
                return id;
            }
            return null;
        },
        load(id: string) {
            if (id === "virtual:plugins") {
                if (modules.length === 0) {
                    return `console.log("No virtual modules to load")`;
                }
                return modules.map((m: string) => `import './src/modules/${m}.js';`).join("\n");
            }

            return null;
        },
    };
}

export default virtualModules;
