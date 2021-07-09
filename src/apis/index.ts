import { unref } from 'vue';
import { uuid } from '@fe6/shared';

// NOTE water/use
import createAxios from '../axios';
import { getEnvConfig, isDevMode } from '../env';
import { error } from '../log';
import waterStores from '../stores';
import { useMessage } from '../hooks/use-message';
import { getToken, getShopId } from '../utils/cookie';

const { createMessage, createErrorModal } = useMessage();

const ENV = getEnvConfig();

const getGuid = localStorage['X-Session-Em-Consumer-Id'] || uuid();
localStorage['X-Session-Em-Consumer-Id'] = getGuid;

export default createAxios({
  apiUrl: ENV.VITE_API || 'https://api.dev.mosh.cn/',
  isDevMode,
  errorLog: error,
  errorMsg: createMessage.error,
  errorModal: createErrorModal,
  transform: {
    transformRequestInner: () => {
      unref(waterStores).dispatch('app/setPageLoading', false);
    },
    requestInterceptors: (config: any) => {
      // NOTE token
      // 请求之前处理config
      const token = getToken();
      config.headers['X-Session-Id'] = getGuid;
      config.headers['X-Request-Scene-Type'] = 'biz_web';
      config.headers['X-Request-Shop-Id'] = getShopId() || 0;
      if (token) {
        // jwt token
        config.headers.Authorization = token;
      }
      return config;
    },
  }
});
