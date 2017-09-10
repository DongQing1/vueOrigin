define(['lib/vue','vm/home/home','lib/vue-router','vm/ticket/ticket','vm/play/play','vm/detail/detail','vm/pay/pay'],function(Vue,Home,VueRouter,Ticket,Play,Detail,Pay){
	//定义规则
	var routes=[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/ticket/:id',
			component:Ticket
		},
		{
			path:'/drift/:id',
			component:Play
		},
		{
			path:'/detail/:id',
			component:Detail
		},
		{
			path:'/pay/:id',
			component:Pay
		},
		{
			path:'*',
			redirect:'/home'
		}
	]
	//实例化路由对象
	var router = new VueRouter({
		routes:routes
	})
	//暴露接口
	return router;

})