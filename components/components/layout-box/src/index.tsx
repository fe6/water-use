import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WLayoutBox',
  setup() {
    return () => <router-view class="layout-box" />;
  }
});
