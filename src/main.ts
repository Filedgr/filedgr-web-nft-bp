import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/override.css'
import 'vue3-timeline/dist/style.css'
import { createVuestic } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css'
import GiGridImages from '@chinhpd/vue3-grid-images'
import { createRouter } from '@/router'
import { createAuth0 } from '@auth0/auth0-vue'

// TODO: add the json file
const app = createApp(App)
app
  .use(GiGridImages)
  .use(
    createAuth0({
      domain: 'filedgr-dev.eu.auth0.com',
      client_id: 'F30SC6zokWTHaNjVI3LnQ6G6Ngd1T0EJ',
      redirect_uri: window.location.origin
    })
  )
  .use(createVuestic({
    config: {
      colors: {
        primary: '#0a1b28'
      }
    }
  }))
  .use(store)
  .use(createRouter(app))
  .mount('#app')
