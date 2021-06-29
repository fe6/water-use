import { isUndefined } from 'lodash-es';
import { defineComponent, ref, computed } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';

import { propTypes } from '../../utils/prop-types';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import ALayoutDefaultPanel from '../layout-default-panel/LayoutDefaultPanel.vue';
import ALayoutDefaultAction from '../layout-default-action/LayoutDefaultDction.vue';

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ALayoutDefaultAuth,
    ALayoutDefaultPanel,
    ALayoutDefaultAction,
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
  }
});
