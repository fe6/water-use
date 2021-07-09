<template>
  <div>
    <a-spin :spinning="shopLoading">
      <div v-show="!shopAllItems.length" class="w-layout-default-check-shop-empty">
        <a-empty />
      </div>
      <a-row
        v-show="shopAllItems.length"
        :gutter="16"
        style="height: 304px"
      >
        <a-col
          v-for="item in shopAllItems"
          :key="item.id"
          :span="12"
        >
          <a-card
            class="w-layout-default-check-shop-box"
            hoverable
          >
            <div class="w-layout-default-check-shop-item">
              <div
                class="w-layout-default-check-shop-img"
              >
                <a-image
                  :width="86"
                  :height="86"
                  :src="item.shopLogo"
                  :preview="false"
                  :fallback="errUploadImage"
                ></a-image>
              </div>
              <div class="w-layout-default-check-shop-right">
                <h3 class="w-layout-default-check-shop-title">
                  {{ item.shopName }}
                </h3>
                <div class="w-layout-default-check-shop-desc">
                  <span class="w-layout-default-check-shop-tag">{{ item.shopTypeTips }}</span>
                  <a-divider type="vertical" />
                  <span class="w-layout-default-check-shop-tag">{{ item.isAdmin ? '自有店铺' : '授权管理' }}</span>
                </div>
                <div class="w-layout-default-check-shop-desc w-layout-default-check-shop-state">
                  状态：{{ item.isBusiness ? '开店中' : '已关店' }}
                </div>
                <a-button
                  class="w-layout-default-check-shop-btn"
                  :loading="changeLoadingShopId === item.shopId"
                  @click="defaultShopChange(item.shopId)"
                >
                  切换
                </a-button>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-pagination
        v-show="totalPage > 0"
        v-model:current="currentPage"
        :total="totalPage"
        size="small"
        :default-page-size="defaultPageSize"
        show-less-items
        @change="pageChange"
      />
    </a-spin>
  </div>
</template>

<script lang="ts" src="./layout-default-check-shop.ts"></script>
<style lang="scss" src="./layout-default-check-shop.scss"></style>
