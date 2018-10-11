## Container With Most Water  

### Questions

### Solutions

### Answers

``` python
class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        maxarea = 0
        left = 0
        right = len(height) - 1

        while(left < right):
            maxarea = max(maxarea, min(height[left], height[right]) * (right - left))

            if (height[left] < height[right]):
                left += 1
            else:
                right -= 1

        return maxarea

solution = Solution()
print solution.maxArea([1,8,6,2,5,4,8,3,7])
# 49
```