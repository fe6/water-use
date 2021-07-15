import { defineComponent, watch, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import {
  getBreadcrumbRoutes,
  getTitle,
  getHeaderGoBack,
  getHeaderStatusGoBack,
} from './use-path';

export default defineComponent({
  components: {
    ArrowLeftOutlined,
  },
  setup() {
    const { currentRoute } = useRouter();
    const headerGoBack = ref(getHeaderGoBack(currentRoute.value));
    const headerStatusGoBack = ref(getHeaderStatusGoBack(currentRoute.value));
    const title = ref(getTitle(currentRoute.value));
    const breadcrumbRoutes = ref<any[]>(getBreadcrumbRoutes(currentRoute.value));
    watch([() => currentRoute.value], ([newRoute]) => {
      title.value = getTitle(newRoute);
      breadcrumbRoutes.value = getBreadcrumbRoutes(newRoute);
      headerGoBack.value = getHeaderGoBack(newRoute);
      headerStatusGoBack.value = ref(getHeaderStatusGoBack(newRoute));
    });

    return {
      breadcrumbRoutes,
      title,
      headerGoBack,
      headerStatusGoBack,
    };
  },
});
