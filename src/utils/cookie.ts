import { ref } from 'vue';
import {
  EVENT_TOKE,
  EVENT_TOKEN_PREFIX,
  EVENT_NICK_NAME,
  EVENT_AVATAR,
  EVENT_MOBILE,
  EVENT_SHOP_ID,
  EVENT_SHOP_NAME,
  EVENT_SHOP_IS_AUDITED
} from '../constant';
import { useCookies } from '@vueuse/integrations';
import { getEnvConfig, isDevMode } from '../env';

const {
  VITE_ENV
} = getEnvConfig();

const cookieOptions = ref<any>({});

const cookies = useCookies([EVENT_TOKE]);

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
  const { avatar, nickname, mobile } = profileData;

  cookies.set(EVENT_AVATAR, avatar, cookieOptions.value);
  cookies.set(EVENT_NICK_NAME, nickname, cookieOptions.value);
  cookies.set(EVENT_MOBILE, mobile, cookieOptions.value);
};

export const getProfile = () => {
  return {
    avatar: cookies.get(EVENT_AVATAR),
    nickName: cookies.get(EVENT_NICK_NAME),
    mobile: cookies.get(EVENT_MOBILE),
  };
};

export const removeProfile = () => {
  cookies.remove(EVENT_AVATAR);
  cookies.remove(EVENT_NICK_NAME);
  cookies.remove(EVENT_MOBILE);
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
