/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_RAWG_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}