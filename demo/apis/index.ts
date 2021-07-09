import { unref } from 'vue';

// NOTE water/use
import createAxios from '@fe6/water-use/axios';
import { getEnvConfig, isDevMode } from '@fe6/water-use/env';
import { error } from '@fe6/water-use/log';
import { waterStores } from '@fe6/water-use';
import { useMessage } from '@fe6/water-use/hooks/use-message';
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
      unref(waterStores).dispatch('app/setPageLoading', false);
    },
    requestInterceptors: (config: any) => {
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
