<template>
  <div class="w-layout-default-pageheader">
    <a-breadcrumb class="w-layout-default-pageheader-breadcrumb" :routes="breadcrumbRoutes">
      <template #itemRender="{ route }">
        {{ route.title }}
      </template>
    </a-breadcrumb>
    <h2 v-if="title" class="w-layout-default-pageheader-title">
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts" src="./layout-default-pageheader.ts"></script>
<style lang="scss" src="./layout-default-pageheader.scss"></style>
