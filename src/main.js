import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
// import "@/utils/rem.js"
//打印
import Print from 'vue-print-nb'
Vue.use(Print);
/*element*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入样式
import {
	Button
	,Swipe
	,SwipeItem
	,Grid
	,GridItem
	,Lazyload
	,Row
	,Col
} from "vant"
Vue.use(Row).use(Col);
Vue.use(Button);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
