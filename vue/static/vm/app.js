define(['lib/vue', 'lib/vue-router','lib/vue-resource','lib/mobile-swipe','router/router','vm/home/home','vm/ticket/ticket','vm/play/play','vm/detail/detail','vm/pay/pay','css!reset.css'],function(Vue, VueRouter,VueResource,Swipe,router,Home,Ticket,Play,Detail,Pay){
	//创建vue实例化对象
	Vue.use(VueRouter);
	Vue.use(VueResource);
	var app = new Vue({
		el:'#app',
		//注册路由
		router:router,
		data:{

		}

	})
	return app;
})