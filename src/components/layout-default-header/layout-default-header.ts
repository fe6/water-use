import { isUndefined } from 'lodash-es';
import { defineComponent, ref, computed, onBeforeMount, onMounted } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import * as waterPro from '@fe6/water-pro';

import { propTypes } from '../../utils/prop-types';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import ALayoutDefaultPanel from '../layout-default-panel/LayoutDefaultPanel.vue';
import ALayoutDefaultAction from '../layout-default-action/LayoutDefaultDction.vue';
import { getShop } from '../../utils/cookie';
import { errUploadImage } from '../layout-default-panel/error-image';
import WLayoutDefaultCheckShop from '../layout-default-check-shop/LayoutDefaultCheckShop.vue';

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ALayoutDefaultAuth,
    ALayoutDefaultPanel,
    ALayoutDefaultAction,
    WLayoutDefaultCheckShop,
  },
  props: {
    collapsed: propTypes.looseBool,
  },
  emits: ['on-collapsed'],
  setup(props, { emit }) {
    const { register: registerModal, methods: modalMethods } = waterPro.useModal();

    const changeCollapsed = () => {
      emit('on-collapsed', props.collapsed);
    };

    const myStores = useStore();
    const navTitle = computed(() => myStores.state.external.navTitle);

    const shopInfo = ref({});
    const handleProfile = async() => {
      shopInfo.value = await getShop();
    };

    const shopName = ref('');
    const searchChange = (ev: any) => {
      if (ev.keyCode === 13) {
        shopName.value = ev.target.value;
      }
    };

    const shopChange = () => {
      modalMethods.openModal();
    };

    // onMounted(() => {
    //   modalMethods.openModal();
    // })

    onBeforeMount(handleProfile);

    return {
      navTitle,
      changeCollapsed,
      shopInfo,
      registerModal,
      errUploadImage,
      shopName,
      searchChange,
      shopChange,
    };
  }
});
