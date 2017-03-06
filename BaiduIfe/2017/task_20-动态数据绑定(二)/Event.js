class Event {
	constructor() {
		this.events = {};	
	}

	// 注册回调函数到相应的属性上
	on (attr, callback) {
		if (this.events[attr]) {
			this.events[attr].push(callback);
		} else {
			this.events[attr] = [callback];
		}
	}

	// 删除对应的回调函数
	off (attr) {
		for (let key in this.events) {
			if (this.events.hasOwnProperty(key) && key === attr) {
				delete this.events[key];
			}
		}
	}

	// 触发监听函数
	emit (attr, ...arg) {
		this.events[attr] && this.events[attr].forEach(function(item) {
			item(...arg);
		})
	}
}

export default Event