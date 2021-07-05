import {
  UserOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, computed, Transition } from 'vue';
import { useStore } from 'vuex';

import WLayoutDefaultHeader from '../../layout-default-header/src';
import WLayoutDefaultPageheader from '../../layout-default-pageheader/src';
import WLayoutDefaultMenu from '../../layout-default-menu/src';
import WLayoutFooter from '../../layout-footer/src';

export default defineComponent({
  name: 'ALayoutDefault',
  components: {
    UserOutlined,
  },
  setup() {
    const appStore = useStore();
    const pageLoading = computed(() => appStore.state.app.pageLoading);

    const collapsed = ref(false);
    const changeCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed,
      changeCollapsed,

      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      openKeys: ref<string[]>(['sub1']),

      pageLoading,
    };
  },
  render() {
    const menuProps = {
      collapsed: this.collapsed,
      onCollapsed: this.changeCollapsed,
    };

    return (<a-spin spinning={this.pageLoading}>
      <a-layout
        class="w-layout-default"
        prefix-cls="ant-layout"
      >
        <WLayoutDefaultMenu
          {...menuProps}
        />
        <a-layout
          prefix-cls="ant-layout"
        >
          <a-affix
            style={{ zIndex: 1 }}
          >
            <WLayoutDefaultHeader
              {...menuProps}
            />
          </a-affix>
          <div class="w-layout-default-main">
            <WLayoutDefaultPageheader />
            <router-view
            // v-slot={{ Component }}
            >
              <Transition
                name="fade-slide"
                mode="out-in"
                appear
              >
                <component
                // is={Component}
                />
              </Transition>
            </router-view>
            <WLayoutFooter />
          </div>
        </a-layout>
      </a-layout>
    </a-spin>);
  },
});
