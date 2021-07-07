import { siteReplace } from '../hooks/use-page';
import {
  removeToken,
  removeShop,
  removeProfile,
} from '../utils/cookie';
import { getEnvConfig } from '../env';

const goLoginPage = (isRedirect?: boolean) => {
  const { VITE_COMMON } = getEnvConfig();
  const redirectHost = VITE_COMMON || 'http://localhost:3000/';
  const redirectUrl = isRedirect ? `?redirect=${window.location.href}` : '';
  siteReplace(`${redirectHost}login${redirectUrl}`);
};

export const logoutHandler = (isRedirect?: boolean) => {
  removeToken();
  removeShop();
  removeProfile();
  goLoginPage(isRedirect);
};
