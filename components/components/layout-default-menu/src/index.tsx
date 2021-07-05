import { defineComponent, computed, ref, onBeforeMount, onMounted, watchEffect, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { hasOwn } from '@fe6/shared';

import {
  MENU_TYPE_ENUM,
} from '../../../api-mods/external';
import { propTypes } from '../../../utils/prop-types';
import { renderNode } from '../../../types/node';
import { getAvtiveKey } from '../../../utils/menus';
import { getEnvConfig, isDevMode } from '../../../env';

import AIcon from '../../icon';

export default defineComponent({
  name: 'WLayoutDefaultMenu',
  props: {
    collapsed: propTypes.looseBool,
  },
  emits: ['collapsed'],
  setup(props, { emit }) {
    const { VITE_MENU_ACTIVE } = getEnvConfig();
    const { currentRoute } = useRouter();
    const myStores = useStore();
    // console.log(currentRoute.value.meta, 'currentRoute');

    const menus = computed(() => {
      return myStores.state.external.menus;
    });

    const activeNavKey = ref<string[]>([]);
    const openNavKey = ref<string[]>([]);
    const navs = computed(() => myStores.state.external.navs);
    const navTitle = computed(() => myStores.state.external.navTitle);

    watch([() => myStores.state.external.navs, currentRoute], ([newNavs, newRoute]) => {
      const {
        activeNavCode,
        openNavCode,
      } = getAvtiveKey(newNavs, newRoute.fullPath);

      if (activeNavCode) {
        activeNavKey.value = [];
        activeNavKey.value.push(activeNavCode);
      }

      if (openNavCode) {
        openNavKey.value = [];
        openNavKey.value.push(openNavCode);
      }
    });

    // NOTE 获取权限接口数据
    onBeforeMount(async() => {
      await myStores.dispatch('external/getAllExternals');
    });

    onMounted(async() => {
      if (isDevMode()) {
        const pwd = (window as any).pwd;
        const json = (await (await import(/* @vite-ignore */`${pwd}/src/mock/external`)).default) as any;
        myStores.dispatch('external/setAllExternals', json);
      }
    });

    const collapseStatus = ref(false);
    watchEffect(() => {
      collapseStatus.value = props.collapsed || false;
    });

    const collapseChange = (collapseStatus: boolean) => {
      emit('collapsed', collapseStatus);
    };

    const { meta } = currentRoute.value;

    const menuCheckKey = hasOwn(meta, 'menuActive') ? String(meta.menuActive) : VITE_MENU_ACTIVE;

    return {
      menuCheckKey: ref<string[]>([menuCheckKey]),
      collapseStatus,
      collapseChange,

      activeNavKey,
      openNavKey,

      MENU_TYPE_ENUM,

      menus,
      navs,
      navTitle,
    };
  },
  render() {
    const baseMenuNodes: any[] = [];
    this.menus[MENU_TYPE_ENUM.BASE].forEach((menuItem: any) => {
      baseMenuNodes.push(<a-menu-item
        key={menuItem.permissionCode}
        class="w-layout-default-menu-item"
      >
        <AIcon
          icon-id={menuItem.icon}
          size="14"
          color="#fff" />
        <span class="w-layout-default-menu-name">{ menuItem.name }</span>
      </a-menu-item>);
    });

    const otherMenuNodes: any[] = [];
    this.menus[MENU_TYPE_ENUM.BASE].forEach((menuItem: any, menuIdx: number) => {
      otherMenuNodes.push(<a-menu-item
        key={menuItem.permissionCode}
        class={['w-layout-default-menu-item', menuIdx === 0 ? 'w-layout-default-menu-other' : '']}
      >
        <AIcon
          icon-id={menuItem.icon}
          size="14"
          color="#fff"
        />
        <span class="w-layout-default-menu-name">{ menuItem.name }</span>
      </a-menu-item>);
    });

    let siderNode: renderNode = null;
    if (this.navTitle) {
      const subMenus: any[] = [];
      this.navs.forEach((navItem: any) => {
        if (navItem.subMenus && navItem.subMenus.length > 0) {
          const childMenuNodes: any[] = [];

          navItem.subMenus.forEach((navChild: any) => {
            childMenuNodes.push(<a-menu-item
              key={navChild.permissionCode}
            >
              <router-link
                to={navChild.path}
              >
                { navChild.name }
              </router-link>
            </a-menu-item>);
          });
          subMenus.push(<a-sub-menu
            key={navItem.permissionCode}
            v-slots={{
              title: () => <span>{ navItem.name }</span>
            }}
          >
            {childMenuNodes}
          </a-sub-menu>);
        }
        else {
          subMenus.push(<a-menu-item
            key={navItem.permissionCode}
          >
            <router-link
              to={navItem.path}
            >
              { navItem.name }
            </router-link>
          </a-menu-item>);
        }
      });

      siderNode = (<a-layout-sider
        collapsed={this.collapseStatus}
        trigger={null}
        collapsible
        width={154}
        collapsed-width={0}
        style="overflow: hidden;"
        breakpoint="xxl"
        class="w-layout-default-menu-sider w-layout-default-menu-sider-light"
        onCollapse={this.collapseChange}
      >
        <div class="w-layout-default-menu-header-name">
          { this.navTitle }
        </div>
        <a-container-scroll class="w-layout-default-menu-light">
          <a-menu
            selectedKeys={this.activeNavKey}
            openKeys={this.openNavKey}
            mode="inline"
            style="height: 100%"
          >
            {subMenus}
          </a-menu>
        </a-container-scroll>
      </a-layout-sider>);
    }

    return (<a-layout-sider
      trigger={null}
      collapsible
      width={100}
      collapsed-width={80}
      class="w-layout-default-menu-sider"
    >
      <div class="w-layout-default-menu-logo-box">
        <img
          class="w-layout-default-menu-logo"
          src="https://objects.evente.cn/assets/brand/piaodada/logo-200.png"
        />
      </div>
      <a-container-scroll class="w-layout-default-menu-dark">
        <a-menu
          selectedKeys={this.menuCheckKey}
          theme="dark"
          mode="inline"
          class="w-layout-default-menu-inner"
        >
          { baseMenuNodes }
          { otherMenuNodes }
        </a-menu>
        { siderNode }
      </a-container-scroll>
    </a-layout-sider>
    );
  },
});
