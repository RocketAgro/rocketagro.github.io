import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(createMetaManager())
app.use(router)

router.isReady().then(() => app.mount('#app'))

// app.mount('#app')
