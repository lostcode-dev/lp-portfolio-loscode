import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import messages from './i18n';

import App from './App.vue'
import router from './router'

const locale = navigator.language || 'en';

const i18n = createI18n({
    locale,
    fallbackLocale: 'en',
    messages,
    legacy: false,
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
