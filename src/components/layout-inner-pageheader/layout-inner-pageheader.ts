import { defineComponent, watch, ref } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { hasOwn } from '@vue/shared';
import { isFunction } from 'lodash-es';

const getRouterMeta = (currentRoute: RouteLocationNormalizedLoaded, key: string) => {
  if (!key) {
    return '';
  }
  if (
    hasOwn(currentRoute, 'meta')
    && hasOwn(currentRoute.meta, key)
    && (currentRoute.meta as any)[key].length
  ) {
    return (currentRoute.meta as any)[key];
  }
  return '';
};
const getBreadcrumbRoutes = (currentRoute: RouteLocationNormalizedLoaded) => {
  return getRouterMeta(currentRoute, 'breadcrumbRoutes');
};
const getTitle = (currentRoute: RouteLocationNormalizedLoaded) => {
  return getRouterMeta(currentRoute, 'title');
};

const getHeaderGoBack = (currentRoute: RouteLocationNormalizedLoaded) => {
  if (
    hasOwn(currentRoute, 'meta')
    && hasOwn(currentRoute.meta, 'headerGoBack')
    && isFunction((currentRoute.meta as any).headerGoBack)
  ) {
    return (currentRoute.meta as any).headerGoBack;
  }
  return () => {};
};

export default defineComponent({
  components: {
    ArrowLeftOutlined,
  },
  setup() {
    const { currentRoute } = useRouter();
    const headerGoBack = ref(getHeaderGoBack(currentRoute.value));
    const title = ref(getTitle(currentRoute.value));
    const breadcrumbRoutes = ref<any[]>(getBreadcrumbRoutes(currentRoute.value));
    watch([() => currentRoute.value], ([newRoute]) => {
      title.value = getTitle(newRoute);
      breadcrumbRoutes.value = getBreadcrumbRoutes(newRoute);
      headerGoBack.value = getHeaderGoBack(newRoute);
    });

    return {
      breadcrumbRoutes,
      title,
      headerGoBack,
    };
  },
});
