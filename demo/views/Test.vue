<template>
  <div style="height: 2000px">
    <a-button class="ant-affix" type="danger" @click="setLoading">
      这是 {{ name }}-{{ pageLoading }}
    </a-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {
  unref,
  computed,
  // onBeforeMount
} from 'vue';

// import { get503 } from '@@apis/test';

const appStore = useStore();

const { currentRoute } = useRouter();
const { name } = unref(currentRoute);

const pageLoading = computed(() => appStore.state.app.pageLoading);

const setLoading = () => {
  appStore.dispatch('app/setPageLoading', !pageLoading.value);
};

// const getDetail = async () => {
//   const codes = await get503();
//   console.log(codes, 'test get code');
// }

// onBeforeMount(async () => {
//   getDetail()
// })
</script>
