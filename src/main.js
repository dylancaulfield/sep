import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const theme = {
  themes: {
    light: {
      primary: '#3f51b5',
      secondary: '#ffdc12',
      accent: '#ff0326',
      error: '#b71c1c',
    }
  }
}

new Vue({
  theme,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
