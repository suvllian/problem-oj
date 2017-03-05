function Event() {
	this.events = {};
}

var eProto = Event.prototype;
// 注册回调函数到相应的属性上
eProto.on = function(attr, callback) {
	if (this.events[attr]) {
		this.events[attr].push(callback);
	} else {
		this.events[attr] = [callback];
	}
}
// 删除对应的回调函数
eProto.off = function(attr) {
	for (let key in this.events) {
		if (this.events.hasOwnProperty(key) && key === attr) {
			delete this.events[key];
		}
	}
}
// 触发监听函数
eProto.emit = function(attr, ...arg) {
	this.events[attr] && this.events[attr].forEach(function(item) {
		item(...arg);
	})
}


function Observer(data) {
	this.data = data;
	this.iterator(data);
	this.eventBus = new Event();
}

let oProto = Observer.prototype;

oProto.iterator = function(obj) {
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
};

oProto.setGetterAndSetter = function(key, val) {
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
};

oProto.$watch = function(key, fn){
	this.eventBus.on(key, fn);
}

let data = {
	age:20	
}

let app = new Observer(data);

app.$watch("age", function(oldVal, newVal){
	console.log("新年龄是 " + newVal);
});

app.data.age = {
	a:"aaa"
};
console.log(app.data.age);