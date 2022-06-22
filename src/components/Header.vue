<template>
<div class="header">
  <img src="../assets/logos/logo.svg">
</div>
</template>

<script>

import { Vue } from 'vue-class-component'

export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
@import '../assets/css/vars.scss';

.header {
  background-color: $primary-color;
  height: $header-height;
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    height: $logo-height;
  }
}
</style>
