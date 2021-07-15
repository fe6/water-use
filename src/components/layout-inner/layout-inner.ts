import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { propTypes } from '../../utils/prop-types';
import WLayoutInnerPageheader from '../layout-inner-pageheader/LayoutInnerPageheader.vue';
import WLayoutFooter from '../layout-footer/LayoutFooter.vue';

export default defineComponent({
  components: {
    WLayoutInnerPageheader,
    WLayoutFooter,
  },
  props: {
    // 是否有头部
    pageHeader: propTypes.looseBool,
    // 是否固定宽度展示
    fixWidth: propTypes.bool.def(true),
    // 左边导航配置
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
    };
  }
});
