<template>
  <div class="w-layout-inner-pageheader">
    <a-breadcrumb class="w-layout-inner-pageheader-breadcrumb" :routes="breadcrumbRoutes">
      <template #itemRender="{ route }">
        {{ route.title }}
      </template>
    </a-breadcrumb>
    <h2 class="w-layout-inner-pageheader-title">
      <ArrowLeftOutlined
        @click="headerGoBack"
      />
      <span class="w-layout-inner-pageheader-title-inner">{{ title }}</span>
    </h2>
  </div>
</template>

<script lang="ts" src="./layout-inner-pageheader.ts"></script>
<style lang="scss" src="./layout-inner-pageheader.scss"></style>
