function Observer(data) {
	this.data = data;
	this.iterator(data);
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

			this.convert(key, val);
		}
	}
};

oProto.convert = function (key, val) {
	Object.defineProperty(this.data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			console.log("你访问了" + key);
			return val;
		},

		set: function(newVal) {
			console.log("你设置了" + key + "为 " + newVal);
			// 没发生变化
			if (newVal === val) return;
			val = newVal;
		}
	})
};

let data = {
	user: {
		name: "suvllian",
		age: 20
	}
}

let app = new Observer(data);

console.log(app.data.user.name);