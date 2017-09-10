//首页
define(['lib/vue','lib/vue-resource','css!./home.css'],function(Vue){
	var Home={
		template:'#tpl_home',
		data:function(){
			return{
				banners:[
					{url:'01.jpg'},
					{url:'02.jpg'},
					{url:'03.jpg'},
					{url:'04.jpg'},
					{url:'05.jpg'}
				],
				bigFirst:[],
				bigSecond:[],
				bigThird:[],
				bigFourth:[],
				smallIcon:[],
				huichang:[],
				ad:[],
				list:[],
				// detail:[],
				chooseId:1
			}
		},
		computde:{
		},
		methods:{
			listOrder:function(id){
				this.chooseId=id;
			}
		},
		created:function(){
			this.$http.get('data/home.json').then(function(res) {
				console.log(res)
				// 请求成功，存储数据
				if (res.data.errno === 0) {
					this.bigFirst = res.data.data.bigFirst;
					this.bigSecond = res.data.data.bigSecond;
					this.bigThird = res.data.data.bigThird;
					this.bigFourth = res.data.data.bigFourth;
					this.smallIcon=res.data.data.smallIcon;
					this.huichang=res.data.data.huichang;
					this.ad=res.data.data.ad;
					this.list=res.data.data.list;
					// this.detail=this.list.detail;
					// console.log(this.detail)
					var myswipe = new Swipe("#home",{
        				auto:true,
        				speed:3500,
        				swipeEnd:function (index,length) {
        				    // console.log(index,length)
        				}
    				})
    				myswipe.init();
				}
			})
		}
	}
	return Home;
})