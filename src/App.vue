<template>
  <home></home>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Home from '@/views/Home.vue'

@Options({
  components: {
    Home
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/css/main.scss";
</style>
