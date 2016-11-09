//哈希表求解
const twoHashSum = (nums, target) => {
	let hashTable = {};
	for(let i=0; i<nums.length; i++){
		let num   = nums[i];
		let index = hashTable[target-num];
		if(index !== undefined) return [index, i]
		hashTable[num] = i;
	}
};
//暴利求解
var twoSum = function(nums, target) {
	var result = new Array();
	for(var i = 0;i<nums.length;i++){
		for(var j=i+1;j<nums.length;j++){
			if((nums[i]+nums[j])==target&&i!=j)
			{
				result.push(i,j);
			}
		}
	}
	console.log(result);
	return result;
};

var nums = new Array();
nums.push(2,7,11,15);
console.log(nums);

twoSum(nums,13);
twoHashSum(nums,13);
