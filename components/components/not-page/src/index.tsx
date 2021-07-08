import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WNotPage',
  setup() {
    return () => <a-result status="404" title="404" sub-title="未找到对应的页面。"></a-result>;
  }
});
