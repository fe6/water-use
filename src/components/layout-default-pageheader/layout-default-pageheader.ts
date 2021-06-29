import { defineComponent, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import { getAvtiveKey } from '../../utils/menus';
import routers from './use-path';
import { isEmpty } from 'lodash-es';

export default defineComponent({
  components: {
    ArrowLeftOutlined,
  },
  setup() {
    const [routes] = routers();
    const { currentRoute } = useRouter();
    const breadcrumbRoutes = ref<any>([]);
    const myStores = useStore();
    const title = ref('');
    watch([() => myStores.state.external.navs, () => currentRoute.value.fullPath, () => myStores.state.external.navTitle], ([newNavs, newFullPath, newNavTitle]) => {
      const {
        twoNavItem,
        threeNavItem,
      } = getAvtiveKey(newNavs, newFullPath);
      // 切换导航的时候重置
      breadcrumbRoutes.value = [];

      if (newNavTitle) {
        breadcrumbRoutes.value.push({
          path: '/',
          title: newNavTitle,
        });
      }

      if (!isEmpty(twoNavItem)) {
        breadcrumbRoutes.value.push({
          path: twoNavItem.path,
          title: twoNavItem.name,
        });
      }
      if (!isEmpty(threeNavItem)) {
        breadcrumbRoutes.value.push({
          path: threeNavItem.path,
          title: threeNavItem.name,
        });
      }
      if (routes.value.length > 0 && threeNavItem.name !== routes.value[0].meta.title) {
        breadcrumbRoutes.value.push({
          path: routes.value[0].path,
          title: routes.value[0].meta.title,
        });
      }
      title.value = breadcrumbRoutes.value[breadcrumbRoutes.value.length - 1].title;
    });

    return {
      breadcrumbRoutes,
      title,
    };
  },
});
