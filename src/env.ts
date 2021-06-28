/** @format */

import { isString } from 'lodash-es';
import type { EnvConfig } from './types/config';

/**
 * Get the global configuration (the configuration will be extracted independently when packaging)
 */
export function getEnvConfig(): EnvConfig {
  const env = import.meta.env;
  const ret: any = {};

  for (const envName of Object.keys(env)) {
    let realName: number | string | boolean | undefined = isString(env[envName]) ? (env[envName] as string).replace(/\\n/g, '\n') : env[envName];
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') { realName = Number(realName); }

    ret[envName] = realName;
  }
  return ret;
  // return (env as unknown) as EnvConfig;
}

/**
 * @description: Development model
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}
