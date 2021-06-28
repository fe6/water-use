<template>
  <a-tag
    :color="isAuth ? 'green' : 'red'"
  >
    {{ isAuth ? '' : '未' }}认证
  </a-tag>
</template>

<script lang="ts" src="./layout-default-auth.ts"></script>
