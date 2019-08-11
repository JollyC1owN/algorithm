// 栈结构
/*
* 先进后出，后进先出
* */

// 数组实现栈结构
var arr = [];

for (var i = 0; i <5; i++) {
  arr.push(i);  // [0, 1, 2, 3, 4]
}

console.log(arr);


// for (var i = 0; i < 5; i++) {
//   arr.pop();
// }

// 数据实现队列
/*
* 队列特点：
*   1. 先进先出
*   2. 后进后出
*
* */
for (var i = 0; i < 5; i++) {
  arr.shift();
}

