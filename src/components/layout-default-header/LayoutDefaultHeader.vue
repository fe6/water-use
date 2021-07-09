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
          overlay-class-name="w-layout-default-header-info"
          placement="bottomLeft"
          :trigger="['click']"
        >
          <template #overlay>
            <a-layout-default-panel
              :shop-info="shopInfo"
              @on-change-shop="shopChange"
            />
          </template>
          <div class="w-layout-default-header-action w-layout-default-header-item">
            <span class="w-layout-default-header-title w-layout-default-header-item">{{ shopInfo.shopName }}</span>
            <a-basic-arrow class="w-layout-default-header-arrow w-layout-default-header-item" bottom />
          </div>
        </a-dropdown>
        <a-layout-default-auth
          :is-auth="shopInfo.isAudited"
          class="w-layout-default-header-item"
        />
      </div>
      <div style="flex: 1 1 0%;" />
      <a-layout-default-action />
    </div>
    <AModalPro
      :footer="null"
      :width="1000"
      :min-height="338"
      :body-style="{ height: '370px' }"
      @register="registerModal"
    >
      <template #header>
        <div class="w-layout-default-header-check">
          <a-typography-title :level="5">
            切换店铺
          </a-typography-title>
          <div>
            <a-button
              size="small"
              type="primary"
            >
              创建新店铺
            </a-button>
            <a-input-search
              size="small"
              class="w-layout-default-header-check-search"
              @keyup="searchChange"
            />
          </div>
        </div>
      </template>
      <WLayoutDefaultCheckShop :shop-name="shopName" />
    </AModalPro>
    <AModalPro
      v-model:value="authModalStatus"
      title="资质认证"
      :width="1000"
      :min-height="400"
      :body-style="{ height: '432px' }"
      cancel-text="暂不认证"
      ok-text="立即认证"
      :ok-button-props="{
        type: 'danger',
      }"
      @ok="authModalOk"
      @cancel="authModalCancel"
      @register="registerAuthModal"
    >
      <div
        class="w-layout-default-header-auth"
      >
        <a-image
          :width="275"
          :height="275"
          :src="authImage"
          :preview="false"
        />
      </div>
      <a-typography-title :level="4" style="margin-bottom: 16px; text-align: center;">
        为了确保店铺正常营业，请完成商户认证哦!
      </a-typography-title>
      <a-typography-text style="text-align: center; display: block">
        请完成认证，否则店铺将无法继续使用
      </a-typography-text>
    </AModalPro>
  </a-layout-header>
</template>

<script lang="ts" src="./layout-default-header.ts"></script>
<style lang="scss" src="./layout-default-header.scss"></style>
