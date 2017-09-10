define(['lib/vue','lib/vue-resource','css!./ticket.css'],function(Vue){
	var Ticket={
		template:"#tpl_ticket",
		data:function(){
			return {
				banners:[
					{url:'1.jpg'},
					{url:'2.jpg'},
					{url:'3.jpg'},
					{url:'4.jpg'},
					{url:'5.jpg'}
				],
				theme:[],
				list:[]
			}
		},
		created:function(){
			console.log(this.$route)
			this.$http.get("data/ticket.json").then(function(res){
				// console.log(res)
				if(res.data.errno === 0){
					this.theme=res.data.data.theme;
					this.list=res.data.data.list;
					var myswipe = new Swipe("#ticket",{
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
	return Ticket;
})