function ListNode(val){
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1,l2){
	var lastNum,nums;
	var nowList = resList = new ListNode(-1);

	var numHandle = function(num){
		//相加可能大于10
		return [num % 10,Math.floor(num / 10)];
	}

	while(l1||l2||lastNum){
		nums = numHandle((l1?l1.val:0)+(l2?l2.val:0)+lastNum);
		nowList = nowList.next = new ListNode(nums[0]);
		lastNum = nums[1];
		if(l1) l1 = l1.next;
		if(l2) l2 = l2.next;
	}
	return resList.next;
}