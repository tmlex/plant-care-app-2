import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import api from './plugins/api'
import auth from './plugins/auth'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(api, { router })
app.use(auth, { router, api })

app.mount('#app')
