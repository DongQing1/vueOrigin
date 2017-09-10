define(['lib/vue','lib/vue-resource','css!./pay.css'],function(Vue){
	var Pay={
		template:"#tpl_pay",
		data:function(){
			return {
				data:[],
				num:1,
				name:'',
				nameCheck:false,
				tel:'',
				telCheck:false
			}		
		},
		created:function(){
			this.$http.get("data/pay.json").then(function(res){				
				if(res.data.errno === 0){
					this.data=res.data.data;
					console.log(res.data.data)
				}
			})
		},
		methods:{
			add: function() {
				this.num++;
			},
			reduce: function(item) {
				this.num--;
				if(this.num<1){
					this.num=1;
				}
			},
			checkName:function(){
				if(this.name){
					// console.log((/[\u4e00-\u9fa5]/.test(this.name)))
					if(!(/[\u4e00-\u9fa5]/.test(this.name))){
						this.nameCheck=true;
					}else{
						this.nameCheck=false;
					}
				}
			},
			checkTel:function(){
				// console.log(this.tel)
				if(this.tel){
					if(!(/^1\d{10}$/.test(this.tel))){
						this.telCheck=true;
					}else{
						this.telCheck=false;
					}
				}
			}
		}
	}
	return Pay;
})