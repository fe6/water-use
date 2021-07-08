import { ref } from 'vue';
import VueCookies from 'em-cookie';
import {
  EVENT_TOKE,
  EVENT_TOKEN_PREFIX,
  EVENT_PROFILE,
  EVENT_PHONE,
  EVENT_SHOP_ID,
  EVENT_SHOP_INFO,
} from '../constant';
import { getEnvConfig, isDevMode } from '../env';

const {
  VITE_ENV
} = getEnvConfig();

const cookiePath = '/';
const domain = ref('');
const myExpires = ref('');

export const setToken = (loginData: any) => {
  const { expiresIn, accessToken } = loginData;

  // 获取当前的时间戳
  const timestamp = new Date().getTime() / 1000;
  // 用过期时间戳-当前时间戳 = cookie有效期的秒数
  // (先判断下这个有效期是否>=0, 否则设置一个默认值)
  myExpires.value = expiresIn + timestamp;

  if (!isDevMode()) {
    domain.value = `home${VITE_ENV === 'prod' ? '' : `.${VITE_ENV}`}.mosh.cn`;
  }

  VueCookies.set(EVENT_TOKE, `${EVENT_TOKEN_PREFIX}${accessToken}`, myExpires.value, cookiePath, domain.value);
};

export const getToken = () => {
  return VueCookies.get(EVENT_TOKE);
};

export const removeToken = () => {
  VueCookies.remove(EVENT_TOKE);
};

export const setProfile = (profileData: any) => {
  VueCookies.set(EVENT_PROFILE, JSON.stringify(profileData), myExpires.value, cookiePath, domain.value);
  VueCookies.set(EVENT_PHONE, profileData.mobile, myExpires.value, cookiePath, domain.value);
};

export const getProfile = (): any => {
  return VueCookies.get(EVENT_PROFILE);
};

export const removeProfile = () => {
  VueCookies.remove(EVENT_PROFILE);
  VueCookies.remove(EVENT_PHONE);
};

export const setShop = (shopData: any) => {
  const { shopId } = shopData;
  VueCookies.set(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_ID}`, shopId, myExpires.value, cookiePath, domain.value);
  VueCookies.set(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_INFO}`, shopData, myExpires.value, cookiePath, domain.value);
};

export const getShopId = () => {
  return VueCookies.get(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_ID}`);
};

export const getShop = () => {
  return VueCookies.get(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_INFO}`);
};

export const removeShop = () => {
  VueCookies.remove(EVENT_SHOP_ID);
  VueCookies.remove(EVENT_SHOP_INFO);
};
