import { defineComponent, ref } from 'vue';

import { propTypes } from '../../utils/prop-types';
import WLayoutInnerPageheader from '../layout-inner-pageheader/LayoutInnerPageheader.vue';
import WLayoutFooter from '../layout-footer/LayoutFooter.vue';

export default defineComponent({
  components: {
    WLayoutInnerPageheader,
    WLayoutFooter,
  },
  props: {
    pageHeader: propTypes.looseBool,
    fixWidth: propTypes.bool.def(true),
    menus: propTypes.object,
  },
  setup(props) {
    const selectedKeys = ref<string[]>(['1']);
    return {
      selectedKeys,
      handleClick: () => {

      },
    };
  }
});
