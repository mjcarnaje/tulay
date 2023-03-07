/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly APIKEY: string;
  readonly AUTHDOMAIN: string;
  readonly PROJECTID: string;
  readonly STORAGEBUCKET: string;
  readonly MESSAGINGSENDERID: string;
  readonly APPID: string;
  readonly MEASUREMENTID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
