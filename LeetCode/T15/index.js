let array = [-1, 0, 1, 2, -1, -4];

var threeSum = function(arr) {
	var rtn = [];
	if (arr.length < 3) {
		return rtn;
	}
	// 先排序
	arr = arr.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < arr.length - 2; i++) {
		if (arr[i] > 0) {
			return rtn;
		}
		if (i > 0 && arr[i] == arr[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = arr.length - 1; j < k;) {
			if (arr[i] + arr[j] + arr[k] === 0) {
				rtn.push([arr[i], arr[j], arr[k]]);
				j++;
				k--;
				while (j < k && arr[j] == arr[j - 1]) {
					j++;
				}
				while (j < k && arr[k] == arr[k + 1]) {
					k--;
				}
			} else if (arr[i] + arr[j] + arr[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};

console.log(threeSum(array));