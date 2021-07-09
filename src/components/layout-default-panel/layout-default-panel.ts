import { defineComponent } from 'vue';
import {
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';

import { propTypes } from '../../utils/prop-types';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import AIcon from '../icon';

import { errUploadImage } from './error-image';

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
    return {
      changeShop,
      errUploadImage,
    };
  }
});
