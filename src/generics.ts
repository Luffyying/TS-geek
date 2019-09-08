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
function log<T>(value:T):T{
    console.log(value);
    return value;
}
log<string[]>(['1','2'])
log(['1','2'])//js 的类型推断 较推荐的方式
log(4)
//不仅可以使用泛型来定义函数,还可以使用泛型来定义一个函数类型
// type Log = <T>(value:T) => T
// // let myLog:Log = log;
// let myLog:Log = function log<T>(value:T):T{return value};
// myLog('sdfsd');

// interface Log {
//     <T>(value:T): T
// }
interface Log<T = string>{
    (value:T): T
}
// let myLog:Log<number> = log
// myLog(1)
// let myLog:Log = log
// myLog('1')


/*泛型类与泛型约束 */
class Log<T>{
    run(value:T){
        console.log(value)
        return value;
    }
    //泛型类，不能约束类的静态成员
    // static test(value:T){}
}
let log1 = new Log<number>()
log1.run(1)
// log1.run('1')
let log2 = new Log()
log2.run('2')


//泛型约束
interface Length{
    length:number
}
function log3<T extends Length>(value:T):T{
    console.log(value,value.length)
    //否则会提示没有这个类型
    return value
}
log3([])
log3('')
log3({length:8})
