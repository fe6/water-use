import { defineComponent, ref, computed, onMounted } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import * as waterPro from '@fe6/water-pro';

import { getEnvConfig } from '../../env';
import { siteHref } from '../../hooks/use-page';
import { propTypes } from '../../utils/prop-types';
import ALayoutDefaultAuth from '../layout-default-auth/LayoutDefaultAuth.vue';
import ALayoutDefaultPanel from '../layout-default-panel/LayoutDefaultPanel.vue';
import ALayoutDefaultAction from '../layout-default-action/LayoutDefaultDction.vue';
import { getShop } from '../../utils/cookie';
import { errUploadImage } from '../layout-default-panel/error-image';
import WLayoutDefaultCheckShop from '../layout-default-check-shop/LayoutDefaultCheckShop.vue';
import authImage from './auth-banner.svg';

const {
  VITE_SHOP,
} = getEnvConfig();

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
    const changeCollapsed = () => {
      emit('on-collapsed', props.collapsed);
    };

    const myStores = useStore();
    const navTitle = computed(() => myStores.state.external.navTitle);

    const shopInfo = ref<any>({});
    const handleProfile = async() => {
      shopInfo.value = await getShop();
    };

    const shopName = ref('');
    const searchChange = (ev: any) => {
      if (ev.keyCode === 13) {
        shopName.value = ev.target.value;
      }
    };

    const { register: registerModal, methods: modalMethods } = waterPro.useModal();
    const shopChange = () => {
      modalMethods.openModal();
    };

    const authModalStatus = ref(true);
    const { register: registerAuthModal, methods: modalAuthMethods } = waterPro.useModal();

    const authModalOk = () => {
      // TODO 认证链接
      siteHref(`${VITE_SHOP}manage/qualification`);
    };

    const authModalCancel = () => {
      // 如果到期了就不让关，必须认证
      if (shopInfo.value.isAudited) {
        modalAuthMethods.openModal();
      }
    };

    const goCreateStore = () => {
      siteHref(`${VITE_SHOP}store/type`);
    };

    onMounted(async() => {
      // modalMethods.openModal();
      await handleProfile();
      // 如果没认证
      if (!shopInfo.value.isAudited) {
        modalAuthMethods.openModal();
      }
    });

    return {
      navTitle,
      changeCollapsed,
      shopInfo,
      registerModal,
      errUploadImage,
      shopName,
      searchChange,
      shopChange,
      registerAuthModal,
      authModalStatus,
      authModalOk,
      authModalCancel,
      authImage,
      goCreateStore,
    };
  }
});
