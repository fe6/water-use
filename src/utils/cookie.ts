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
import { isDevMode } from '../env';
import { error } from '../log';
import { goLoginPage } from './account';

export const cookiePath = '/';
export const domain = ref('');
export const myExpires = ref('');

export const setToken = (loginData: any) => {
  const { expiresIn, accessToken } = loginData;

  // 获取当前的时间戳
  const timestamp = new Date().getTime() / 1000;
  // 用过期时间戳-当前时间戳 = cookie有效期的秒数
  // (先判断下这个有效期是否>=0, 否则设置一个默认值)
  myExpires.value = expiresIn + timestamp;

  if (!isDevMode()) {
    domain.value = window.location.host;
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
  try {
    return JSON.parse(VueCookies.get(EVENT_PROFILE));
  }
  catch (err) {
    error(err);
  }
  return null;
};

export const removeProfile = () => {
  VueCookies.remove(EVENT_PROFILE);
  VueCookies.remove(EVENT_PHONE);
};

export const setShop = (shopData: any) => {
  const myPhone = VueCookies.get(EVENT_PHONE);
  const { shopId } = shopData;
  VueCookies.set(`${myPhone}_${EVENT_SHOP_ID}`, shopId, myExpires.value, cookiePath, domain.value);
  VueCookies.set(`${myPhone}_${EVENT_SHOP_INFO}`, JSON.stringify(shopData), myExpires.value, cookiePath, domain.value);
};

export const getShopId = () => {
  return VueCookies.get(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_ID}`);
};

export const getShop = async() => {
  try {
    const shopInfo = VueCookies.get(`${VueCookies.get(EVENT_PHONE)}_${EVENT_SHOP_INFO}`);
    // 没有信息
    if (!shopInfo) {
      goLoginPage(true);
      return null;
    }
    return JSON.parse(shopInfo);
  }
  catch (err) {
    error(err);
  }
  return null;
};

export const removeShop = () => {
  const myPhone = VueCookies.get(EVENT_PHONE);
  VueCookies.remove(`${myPhone}_${EVENT_SHOP_ID}`);
  VueCookies.remove(`${myPhone}_${EVENT_SHOP_INFO}`);
};
