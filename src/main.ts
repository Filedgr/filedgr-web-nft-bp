import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/override.css'
import 'vue3-timeline/dist/style.css'
import { createVuestic } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css'
import GiGridImages from '@chinhpd/vue3-grid-images'

createApp(App)
  .use(GiGridImages)
  .use(createVuestic({
    config: {
      colors: {
        primary: '#0a1b28'
      }
    }
  }))
  .use(store)
  .use(router)
  .mount('#app')
