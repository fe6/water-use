// initial state
// shape: [{ id, quantity }]

interface AppStateModal {
  pageLoading: boolean
}

const state = {
  pageLoading: false,
};

let timeId: TimeoutHandle;

// getters
const getters = {
  getPageLoading: (state: AppStateModal) => {
    return state.pageLoading;
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
  }
};

// mutations
const mutations = {
  commitPageLoading(state: AppStateModal, loading: boolean) {
    state.pageLoading = loading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
