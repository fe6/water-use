<template>
  <div class="w-layout-default-action">
    <a-tooltip title="帮助">
      <a target="_blank" href="https://college.evente.cn/" class="w-layout-default-action-help">
        <QuestionCircleOutlined />
      </a>
    </a-tooltip>
    <a-dropdown
      :trigger="['click']"
      @visibleChange="dropdownVisibleChange"
    >
      <div class="w-layout-default-action-box" @click.prevent>
        <a-avatar :size="24" src="">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <span class="w-layout-default-action-name">用户名</span>
        <a-basic-arrow class="w-layout-default-action-arrow" :bottom="!downDownStatus" :top="downDownStatus" />
      </div>
      <template #overlay>
        <a-menu
          @click="handleMenuClick"
        >
          <a-menu-item key="set">
            <UserOutlined />账户管理
          </a-menu-item>
          <a-menu-item key="logout">
            <LogoutOutlined />退出账户
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" src="./layout-default-action.ts"></script>
<style lang="scss" src="./layout-default-action.scss"></style>
