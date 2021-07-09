// initial state
// shape: [{ id, quantity }]

interface AppStateModal {
  pageLoading: boolean
  shopId: string
}

const state = {
  pageLoading: false,
  shopId: '0',
};

let timeId: TimeoutHandle;

// getters
const getters = {
  getPageLoading: (state: AppStateModal) => {
    return state.pageLoading;
  },
  getShopId: (state: AppStateModal) => {
    return state.shopId;
  }
};

// actions
const actions = {
  setPageLoading({ commit }: any, loading: boolean) {
    if (loading) {
      clearTimeout(timeId);
      // Prevent flicker
      timeId = setTimeout(() => {
        commit('commitPageLoading', loading);
      }, 50);
    }
    else {
      commit('commitPageLoading', loading);
      clearTimeout(timeId);
    }
  },
  setShopId({ commit }: any, shopId: number | string) {
    commit('commitShopId', shopId);
  }
};

// mutations
const mutations = {
  commitPageLoading(state: AppStateModal, loading: boolean) {
    state.pageLoading = loading;
  },
  commitShopId(shopId: number | string) {
    state.shopId = String(shopId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
