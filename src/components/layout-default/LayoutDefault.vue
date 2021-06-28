<template>
  <a-spin :spinning="pageLoading">
    <a-layout
      class="w-layout-default"
      prefix-cls="ant-layout"
    >
      <w-layout-default-menu :collapsed="collapsed" @on-collapsed="changeCollapsed" />
      <a-layout
        prefix-cls="ant-layout"
      >
        <a-affix :style="{ zIndex: 1 }">
          <w-layout-default-header :collapsed="collapsed" @on-collapsed="changeCollapsed" />
        </a-affix>
        <a-container-scroll class="w-layout-default-main">
          <w-layout-default-pageheader />
          <router-view v-slot="{ Component }">
            <transition
              name="fade-slide"
              mode="out-in"
              appear
            >
              <component :is="Component" />
            </transition>
          </router-view>
          <a-layout-footer class="w-layout-default-footer">
            <div>活动易 · 文旅行业解决专家</div>
            <div>©2012-2021 Evente.cn</div>
          </a-layout-footer>
        </a-container-scroll>
      </a-layout>
    </a-layout>
  </a-spin>
</template>

<script lang="ts" src="./layout-default.ts"></script>
<style lang="scss" src="./layout-default.scss"></style>
