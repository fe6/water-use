import {
  UserOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

import WLayoutDefaultHeader from '../layout-default-header/LayoutDefaultHeader.vue';
import WLayoutDefaultPageheader from '../layout-default-pageheader/LayoutDefaultPageheader.vue';
import WLayoutDefaultMenu from '../layout-default-menu/LayoutDefaultMenu.vue';
import WLayoutFooter from '../layout-footer/LayoutFooter.vue';

export default defineComponent({
  name: 'ALayoutDefault',
  components: {
    UserOutlined,
    WLayoutDefaultHeader,
    WLayoutDefaultPageheader,
    WLayoutDefaultMenu,
    WLayoutFooter,
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
});
