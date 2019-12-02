"use strict";
/*类型推断 */
//从右侧向左侧推断
var a = 1;
//最佳通用类型
var b = [1, null];
var c = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
};
//从左侧向右侧推断
window.onkeydown = function (event) {
    console.log(event);
};
var foo = {};
foo.bar = 1;
var z = { a: 1, b: 2 };
var y = { a: 1, b: 2, c: 3 };
//y = z; //error c is missing in type 'X'
z = y;
function hof(handler) {
    return handler;
}
//1)参数个数
var handler1 = function (a) { };
hof(handler1);
var handler2 = function (a, b, c) { };
// hof(handler2)
//这里和上面说的接口兼容性理论正好相反
//2)可选参数
//3)返回值类型
var f1 = function () { return ({ name: 'luffy' }); };
var g1 = function () { return ({ name: 'luffy', age: 3 }); };
f1 = g1;
// g1 = f1
//summary:
//结构之前兼容：成员少的兼容成员多的
//函数之间兼容：参数多的兼容参数少的
// 创建保护区块
// instanceof in typeof 
