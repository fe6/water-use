import { defineComponent } from 'vue';
import {
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';

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
  setup() {
    return {
      errUploadImage,
    };
  }
});
