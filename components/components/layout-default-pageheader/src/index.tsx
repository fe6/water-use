import { defineComponent, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { isEmpty } from 'lodash-es';

import { getAvtiveKey } from '../../../utils/menus';
import { renderNode } from '../../../types/node';
import routers from './use-path';

export default defineComponent({
  name: 'WLayoutDefaultPageheader',
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
  render() {
    let titleNode: renderNode = null;

    if (this.title) {
      titleNode = (<h2 class="w-layout-default-pageheader-title">
        <ArrowLeftOutlined />
        <span class="w-layout-default-pageheader-title-inner">{ this.title }</span>
      </h2>);
    }

    return (<div class="w-layout-default-pageheader">
      <a-breadcrumb
        class="w-layout-default-pageheader-breadcrumb"
        routes={this.breadcrumbRoutes}
        v-slots={{
          itemRender: ({ route }: any) => route.title
        }}
      />
      {titleNode}
    </div>);
  },
});
