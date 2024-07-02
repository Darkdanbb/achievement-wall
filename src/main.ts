import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    createApp(App).component(key, component)
}
createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(vue3TreeOrg)
    .mount('#app')
