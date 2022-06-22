<template>
  <va-card tag='b'>
    <va-card-title>Message</va-card-title>
    <va-card-content>
      {{ this.message }}
    </va-card-content>
  </va-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { FileLoader } from '@/network/FileLoader'

@Options({
  props: {
    fileUrl: String
  }
})
export default class MessageWrapper extends Vue {
  private fileUrl = ''
  private message = ''

  beforeMount () {
    this.loadFile(this.fileUrl)
  }

  private async loadFile (url: string) {
    const loader = new FileLoader(url, '')
    loader.getTxtFile().then(msg => {
      this.message = msg
    })
  }
}
</script>

<style scoped>

</style>
