import Vue from 'vue'
import App from './App.vue'

//Styles
import './assets/css/agency.css'
import './assets/plugins/bootstrap/css/bootstrap.css'
import './assets/plugins/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')