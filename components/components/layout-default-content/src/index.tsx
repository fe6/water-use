import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WLayoutDefaultContent',
  setup() {
    return (props: any, { slot }: any) => (
      <a-layout-content
        class="w-layout-default-content"
        prefix-cls="ant-layout-content"
        {...props}
        v-slots={slot}
      >
        <slot></slot>
      </a-layout-content>
    );
  },
});
