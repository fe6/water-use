<template>
  <a-spin :spinning="pageLoading">
    <a-layout
      class="w-layout-simple"
      prefix-cls="ant-layout"
    >
      <a-affix :style="{ zIndex: 1 }">
        <w-layout-simple-header :collapsed="collapsed" @on-collapsed="changeCollapsed" />
      </a-affix>
      <a-container-scroll class="w-layout-simple-main">
        <router-view v-slot="{ Component }">
          <transition
            name="fade-slide"
            mode="out-in"
            appear
          >
            <component :is="Component" />
          </transition>
        </router-view>
        <w-layout-footer />
      </a-container-scroll>
    </a-layout>
  </a-spin>
</template>

<script lang="ts" src="./layout-simple.ts"></script>
<style lang="scss" src="./layout-simple.scss"></style>
