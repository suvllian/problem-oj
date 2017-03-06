import Event from './Event'

class Observer {
	constructor() {
		this.data = data;
		this.iterator(data);
		this.eventBus = new Event();
	}

	iterator(obj) {
		let val;
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				val = obj[key];

				if (typeof val === 'object'){
					new Observer(val);
				}

				this.setGetterAndSetter(key, val);
			}
		}
	}

	setGetterAndSetter(key, val) {
		var $this = this;
		Object.defineProperty(this.data, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				console.log("你访问了" + key);
				return val;
			},

			set: function(newVal) {
				// 没发生变化
				if (newVal === val) return;	
				console.log("你设置了" + key + "为 " + newVal);
				$this.eventBus.emit(key, val, newVal);
				val = newVal;
				if(typeof newVal === 'object'){
			        new Observer(val);
			    }
			}
		})
	}

	$watch(key, fn){
		if ((typeof fn) !== 'function') { 
			console.log("请输入回调函数");
			return; }
		this.eventBus.on(key, fn);
	}

}

export default Observer