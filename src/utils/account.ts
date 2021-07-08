import { siteReplace } from '../hooks/use-page';
import {
  removeToken,
  removeShop,
  removeProfile,
} from '../utils/cookie';
import { getEnvConfig } from '../env';
import { getLogout } from '../apis/account';
import { nextTick } from 'vue';

const goLoginPage = (isRedirect?: boolean) => {
  const { VITE_COMMON } = getEnvConfig();
  const redirectHost = VITE_COMMON || 'http://localhost:3000/';
  const redirectUrl = isRedirect ? `?redirect=${window.location.href}` : '';
  siteReplace(`${redirectHost}login${redirectUrl}`);
};

export const logoutHandler = async(isRedirect?: boolean) => {
  await getLogout();
  removeToken();
  removeShop();
  removeProfile();
  await nextTick();
  goLoginPage(isRedirect);
};
