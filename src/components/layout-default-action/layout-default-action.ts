import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, onBeforeMount } from 'vue';

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

    const avatar = ref('');
    const nickName = ref('');
    const handleProfile = async() => {
      const profile = await getProfile();
      nickName.value = profile.nickname;
      avatar.value = profile.avatar;
    };

    onBeforeMount(handleProfile);

    return {
      handleMenuClick,
      dropdownVisibleChange,
      downDownStatus,
      avatar,
      nickName
    };
  }
});
