import { defineComponent, watch, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

import {
  getBreadcrumbRoutes,
  getTitle,
  getHeaderGoBack,
} from '../../layout-default-pageheader/src/use-path';

export default defineComponent({
  name: 'WLayoutInnerPageheader',
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
    return (<div class="w-layout-inner-pageheader">
      <a-breadcrumb
        class="w-layout-inner-pageheader-breadcrumb"
        routes={this.breadcrumbRoutes}
        v-slots={{
          itemRender: ({ route }: any) => route.title
        }}
      />
      <h2 class="w-layout-inner-pageheader-title">
        <ArrowLeftOutlined
          onClick={this.headerGoBack}
        />
        <span class="w-layout-inner-pageheader-title-inner">{ this.title }</span>
      </h2>
    </div>);
  },
});
