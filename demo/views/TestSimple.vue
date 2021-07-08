<template>
  <w-layout-simple-content style="height: 2000px">
    <a-button>
      这是内容
    </a-button>
  </w-layout-simple-content>
</template>

<script lang="ts" >
import {
  defineComponent,
} from 'vue';

import WLayoutSimpleContent from '@@components/layout-simple-content/src';

export default defineComponent({
  components: {
    WLayoutSimpleContent,
  },
});
</script>
