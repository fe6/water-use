<template>
  <div>
    <div class="w-layout-default-panel">
      <a-image
        :width="100"
        :height="100"
        :src="shopInfo.shopLogo"
        class="w-upload-image-img"
        :preview="false"
        :fallback="errUploadImage"
      ></a-image>
      <div class="w-layout-default-panel-content">
        <div class="w-layout-default-panel-title layout-default-panel">
          <span>{{ shopInfo.shopName }}</span>
          <!-- <EditOutlined /> -->
        </div>
        <div class="w-layout-default-panel-tag">
          <a-layout-default-auth
            size="small"
            class="w-layout-default-panel-tag"
            :is-auth="shopInfo.isAudited"
          />
        </div>
        <div>
          <a-button><ShareAltOutlined />分享</a-button>
          <!-- C 端首页(二期)<a-button class="w-layout-default-panel-btn">
            <EditOutlined />进店
          </a-button> -->
          <a-button
            v-if="!shopInfo.isAudited"
            class="w-layout-default-panel-btn"
            type="danger"
            @click="goAuth"
          >
            店铺认证
          </a-button>
        </div>
      </div>
    </div>
    <a-row class="w-layout-default-panel-footer">
      <a-col :span="11">
        <div class="w-layout-default-panel-action" @click="changeShop">
          <!-- <a-icon icon-id="29515" size="14"></a-icon> -->
          <span class="w-layout-default-panel-label">切换店铺</span>
        </div>
      </a-col>
      <a-col :span="2">
        <a-divider type="vertical" />
      </a-col>
      <a-col :span="11">
        <div class="w-layout-default-panel-action" @click="goCreateStore">
          <!-- <EditOutlined /> -->
          <span class="w-layout-default-panel-label">创建新店</span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" src="./layout-default-panel.ts"></script>
<style lang="scss" src="./layout-default-panel.scss"></style>
