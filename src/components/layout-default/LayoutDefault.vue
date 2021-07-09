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
        <div class="w-layout-default-main">
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
          <w-layout-footer />
        </div>
      </a-layout>
    </a-layout>
  </a-spin>
</template>

<script lang="ts" src="./layout-default.ts"></script>
<style lang="scss" src="./layout-default.scss"></style>
