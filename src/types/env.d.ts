/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_MODULES: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
