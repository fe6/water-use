import { defineComponent } from 'vue';

import ALayoutDefaultAction from '../../layout-default-action/src';
import AIcon from '../../icon';

export default defineComponent({
  name: 'WLayoutSimpleHeader',
  setup() {
    return () => <a-layout-header
      prefixCls="ant-layout-header"
      class="w-layout-simple-header"
    >
      <div class="w-layout-simple-header-inner">
        <div class="w-layout-simple-header-logo">
          <AIcon icon-id="31330" size="62" />
        </div>
        <div style="flex: 1 1 0%;" />
        <ALayoutDefaultAction class="w-layout-simple-header-action" />
      </div>
    </a-layout-header>;
  }
});
