import fs from "node:fs";
import path from "node:path";
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
            if (id === "virtual:plugins") return id;
            return null;
        },
        load(id: string) {
            if (id === "virtual:plugins") {
                if (modules.length === 0) {
                    return `console.log("No virtual modules to load")`;
                }

                const imports: string[] = [];

                for (const mod of modules) {
                    const filePath = path.resolve(process.cwd(), `src/modules/${mod}.js`);
                    if (fs.existsSync(filePath)) {
                        imports.push(`import './src/modules/${mod}.js';`);
                    } else {
                        console.warn(`[virtual-modules] Module "${mod}" not found at ${filePath}`);
                    }
                }

                if (imports.length === 0) {
                    return `console.log("No valid virtual modules found")`;
                }

                return imports.join("\n");
            }

            return null;
        },
    };
}

export default virtualModules;
