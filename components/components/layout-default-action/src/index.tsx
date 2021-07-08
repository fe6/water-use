import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

import { siteHref } from '../../../hooks/use-page';

export default defineComponent({
  name: 'WLayoutDefaultAuth',
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
  },
  render() {
    const menuNode = (<a-menu
      onClick={this.handleMenuClick}
    >
      <a-menu-item key="set">
        <UserOutlined />账户管理
      </a-menu-item>
      <a-menu-item key="logout">
        <LogoutOutlined />退出账户
      </a-menu-item>
    </a-menu>);
    return (<div class="w-layout-default-action">
      <a-tooltip title="帮助">
        <a target="_blank" href="https://college.evente.cn/" class="w-layout-default-action-help" rel="noreferrer">
          <QuestionCircleOutlined />
        </a>
      </a-tooltip>
      <a-dropdown
        trigger={['click']}
        onVisibleChange={this.dropdownVisibleChange}
        v-slots={{
          overlay: () => menuNode,
        }}
      >
        <div
          class="w-layout-default-action-box"
          onClick={ev => ev.preventDefault()}
        >
          <a-avatar
            size={24}
            src=""
            v-slots={{
              icon: () => <UserOutlined />,
            }}
          />
          <span class="w-layout-default-action-name">用户名</span>
          <a-basic-arrow
            class="w-layout-default-action-arrow"
            bottom={!this.downDownStatus}
            top={this.downDownStatus}
          />
        </div>
      </a-dropdown>
    </div>);
  },
});
