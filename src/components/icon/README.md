# a-icon

## demo

``` vue
<template>
  <balance-two theme="filled" size="32" fill="#17bd08" />
  <icon icon-id="29464" size="32"></icon>
</template>

<script lang="ts">
// 官网： https://iconpark.oceanengine.com/official
// 参数： https://bytedance.feishu.cn/docs/doccnfQ9MVhtfye33SymobB5usb#bIprMt
// icon 使用
import { defineComponent } from 'vue';
import { BalanceTwo } from '@icon-park/vue-next';
import Icon from '@@utils/use/components/icon';
export default defineComponent({
  components: {
    BalanceTwo,
    Icon,
  },
});
</script>
```

## 更新 logo

1. 进入官网
2. 全选 logo
3. 更新代码
