import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
axios.defaults.baseURL = 'https://aspexpressapi-production.up.railway.app'

var token = localStorage.getItem('token');
if (token)
    axios.defaults.headers.common['Authorization'] = 'Bearer' + token;

createApp(App).use(router).use(vuetify).use(VueAxios, axios).mount('#app')


