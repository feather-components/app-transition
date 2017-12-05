import AppTransition from './app-transition';

let _installed = false;

export default {
	install(Vue){
		if(_installed) return;

		_installed = true;
		Vue.component('app-transition', AppTransition);
	},

	Component: AppTransition
};