import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import {
  defineComponent,
  computed,
  ref,
  onBeforeMount,
  // NOTE [本地模拟导航] 本地若想模拟打开这个，但数据格式会变，参照本项目的格式
  // onMounted,
  watchEffect,
  watch
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import {
  MENU_GROUP_ENUM,
} from '../../api-mods/external';
import { propTypes } from '../../utils/prop-types';
import { getAvtiveKey } from '../../utils/menus';
import {
  getEnvConfig,
  // NOTE [本地模拟导航] 本地若想模拟打开这个，但数据格式会变，参照本项目的格式
  // isDevMode,
} from '../../env';

import AIcon from '../icon';
import { hasOwn } from '@fe6/shared';

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

    // NOTE [本地模拟导航] 本地若想模拟打开这个，但数据格式会变，参照本项目的格式
    // onMounted(async() => {
    //   if (isDevMode()) {
    //     const pwd = (window as any).pwd;
    //     const json = (await (await import(/* @vite-ignore */`${pwd}/src/mock/external`)).default) as any;
    //     myStores.dispatch('external/setAllExternals', json);
    //   }
    // });

    const collapseStatus = ref(false);
    watchEffect(() => {
      collapseStatus.value = props.collapsed || false;
    });

    const collapseChange = (collapseStatus: boolean) => {
      emit('on-collapsed', collapseStatus);
    };

    const { meta } = currentRoute.value;

    const menuCheckKey = hasOwn(meta, 'menuActive') ? String(meta.menuActive) : VITE_MENU_ACTIVE;

    return {
      menuCheckKey: ref<string[]>([menuCheckKey]),
      collapseStatus,
      collapseChange,

      activeNavKey,
      openNavKey,

      MENU_GROUP_ENUM,

      menus,
      navs,
      navTitle,
    };
  },
});
