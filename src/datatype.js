"use strict";
/*  基本类型  */
var bool = true;
var num = 123;
// bool = num;
//数组
var arr1 = [1, 2, 3];
// let arr2:Array<number> = [1,2,3,'4']
var arr2 = [1, 2, 3, '4'];
//元组(特殊的数组，规定了元素的类型和个数)
var tuple = [0, '1'];
//元组越界问题，可以添加，但是不能访问
// tuple.push(2)
// console.log(tuple)
// tuple[2]
//函数
var add = function (x, y) { return x + y; };
//通常函数返回值类型可以省略（推断）
//定义一个函数类型
var compute;
compute = function (a, b) { return a + b; };
//对象
var obj = { x: 1, y: 2 };
// obj.x = 3 不可以这样赋值，正确做法是下面的形式
var obj2 = { x: 1, y: 2 };
obj2.x = 90;
//symbol
var s1 = Symbol();
var s2 = Symbol();
//undefined ,null
var un = undefined;
var nu = null;
// un = 0 不允许,但是其他定义的类型可以
// num = undefined
num = null;
//如果使用严格的语法可以关闭掉"strictNullChecks": false,  若要通过检查可以使用联合类型
//void 操作符 返回undefined
var noReturn = function () { };
(function () {
    var undefined = 0;
    console.log(undefined);
})();
//any 和js相比就没有区别了（实现了和js的兼容）
var x;
//never 永远没有返回值的类型和死循环类型
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
/*  枚举类型  */
//枚举：一组有名字的常量集合
//数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Owner"] = 2] = "Owner";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
console.log(Role.Owner);
(function (Role) {
    Role[Role["Test"] = 4] = "Test";
    Role[Role["Like"] = 5] = "Like";
})(Role || (Role = {}));
//递增，但是仅限于初始化第一个属性
console.log(Role.Like);
//！！！ 枚举的实现原理：反向映射
// var Role;
// (function(Role){
//     Role[Role['name'] = 2] = 'name'
// })(Role || (Role = {}))
//字符串枚举不可反向映射
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60";
    Message["Fail"] = "\u5931\u8D25\u4E86";
})(Message || (Message = {}));
//异构枚举 （字符串枚举和数字枚举的混合）
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
//枚举成员是只读的
// Role.Developer = 0
var Char;
(function (Char) {
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */];
//枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
// e ===f不可比较 枚举类型不能比较，但是成员可以比较
var e1 = 1;
var e2 = 1;
function render(res) {
    res.data.forEach(function (value) {
        if (value.age) {
        }
        console.log(value.id);
    });
}
var result = {
    data: [{
            id: 1, name: 'test', age: 9
        }]
    //鸭子变形法(可以传入多余的参数)
};
render(result);
//可选属性 ?
//函数类型接口
var add2;
//上面二者等价
// type Add = (x:number,y:number) => number
//具体函数
var add4 = function (a, b) { return a + b; };
//为何要添加类型断言？因为let lib: Lib = () =>{}是错误的
function getLib() {
    var lib = (function () { console.log('hahah'); });
    lib.version = '1.0';
    lib.doSomething = function () { console.log('what is is'); };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
/*函数相关的知识点 */
function add5(x, y) {
    //可选参数要在必须参数之后
    return y ? x + y : x;
}
add5(1);
function add6(x, y, z, q) {
    if (y === void 0) { y = 9; }
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
console.log(add6(1, undefined, 5));
//当参数不确定的时候，必须参数后面的可以不传，前面的要传undefined
function add7(x) {
    var res = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        res[_i - 1] = arguments[_i];
    }
    return x + res.reduce(function (pre, cur) { return pre + cur; });
}
console.log(add7(1, 2, 3, 4, 5));
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    // return 9
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
;
console.log(add8(1, 2, 3));
console.log(add8('a', 'b', 'c'));
