import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import router from './router'
import moment from 'moment'
import mitt from 'mitt'

//criar a instância do pacote mitt
const emitter = mitt()


const Vue = createApp(App)

//configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade global estará disponivel para todas as instâncias de componentes dentro do app
Vue.config.globalProperties.emitter = emitter

Vue.use(Maska) //plugin
Vue.use(router) //adicionando as configurações de rotas a instância do Vue
Vue.config.globalProperties.$moment = moment //propriedade global de data
Vue.config.globalProperties.$moment.locale('pt-br')
Vue.mount('#app')
