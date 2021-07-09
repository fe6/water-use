/** @format */

import { isString } from 'lodash-es';
import { isDevMode } from './env';

export function warn(message: string) {
  return isDevMode()
    ? console.warn(`[water admin warn]:${JSON.stringify(message)}`)
    : '';
}

export function error(message: string) {
  return isDevMode()
    ? new Error(
      `[water admin error]:${isString(message) ? message : JSON.stringify(message)}`,
    )
    : '';
}
