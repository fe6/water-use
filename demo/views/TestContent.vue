<template>
  <w-layout-default-content style="height: 2000px">
    <a-button @click="open">
      这是内容
    </a-button>
    <AModalPro
      title="water"
      :loading="modalLoading"
      loading-tip="我们在努力的加载"
      :ok-button-props="{
        loading: modalLoading,
      }"
      @register="registerModal"
      @ok="okHandle"
    >
      这里面是简单的内容
    </AModalPro>
  </w-layout-default-content>
</template>

<script lang="ts" >
import {
  defineComponent,
  ref,
} from 'vue';
import AModalPro, { useModal } from '@fe6/water-pro/components/modal-pro/index';

import WLayoutDefaultContent from '../../src/components/layout-default-content/LayoutDefaultContent.vue';

export default defineComponent({
  components: {
    WLayoutDefaultContent,
    AModalPro,
  },
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    const modalLoading = ref(false);
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
      okHandle: () => {
        modalLoading.value = true;
        setTimeout(() => {
          modalMethods.openModal(false);
          modalLoading.value = false;
        }, 1500);
      },
      modalLoading,
    };
  },
});
</script>
