import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WFooter',
  setup() {
    return () => <a-layout-footer class="w-layout-footer">
      <div>活动易 · 文旅行业解决专家</div>
      <div>©2012-2021 Evente.cn</div>
    </a-layout-footer>;
  },
});
