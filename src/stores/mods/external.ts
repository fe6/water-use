import type {
  MenuModal,
} from '../../api-mods/external';

import {
  MenusPageModal,
} from '../../api-mods/external';

import { getSomeInfo } from '../../apis/external';
import { getDarkMenus, getLightMenus } from '../../utils/menus';

interface ExternalStateModal {
  // 原始接口的存储
  originMenus: MenuModal[]
  // 处理过后的黑色导航数据
  menus: MenusPageModal
  navTitle: string
  // 处理过后的白色导航数据
  navs: MenuModal[]
}

const state: ExternalStateModal = {
  originMenus: [],
  menus: {} as MenusPageModal,
  navs: [] as MenuModal[],
  navTitle: '',
};

// getters
const getters = {
  getOriginMenus: (state: ExternalStateModal) => {
    return state.originMenus;
  },
};

// actions
const actions = {
  getAllExternals: async({ commit, state }: any) => {
    if (!state.originMenus.length) {
      const externalResult = await getSomeInfo();
      commit('setAllExternals', { externalResult });
    }
  },
};

// mutations
const mutations = {
  setAllExternals(state: ExternalStateModal, { externalResult }: any) {
    state.originMenus = externalResult.menus.slice();
    state.menus = getDarkMenus(state.originMenus);
    const { title, currentNavs } = getLightMenus(state.originMenus);
    state.navs = currentNavs;
    state.navTitle = title;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
