/// <reference types="vite/client" />

declare module '*.svg' {
    const content: string;

    export default content;
}

interface ImportMetaEnv {
    readonly BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
