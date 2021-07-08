import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { propTypes } from '../../../utils/prop-types';
import WLayoutInnerPageheader from '../../layout-inner-pageheader/src';

const RouterComp: any = {
  template: `<router-view v-slot="{ Component }" class="w-layout-inner-right">
  <transition
    name="fade-slide"
    mode="out-in"
    appear
  >
    <component is="Component" />
  </transition>`
};

export default defineComponent({
  name: 'WLayoutInner',
  props: {
    pageHeader: propTypes.looseBool,
    fixWidth: propTypes.bool.def(true),
    menus: propTypes.object,
  },
  setup(props) {
    const { currentRoute } = useRouter();
    const selectedKeys = ref<string[]>([]);
    watchEffect(() => {
      const selectMenu = props.menus.find((menuItem: any) => currentRoute.value.fullPath.includes(menuItem.path));

      if (selectMenu) {
        selectedKeys.value = [selectMenu.path];
      }
    });
    return {
      selectedKeys,
      // TODO
      handleClick: () => {

      },
    };
  },
  render() {
    const getMenuItems = () => {
      const menuItems: any[] = [];
      this.menus.forEach((mItem: any) => {
        menuItems.push(<a-menu-item
          key={mItem.path}
        >
          <router-link to={mItem.path}>
            { mItem.title }
          </router-link>
        </a-menu-item>);
      });
      return menuItems;
    };

    return (
      <a-layout
        class="w-layout-inner"
        prefix-cls="ant-layout"
      >
        <div
          class={['w-layout-inner-main', {
            'w-layout-inner-main-header': this.pageHeader,
            'w-layout-inner-main-fixwidth': this.fixWidth,
          }]}
        >
          {this.pageHeader && <WLayoutInnerPageheader />}
          <div
            class={['w-layout-inner-core', {
              'w-layout-inner-core-fixwidth': this.fixWidth,
              'w-layout-inner-core-header': this.pageHeader,
            }]}
          >
            <div
              class={['w-layout-inner-box', {
                'w-layout-inner-box-header': this.pageHeader,
              }]}
            >
              <div class="w-layout-inner-left">
                <a-menu
                  id="w-layout-inner-menu"
                  v-models={{
                    selectedKeys: this.selectedKeys
                  }}
                  mode="inline"
                  onClick="handleClick"
                >
                  {getMenuItems()}
                </a-menu>
              </div>
              <RouterComp />
            </div>
          </div>
        </div>
      </a-layout>
    );
  },
});
