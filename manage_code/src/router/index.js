	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import yonghu from '@/views/yonghu/list'
	import syslog from '@/views/syslog/list'
	import gonggaoxinxi from '@/views/gonggaoxinxi/list'
	import yonghuCenter from '@/views/yonghu/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/yonghuCenter',
			name: '用户个人中心',
			component: yonghuCenter
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/syslog',
			name: '操作日志',
			component: syslog
		}
		,{
			path: '/gonggaoxinxi',
			name: '公告信息',
			component: gonggaoxinxi
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
