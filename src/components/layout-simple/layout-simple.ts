import {
  UserOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

import WLayoutSimpleHeader from '../layout-simple-header/LayoutSimpleHeader.vue';
import WLayoutFooter from '../layout-footer/LayoutFooter.vue';

export default defineComponent({
  name: 'ALayoutSimple',
  components: {
    UserOutlined,
    WLayoutFooter,
    WLayoutSimpleHeader,
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
