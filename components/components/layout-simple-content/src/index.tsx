import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WLayoutSimpleContent',
  setup(_, { slots }: any) {
    return () => <a-layout-content
      class="w-layout-simple-content"
      prefix-cls="ant-layout-content"
      v-slots={slots}
    />;
  }
});
