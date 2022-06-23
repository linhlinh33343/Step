import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

import store from './store/index'
createApp(App).use(Vuex).use(store).mount('#app')
