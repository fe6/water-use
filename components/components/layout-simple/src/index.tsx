import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import WLayoutSimpleHeader from '../../layout-simple-header/src';
import WLayoutFooter from '../../layout-footer/src';

export default defineComponent({
  name: 'WLayoutSimple',
  setup() {
    const appStore = useStore();
    const pageLoading = computed(() => appStore.state.app.pageLoading);

    return {
      pageLoading,
    };
  },
  render() {
    return (<a-spin spinning={this.pageLoading}>
      <a-layout
        class="w-layout-simple"
        prefix-cls="ant-layout"
      >
        <a-affix style={{ zIndex: 1 }}>
          <WLayoutSimpleHeader />
        </a-affix>
        <a-container-scroll class="w-layout-simple-main">
          <router-view v-slot="{ Component }">
            <transition
              name="fade-slide"
              mode="out-in"
              appear
            >
              <component is="Component" />
            </transition>
          </router-view>
          <WLayoutFooter />
        </a-container-scroll>
      </a-layout>
    </a-spin>);
  },
});
