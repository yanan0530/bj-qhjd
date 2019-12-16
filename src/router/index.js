import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
	routes: [{
		path: "/",
		component: () => import("@/views/index/index.vue"),
		name: "index",
		meta: {
			title: "首页"
		},
		children: [{
				path: "/print",
				component: () => import("@/views/index/PrintAdmin.vue"),
				name: "print",
				meta: {
					title: "打印"
				}
			},
			{
				path: "/print2",
				component: () => import("@/views/index/PrintAdmin2.vue"),
				name: "print2",
				meta: {
					title: "打印2"
				}
			},
			{
				path: "/user",
				component: () => import("@/views/index/UserAdmin.vue"),
				name: "user",
				meta: {
					title: "用户信息"
				}
			},
			{
				path: "/repeat",
				component: () => import("@/views/index/RepeatAdmin.vue"),
				name: "repeat",
				meta: {
					title: "重复信息"
				}
			}, {
				path: "/import",
				component: () => import("@/views/index/ImportAdmin.vue"),
				name: "import",
			}, {
				component: () => import("@/views/index/GoodsAdmin.vue"),
				path: "/goods",
				name: "cplist",
				meta: {
					title: "藏品展示"
				}
			}, {
				component: () => import("@/views/index/GoodsAdmin2.vue"),
				path: "/goods2",
				name: "cplist2",
				meta: {
					title: "藏品展示"
				}
			}, {
				component: () => import("@/views/index/ImportAdmin2.vue"),
				path: "/import2",
				name: "import2",
				meta: {
					title: "上传 新"
				}
			}
		]
	}]
})
