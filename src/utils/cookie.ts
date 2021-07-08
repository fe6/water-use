import { ref } from 'vue';
import { error } from '@fe6/water-use';
import { useCookies } from '@vueuse/integrations';
import {
  EVENT_TOKE,
  EVENT_TOKEN_PREFIX,
  EVENT_PROFILE,
  EVENT_SHOP_ID,
  EVENT_SHOP_NAME,
  EVENT_SHOP_IS_AUDITED
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
  cookies.remove(EVENT_TOKE);
};

export const setProfile = (profileData: any) => {
  cookies.set(EVENT_PROFILE, JSON.stringify(profileData), cookieOptions.value);
};

export const getProfile = (): any => {
  return cookies.get(EVENT_PROFILE);
};

export const removeProfile = () => {
  cookies.remove(EVENT_PROFILE);
};

export const setShop = (shopData: any) => {
  const { shopId, shopName, isAudited } = shopData;

  cookies.set(EVENT_SHOP_ID, shopId, cookieOptions.value);
  cookies.set(EVENT_SHOP_NAME, shopName, cookieOptions.value);
  if (isAudited) {
    cookies.set(EVENT_SHOP_NAME, isAudited, cookieOptions.value);
  }
};

export const getShop = () => {
  return {
    shopId: cookies.get(EVENT_SHOP_ID),
    shopName: cookies.get(EVENT_SHOP_NAME),
    isAudited: cookies.get(EVENT_SHOP_IS_AUDITED),
  };
};

export const removeShop = () => {
  cookies.remove(EVENT_SHOP_ID);
  cookies.remove(EVENT_SHOP_NAME);
  cookies.remove(EVENT_SHOP_IS_AUDITED);
};
