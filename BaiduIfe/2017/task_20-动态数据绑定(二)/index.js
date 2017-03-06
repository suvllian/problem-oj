import Observer from './Observer'

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