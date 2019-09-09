/*类型推断 */
//从右侧向左侧推断
let a = 1
//最佳通用类型
let b = [1,null]
let c = (x=1)=>x+1
//从左侧向右侧推断
window.onkeydown = (event) => {
    console.log(event)
}

//类型断言 允许我们覆盖它原本的类型推断
interface Foo {
    bar:number
}
let foo = {} as Foo;
foo.bar = 1
//上面使用as的方式，容易遗漏bar属性，没有严格按照类型要求，应该一开始在定义的时候就说明类型
// let foo:Foo = {
//  bar:1
// }

//类型的兼容性问题
//类型x兼容类型y => y可以被赋值给x
//接口兼容性
interface X{
    a:any;
    b:any;
}
interface Y{
    a:any;
    b:any;
    c:any;
}
let z:X = {a:1,b:2}
let y:Y = {a:1,b:2,c:3}
//y = z; //error c is missing in type 'X'
z = y;
//鸭子理论 当一只鸟走起来像鸭子，叫起来像鸭子，就可以被称做鸭子 总结下就是成员少的会兼容成员多的
//函数兼容性 一般用在函数是参数的情况下
type Handler = (a:number,b:number)=> void
function hof(handler:Handler){
    return handler
}
//1)参数个数
let handler1 = (a:number) => {}
hof(handler1)
let handler2 = (a:number,b:number,c:number) => {}
// hof(handler2)
//这里和上面说的接口兼容性理论正好相反


//2)可选参数



//3)返回值类型
let f1 = () => ({name:'luffy'})
let g1 = () => ({name:'luffy',age:3})
f1 = g1
// g1 = f1

//summary:
//结构之前兼容：成员少的兼容成员多的
//函数之间兼容：参数多的兼容参数少的

// 创建保护区块
// instanceof in typeof 
//使用tsc 编译文件的时候，会默认忽略tsconfig.json的配置