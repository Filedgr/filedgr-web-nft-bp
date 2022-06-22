<template>
  <Header/>
  <ContentContainer/>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
<!--  </div>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import ContentContainer from '@/components/ContentContainer.vue'

@Options({
  components: {
    ContentContainer,
    Header,
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
