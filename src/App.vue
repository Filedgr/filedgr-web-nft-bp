<template>
  <!--  <div class="main">-->
  <!--    <Home></Home>-->
  <!--  </div>-->
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <router-view/>
<!--  <home></home>-->
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/css/main.scss";
</style>
