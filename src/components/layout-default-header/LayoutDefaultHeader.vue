<template>
  <a-layout-header
    style="background: #fff; padding: 0"
    prefix-cls="ant-layout-header"
    class="w-layout-default-header"
  >
    <template v-if="navTitle">
      <menu-unfold-outlined
        v-if="collapsed"
        class="w-layout-default-header-trigger"
        @click="changeCollapsed"
      />
      <menu-fold-outlined v-else class="w-layout-default-header-trigger" @click="changeCollapsed" />
    </template>
    <div class="w-layout-default-header-inner" :class="navTitle ? '' : 'w-layout-default-header-inner-only'">
      <div class="w-layout-default-header-label">
        <a-dropdown
          v-model:visible="visible"
          overlay-class-name="w-layout-default-header-info"
          placement="bottomLeft"
        >
          <template #overlay>
            <a-layout-default-panel />
          </template>
          <div class="w-layout-default-header-action w-layout-default-header-item">
            <span class="w-layout-default-header-title w-layout-default-header-item">中国金茂酒店官方旗舰店</span>
            <a-basic-arrow class="w-layout-default-header-arrow w-layout-default-header-item" :bottom="!visible" :top="visible" />
          </div>
        </a-dropdown>
        <a-layout-default-auth class="w-layout-default-header-item" />
      </div>
      <div style="flex: 1 1 0%;" />
      <a-layout-default-action />
    </div>
  </a-layout-header>
</template>

<script lang="ts" src="./layout-default-header.ts"></script>
<style lang="scss" src="./layout-default-header.scss"></style>
