<template>
	<transition :name="name">
		<keep-alive>
			<router-view class="app-transition-router"></router-view>
		</keep-alive>
    </transition>
</template>


<style>
	.app-transition-router{
	    position: absolute;
	    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
	    transition: all .5s cubic-bezier(.55, 0, .1, 1);
	}

	.app-transition-left-enter{
	    -webkit-transform: translate(100%, 0);
	    transform: translate(100%, 0);
	}

	.app-transition-left-leave-active{
	    -webkit-transform: translate(-30%, 0);
	    transform: translate(-30%, 0);
	}

	.app-transition-right-enter{
	    -webkit-transform: translate(-30%, 0);
	    transform: translate(-30%, 0);
	    z-index: 10 !important;
	}

	.app-transition-right-leave-active{
	    -webkit-transform: translate(100%, 0);
	    transform: translate(100%, 0);
	}
</style>

<script>
	import Router from 'vue-router';

	let init = Router.prototype.init;

	Router.prototype.init = function(...args){
		let history = this.history;

		['push', 'replace'].map((method) => {
			let fn = history[method];

			history[method] = function(...args){
				if(typeof args[0] == 'object'){
	                let query = args[0].query || {};
	                query.timestamp = Date.now();
	                args[0].query = query;
	            }else{
	                args[0] += '?timestamp=' + Date.now();
	            }

	            fn.apply(this, args);
			};
		});

		init.apply(this, args);
	};

	export default {
		name: 'app-transition',

		data(){
			return {
				name: 'fade'
			};
		},

		mounted(){
			this.inited = false;
		},

		watch: {
			'$route'(to, from){
	            var ft = from.query.timestamp || 0, tt = to.query.timestamp || 0;

	            if(!this.inited){
	                this.inited = true;
	                this.name = 'fade';
	            }else{
	                this.name = tt > ft ? 'app-transition-left' : 'app-transition-right';
	            }
	        }
		}
	}
</script>