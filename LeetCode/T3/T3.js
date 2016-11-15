/*	思路：从字符串中的第一个字符开始，判断该字符在临时字符串中的位置
	*	如果不存在，则返回-1，如果存在则从重复字符的下一个开始继续循环判断直至到字符串结尾。
	*/
	var lengthOfLongest = function(s){
		var len = s.length;
		if(len<=1){return len;}
		
		var max = 0;
		var tempStr = "";
		var i = 0;
		while(i<len){
			var curChar = s.charAt(i);
			var index = tempStr.indexOf(curChar);

			if(index===-1){
				i++;
				tempStr +=curChar;
				max = Math.max(max,tempStr.length); 
				console.log(tempStr);
			}else{
				tempStr = tempStr.slice(index+1);
			}
		}
		return max;
	}
	var maxLength =  lengthOfLongest("abcdasadasadas");
	console.log(maxLength);
