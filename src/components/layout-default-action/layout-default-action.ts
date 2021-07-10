import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, onBeforeMount } from 'vue';

import { getProfile } from '../../utils/cookie';
import { logoutHandler } from '../../utils/account';
import { siteHref } from '../../hooks/use-page';
import { getEnvConfig } from '../../env';

export default defineComponent({
  components: {
    UserOutlined,
    LogoutOutlined,
    QuestionCircleOutlined,
  },
  setup() {
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
      dropdownVisibleChange,
      downDownStatus,
      avatar,
      nickName
    };
  },
  methods: {
    handleMenuClick(params: {
      key: string
      keyPath: string[]
      item: any
    }) {
      const { key: curMenuName } = params;
      if (curMenuName === 'set') {
        const {
          VITE_COMMON
        } = getEnvConfig();
        siteHref(`${VITE_COMMON}set/info`);
      }
      // TODO 因为就一个模块，所以可以存在判断
      if (curMenuName === 'logout') {
        (this as any).$message.confirm({
          title: '温馨提示',
          content: '确认退出吗？',
          onOk: () => {
            logoutHandler(true);
          }
        });
      }
    },
  },
});
