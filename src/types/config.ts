/** @format */

export interface EnvConfig {
  VITE_PORT: number;
  VITE_DROP_CONSOLE: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_AUTU_NO_GO_NAV_FIRST?: boolean;
  VITE_USE_AUTH: boolean;
  VITE_USE_MOCK: boolean;
  VITE_MENU_ACTIVE: string;
  VITE_ENV: string;
  VITE_API: string;
  VITE_PUBLIC_PATH: string;
  VITE_BASE_HOME: string;
  VITE_PREFIX: string;
  VITE_OUTPUT_DIR: string;
  VITE_COMMON?: string;
  VITE_SHOP?: string;
  VITE_PRODUCT?: string;
}
