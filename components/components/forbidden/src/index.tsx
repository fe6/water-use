import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AForbidden',
  setup() {
    return () => <a-result
      status="error"
      title="Forbidden"
      sub-title="暂时无法访问"
    />;
  }
});
