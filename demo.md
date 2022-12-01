[https://leetcode.cn/problems/palindrome-partitioning/description/](https://leetcode.cn/problems/palindrome-partitioning/description/)

[https://www.programmercarl.com/0131.分割回文串.html#javascript](https://www.programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html#javascript)

# 代码

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1e55704-5a16-4633-b679-61ebb13bddba/Untitled.png)

```jsx

    //回溯主体
    function backtraking(start) {
        //start的位置超出了字符串，这时候将切割的子串放入res中
        if (start >= s.length) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < s.length; i++) {
            //s为所要分割的字符串，其子串区间为[start,i]，左闭右闭
            if (isPalindrome(s, start, i) == false) continue;
            //.slice()是左闭右开区间，所以i+1
            path.push(s.slice(start, i + 1));
            backtraking(i + 1);
            path.pop();
        }
    }

    //初始化条件
    const res = [], path = [];
    //调用回溯函数
    backtraking(0);
    return res;

};

```

```jsx
var partition = function (s) {
    //判断是否为回文字符串
    function isPalindrome(s, l, r) {
        for (let i = l, j = r; i < j; i++, j--) {
            if (s[i] !== s[j]) return false;
        }
        return true;
    }

```