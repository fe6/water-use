<template>
  <div>
    <a-button class="ant-affix" type="danger">
      这是 inner
    </a-button>
      <router-link :to="{name: 'Test41View'}">去页面1</router-link>
      <router-link :to="{name: 'Test4View'}">去页面2</router-link>
      <router-link :to="{name: 'Test42View'}">微页面3</router-link>
  </div>
</template>
