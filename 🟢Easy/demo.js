var removeDuplicates = function (s) {
  s = [...s];
  let top = -1; // 指向栈顶元素的下标
  for (let i = 0; i < s.length; i++) {
    if (top === -1 || s[top] !== s[i]) {
      // top === -1 即空栈
      top++;
      s[top] = s[i]; // 入栈
    } else {
      top--; // 推出栈
    }
  }
  s.length = top + 1; // 栈顶元素下标 + 1 为栈的长度

  return s.join("");
};

removeDuplicates("abbaca");
