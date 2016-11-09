#include<vector>
#include<map>
#include<iostream>
using namespace std;


//C语言暴力求解
int* twoSum(int* nums, int numsSize, int target) {
	int i;
	int j;
	static int num[2];
	for (i = 0; i<numsSize; i++) {
		for (j = i + 1; j<numsSize; j++) {
			if (nums[i] + nums[j] == target) {
				num[0] = i;
				num[1] = j;
			}
		}
	}
	return num;
}

//C++哈希表求解
class Solution {
public:
	vector<int> twoSum(vector<int>& nums, int target) {
		vector<int> result;
		map<int, int> HashMap;
		if (nums.size() < 2)
		{
			return result;
		}
		//建立哈希表
		for (int i = 0; i < nums.size(); i++)
		{
			HashMap[nums[i]] = i;
		}

		map<int, int>::iterator it;

		for (int i = 0; i < nums.size(); i++)
		{
			if ((it = HashMap.find(target - nums[i])) != HashMap.end())
			{
				if (i == it->second)
				{
					continue;
				}
				result.push_back(i);
				result.push_back(it->second);
				return result;
			}
		}
		return result;
	}
};
int main()
{
	int nums[] = {2, 7, 11, 15 };
	int target = 9;
	twoSum(nums, 4, 13);
	return 0;
}
