import { ref } from 'vue';
import { useCookies } from '@vueuse/integrations';
import {
  EVENT_TOKE,
  EVENT_TOKEN_PREFIX,
  EVENT_PROFILE,
  EVENT_SHOP_ID,
  EVENT_SHOP_INFO,
} from '../constant';
import { getEnvConfig, isDevMode } from '../env';

const {
  VITE_ENV
} = getEnvConfig();

const cookieOptions = ref<any>({});

const cookies = useCookies([EVENT_TOKE, EVENT_PROFILE]);

export const setToken = (loginData: any) => {
  const { expiresIn, accessToken } = loginData;

  cookieOptions.value = {
    path: '/',
    maxAge: expiresIn
  };

  if (!isDevMode()) {
    cookieOptions.value.domain = `home${VITE_ENV === 'prod' ? '' : `.${VITE_ENV}`}.mosh.cn`;
  }

  cookies.set(EVENT_TOKE, `${EVENT_TOKEN_PREFIX}${accessToken}`, cookieOptions.value);
};

export const getToken = () => {
  return cookies.get(EVENT_TOKE);
};

export const removeToken = () => {
  cookies.set(EVENT_TOKE, '', cookieOptions.value);
};

export const setProfile = (profileData: any) => {
  cookies.set(EVENT_PROFILE, JSON.stringify(profileData), cookieOptions.value);
};

export const getProfile = (): any => {
  return cookies.get(EVENT_PROFILE);
};

export const removeProfile = () => {
  cookies.set(EVENT_PROFILE, '', cookieOptions.value);
};

export const setShop = (shopData: any) => {
  const { shopId } = shopData;
  cookies.set(EVENT_SHOP_ID, shopId, cookieOptions.value);
  cookies.set(EVENT_SHOP_INFO, shopData, cookieOptions.value);
};

export const getShop = () => {
  return cookies.get(EVENT_SHOP_INFO);
};

export const removeShop = () => {
  cookies.set(EVENT_SHOP_ID, '', cookieOptions.value);
  cookies.set(EVENT_SHOP_INFO, '', cookieOptions.value);
};
