import { isUndefined } from 'lodash-es';
import { defineComponent, ref, computed } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';

import { propTypes } from '../../../utils/prop-types';
import ALayoutDefaultAuth from '../../layout-default-auth/src';
import ALayoutDefaultPanel from '../../layout-default-panel/src';
import ALayoutDefaultAction from '../../layout-default-action/src';
import { renderNode } from '../../../types/node';

export default defineComponent({
  name: 'WLayoutDefaultHeader',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: propTypes.looseBool,
  },
  emits: ['on-collapsed'],
  setup(props, { emit }) {
    const visible = ref(false);

    const hideInfo = (newStatus?: boolean) => {
      visible.value = isUndefined(newStatus) ? !visible.value : newStatus;
    };

    const changeCollapsed = () => {
      emit('on-collapsed', props.collapsed);
    };

    const myStores = useStore();
    const navTitle = computed(() => myStores.state.external.navTitle);

    return {
      navTitle,
      changeCollapsed,
      visible,
      hideInfo,
    };
  },
  render() {
    let menuAction: renderNode = null;

    if (this.navTitle) {
      if (this.collapsed) {
        menuAction = (<menu-unfold-outlined
          class="w-layout-default-header-trigger"
          onClick={this.changeCollapsed}
        />);
      }
      else {
        menuAction = (<menu-fold-outlined
          v-else
          class="w-layout-default-header-trigger"
          onClick={this.changeCollapsed}
        />);
      }
    }

    return (<a-layout-header
      style="background: #fff; padding: 0"
      prefix-cls="ant-layout-header"
      class="w-layout-default-header"
    >
      {menuAction}
      <div
        class={[
          'w-layout-default-header-inner',
          this.navTitle ? '' : 'w-layout-default-header-inner-only'
        ]}
      >
        <div class="w-layout-default-header-label">
          <a-dropdown
            visible={this.visible}
            overlay-class-name="w-layout-default-header-info"
            placement="bottomLeft"
            v-slots={{
              overlay: () => <ALayoutDefaultPanel />
            }}
          >
            <div class="w-layout-default-header-action w-layout-default-header-item">
              <span class="w-layout-default-header-title w-layout-default-header-item">中国金茂酒店官方旗舰店</span>
              <a-basic-arrow
                class="w-layout-default-header-arrow w-layout-default-header-item"
                bottom={!this.visible}
                top={this.visible} />
            </div>
          </a-dropdown>
          <ALayoutDefaultAuth class="w-layout-default-header-item" />
        </div>
        <div style="flex: 1 1 0%;" />
        <ALayoutDefaultAction />
      </div>
    </a-layout-header>);
  },
});
