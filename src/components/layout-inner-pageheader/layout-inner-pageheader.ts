import { defineComponent, watch, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import {
  getBreadcrumbRoutes,
  getTitle,
  getHeaderGoBack,
} from '../layout-default-pageheader/use-path';

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
