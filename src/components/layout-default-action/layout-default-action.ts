import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

import { siteHref } from '../../hooks/use-page';

export default defineComponent({
  components: {
    UserOutlined,
    LogoutOutlined,
    QuestionCircleOutlined,
  },
  setup() {
    const logoutFn = () => {
      // go('http://localhost:3000/shop/test1', true);
      siteHref('http://localhost:3000/shop/test1');
    };
    const handleMenuClick = (params: {
      key: string
      keyPath: string[]
      item: any
    }) => {
      const { key: curMenuName } = params;
      // TODO 因为就一个模块，所以可以存在判断
      if (curMenuName === 'logout') {
        logoutFn();
      }
    };

    const downDownStatus = ref(false);
    const dropdownVisibleChange = (status: boolean) => {
      downDownStatus.value = status;
    };

    return {
      logoutFn,
      handleMenuClick,
      dropdownVisibleChange,
      downDownStatus,
    };
  }
});
