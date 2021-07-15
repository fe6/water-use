import { siteReplace } from '../hooks/use-page';
import {
  removeToken,
  removeShop,
  removeProfile,
} from '../utils/cookie';
import { getEnvConfig } from '../env';
import { getLogout } from '../apis/account';
import { nextTick } from 'vue';

export const goLoginPage = (isRedirect?: boolean) => {
  const { VITE_COMMON } = getEnvConfig();
  const redirectHost = VITE_COMMON || 'http://localhost:3000/';
  const reidrectWhite = ['https://home.dev.mosh.cn/'];
  const redirectUrl = isRedirect && !reidrectWhite.includes(window.location.href) ? `?redirect=${window.location.href}` : '';
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
