import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, computed, ref, onBeforeMount, watchEffect, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import {
  MENU_TYPE_ENUM,
} from '../../api-mods/external';
import { propTypes } from '../../utils/prop-types';
import { getAvtiveKey } from '../../utils/menus';
import { getEnvConfig } from '../../env';

import AIcon from '../icon';

export default defineComponent({
  components: {
    AIcon,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: propTypes.looseBool,
  },
  emits: ['on-collapsed'],
  setup(props, { emit }) {
    const { VITE_MENU_ACTIVE } = getEnvConfig();
    const { currentRoute } = useRouter();
    const myStores = useStore();

    const menus = computed(() => {
      return myStores.state.external.menus;
    });

    const activeNavKey = ref<string[]>([]);
    const openNavKey = ref<string[]>([]);
    const navs = computed(() => myStores.state.external.navs);
    const navTitle = computed(() => myStores.state.external.navTitle);

    watch([() => myStores.state.external.navs, currentRoute], ([newNavs, newRoute]) => {
      const {
        activeNavCode,
        openNavCode,
      } = getAvtiveKey(newNavs, newRoute.fullPath);

      if (activeNavCode) {
        activeNavKey.value = [];
        activeNavKey.value.push(activeNavCode);
      }

      if (openNavCode) {
        openNavKey.value = [];
        openNavKey.value.push(openNavCode);
      }
    });

    // NOTE 获取权限接口数据
    onBeforeMount(async() => {
      await myStores.dispatch('external/getAllExternals');
    });

    const collapseStatus = ref(false);
    watchEffect(() => {
      collapseStatus.value = props.collapsed || false;
    });

    const collapseChange = (collapseStatus: boolean) => {
      emit('on-collapsed', collapseStatus);
    };

    return {
      menuCheckKey: ref<string[]>([VITE_MENU_ACTIVE]),
      collapseStatus,
      collapseChange,

      activeNavKey,
      openNavKey,

      MENU_TYPE_ENUM,

      menus,
      navs,
      navTitle,
    };
  },
});
