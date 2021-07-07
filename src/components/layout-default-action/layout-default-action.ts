import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

import { getProfile } from '../../utils/cookie';
import { logoutHandler } from '../../utils/account';

export default defineComponent({
  components: {
    UserOutlined,
    LogoutOutlined,
    QuestionCircleOutlined,
  },
  setup() {
    const handleMenuClick = (params: {
      key: string
      keyPath: string[]
      item: any
    }) => {
      const { key: curMenuName } = params;
      // TODO 因为就一个模块，所以可以存在判断
      if (curMenuName === 'logout') {
        logoutHandler();
      }
    };

    const downDownStatus = ref(false);
    const dropdownVisibleChange = (status: boolean) => {
      downDownStatus.value = status;
    };

    return {
      handleMenuClick,
      dropdownVisibleChange,
      downDownStatus,
      ...getProfile()
    };
  }
});
