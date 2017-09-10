define(['lib/vue','lib/vue-resource','css!./play.css'],function(Vue){
	var Play={
		template:"#tpl_play",
		data:function(){
			return {
				orders:[
					{ id: 'notes', text: '综合排序' },
					{ id: 'distance', text: '距离从近到远' },
					{ id: 'priceUp', text: '价格从低到高' },
					{ id: 'priceDown', text: '价格从高到低' }
				],
				list:[]
			}			
		},
		created:function(){
			this.$http.get("data/play.json").then(function(res){
				if(res.data.errno === 0){
					this.list = res.data.data.list;
				}
			})
		},
		methods:{
			listOrder:function(id){
				this.list.sort(function(a,b){
					if(id ==='priceUp'){
						return (a.price-b.price)
						console.log(a.price-b.price)
					}else if(id === 'priceDown'){
						return (b.price-a.price)
					}
					return b[id]-a[id];
				})
			}
		}
	}
	return Play;
})