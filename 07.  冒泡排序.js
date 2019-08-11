// 冒泡排序：
/*
* 从数组的第一项开始与后一项去比较，如果发现前者比后者大(小)， 交换位置
* 每一轮比较会找出一个最大的或者最小的元素，并且摆放在最后(前)
* 下一轮比较较上一轮少一个元素
*
*
* */


var arr = [3,6,2,1,5,7,4]


function mpSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {// 比较的轮数
    for (var j = 0; j < arr.length - i - 1; j++) {// 比较的元素
      if(arr[j] > arr[j + 1]){
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  
  return arr;
}

console.log(mpSort(arr));