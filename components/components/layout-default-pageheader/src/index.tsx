import { defineComponent, watch, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import {
  getBreadcrumbRoutes,
  getTitle,
  getHeaderGoBack,
} from './use-path';

export default defineComponent({
  name: 'WLayoutDefaultPageheader',
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
  render() {
    let titleNode: any = null;

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
