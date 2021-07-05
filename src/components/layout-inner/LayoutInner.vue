<template>
  <a-layout
    class="w-layout-inner"
    prefix-cls="ant-layout"
  >
    <div
      class="w-layout-inner-main"
      :class="{
        ['w-layout-inner-main-header']: pageHeader,
        ['w-layout-inner-main-fixwidth']: fixWidth,
      }"
    >
      <WLayoutInnerPageheader v-if="pageHeader" />
      <div
        class="w-layout-inner-core"
        :class="{
          ['w-layout-inner-core-fixwidth']: fixWidth,
          ['w-layout-inner-core-header']: pageHeader,
        }"
      >
        <div
          class="w-layout-inner-box"
          :class="{
            ['w-layout-inner-box-header']: pageHeader,
          }"
        >
          <div class="w-layout-inner-left">
            <a-menu
              id="w-layout-inner-menu"
              v-model:selectedKeys="selectedKeys"
              mode="inline"
              @click="handleClick"
            >
              <a-menu-item
                v-for="mItem in menus"
                :key="mItem.path"
              >
                {{ mItem.title }}
              </a-menu-item>
            </a-menu>
          </div>
          <router-view v-slot="{ Component }" class="w-layout-inner-right">
            <transition
              name="fade-slide"
              mode="out-in"
              appear
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script lang="ts" src="./layout-inner.ts"></script>
<style lang="scs" src="./layout-inner.scss"></style>
