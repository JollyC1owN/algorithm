// 闭包
/*
* 1.闭包是在内部函数的内存存储的一个引用地址
* 2.该引用地址指向的内部函数使用变量所在的变量对象
* 3. 闭包不是之前延长局部变量的生命周期，它会延长整个外部函数的变量对象的生命周期
* 4. 浏览器为了性能优化将不使用的变量从变量对象中清除了。
*
* */


function fun() {
  var a = 123;
  var arr = [];
  for (var i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  function fun2() {
    console.log(a);
  }
  return fun2;
}

var fun2 = fun();

fun2();