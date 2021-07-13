<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :width="100"
    :collapsed-width="80"
    class="w-layout-default-menu-sider"
  >
    <div class="w-layout-default-menu-logo-box">
      <img class="w-layout-default-menu-logo" src="https://objects.evente.cn/assets/brand/piaodada/logo-200.png" />
    </div>
    <a-container-scroll class="w-layout-default-menu-dark">
      <a-menu
        v-model:selectedKeys="menuCheckKey"
        theme="dark"
        mode="inline"
        class="w-layout-default-menu-inner"
      >
        <a-menu-item
          v-for="menuItem in menus[MENU_GROUP_ENUM.BASE]"
          :key="menuItem.permissionCode"
          class="w-layout-default-menu-item"
        >
          <a :href="menuItem.path">
            <a-icon :icon-id="menuItem.icon" size="14" color="#fff"></a-icon>
            <span class="w-layout-default-menu-name">{{ menuItem.name }}</span>
          </a>
        </a-menu-item>
        <a-menu-item
          v-for="(menuItem, menuIdx) in menus[MENU_GROUP_ENUM.OTHER]"
          :key="menuItem.permissionCode"
          class="w-layout-default-menu-item"
          :class="menuIdx === 0 ? 'w-layout-default-menu-other' : ''"
        >
          <a :href="menuItem.path">
            <a-icon :icon-id="menuItem.icon" size="14" color="#fff"></a-icon>
            <span class="w-layout-default-menu-name">{{ menuItem.name }}</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-container-scroll>
  </a-layout-sider>
  <a-layout-sider
    v-if="navTitle"
    v-model:collapsed="collapseStatus"
    :trigger="null"
    collapsible
    :width="154"
    :collapsed-width="0"
    style="overflow: hidden;"
    breakpoint="xxl"
    class="w-layout-default-menu-sider w-layout-default-menu-sider-light"
    @collapse="collapseChange"
  >
    <div class="w-layout-default-menu-header-name">
      {{ navTitle }}
    </div>
    <a-container-scroll class="w-layout-default-menu-light">
      <a-menu
        v-model:selectedKeys="activeNavKey"
        v-model:openKeys="openNavKey"
        mode="inline"
        style="height: 100%"
      >
        <template
          v-for="navItem in navs"
        >
          <a-sub-menu
            v-if="navItem.subMenus && navItem.subMenus.length > 0"
            :key="navItem.permissionCode"
          >
            <template #title>
              <span>{{ navItem.name }}</span>
            </template>
            <a-menu-item
              v-for="navChild in navItem.subMenus"
              :key="navChild.permissionCode"
            >
              <router-link :to="navChild.path">
                {{ navChild.name }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item
            v-else
            :key="navItem.permissionCode"
          >
            <router-link :to="navItem.path">
              {{ navItem.name }}
            </router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </a-container-scroll>
  </a-layout-sider>
</template>

<script lang="ts" src="./layout-default-menu.ts"></script>
<style lang="scss" src="./layout-default-menu.scss"></style>
