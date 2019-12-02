"use strict";
/* 泛型 ----不预先确定的数据类型，具体的类型在使用的时候才能确定
 实现方式：函数重载

*/
/*泛型函数与泛型接口 */
//下面是一个打印函数
// function log(value:string):string{
//     console.log(value);
//     return value;
// }
// console.log('hello ts')
//使用函数重载来实现
// function log(value:string):string;
// function log(value:string[]):string[];
// function log(value:any){
//     console.log(value);
//     return value;
// }
// console.log(log(['1,2,3,4']))
//使用联合类型来实现
// function log(value:string | string[]):string | string[]{
//     console.log(value);
//     return value;
// }
//使用any类型 （但是丢失来一些信息）
// function log(value:any){
//     console.log(value);
//     return value;
// }
//下面使用泛型来改造log函数
function log(value) {
    console.log(value);
    return value;
}
log(['1', '2']);
log(['1', '2']); //js 的类型推断 较推荐的方式
log(4);
// let myLog:Log<number> = log
// myLog(1)
// let myLog:Log = log
// myLog('1')
/*泛型类与泛型约束 */
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Log;
}());
var log1 = new Log();
log1.run(1);
// log1.run('1')
var log2 = new Log();
log2.run('2');
function log3(value) {
    console.log(value, value.length);
    //否则会提示没有这个类型
    return value;
}
log3([]);
log3('');
log3({ length: 8 });
