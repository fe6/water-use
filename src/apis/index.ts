import { unref } from 'vue';

import createAxios from '../axios';
import { getEnvConfig, isDevMode } from '../env';
import { error } from '../log';

import myStores from '../stores';

import { useMessage } from '../hooks/use-message';
// import { TOKEN_PREFIX } from '@@enums/cache';

const { createMessage, createErrorModal } = useMessage();

const ENV = getEnvConfig();

export default createAxios({
  apiUrl: ENV.VITE_API,
  isDevMode,
  errorLog: error,
  errorMsg: createMessage.error,
  errorModal: createErrorModal,
  transform: {
    transformRequestInner: () => {
      unref(myStores).dispatch('app/setPageLoading', false);
    },
    requestInterceptors: (config) => {
      // NOTE token
      // 请求之前处理config
      const token = 'authStore.getTokenState';
      if (token) {
        // jwt token
        config.headers.Authorization = `1${token}`;
      }
      return config;
    },
  }
});
