import { defineComponent } from 'vue';
import {
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';

import { getEnvConfig } from '../../env';
import { propTypes } from '../../utils/prop-types';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import AIcon from '../icon';

import { errUploadImage } from './error-image';
import { siteHref } from '../../hooks/use-page';

const {
  VITE_SHOP,
} = getEnvConfig();

export default defineComponent({
  components: {
    AIcon,
    ShareAltOutlined,
    EditOutlined,
    ALayoutDefaultAuth,
  },
  props: {
    shopInfo: propTypes.object,
  },
  emits: ['on-change-shop'],
  setup(_, { emit }) {
    const changeShop = () => {
      emit('on-change-shop');
    };
    const goCreateStore = () => {
      siteHref(`${VITE_SHOP}store/type`);
    };
    const goAuth = () => {
      siteHref(`${VITE_SHOP}manage/qualification`);
    };

    return {
      changeShop,
      errUploadImage,
      goCreateStore,
      goAuth,
    };
  }
});
