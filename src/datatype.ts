/*  基本类型  */

let bool : boolean = true
let num :number | null = 123
// bool = num;

//数组
let arr1: number[] = [1,2,3]
// let arr2:Array<number> = [1,2,3,'4']
let arr2:Array<number | string> = [1,2,3,'4']

//元组(特殊的数组，规定了元素的类型和个数)
let tuple: [number,string] = [0,'1']
//元组越界问题，可以添加，但是不能访问
// tuple.push(2)
// console.log(tuple)
// tuple[2]

//函数
let add = (x:number,y:number):number => x+y
//通常函数返回值类型可以省略（推断）

//定义一个函数类型
let compute:(x:number,y:number) => number

compute = (a,b)=> a+b

//对象
let obj:object = {x:1,y:2}
// obj.x = 3 不可以这样赋值，正确做法是下面的形式
let obj2:{x:number,y:number} = {x:1,y:2}
obj2.x = 90
//symbol
let s1:symbol = Symbol()
let s2 = Symbol()

//undefined ,null
let un:undefined = undefined
let nu:null = null
// un = 0 不允许,但是其他定义的类型可以
// num = undefined
num = null
//如果使用严格的语法可以关闭掉"strictNullChecks": false,  若要通过检查可以使用联合类型


//void 操作符 返回undefined
let noReturn = ()=>{}
(function(){
    var undefined = 0;
    console.log(undefined);
})()

//any 和js相比就没有区别了（实现了和js的兼容）
let x

//never 永远没有返回值的类型和死循环类型
let error = () =>{
    throw new Error('error');
}
let endless = ()=>{
    while(true) {}
}

/*  枚举类型  */
//枚举：一组有名字的常量集合
//数字枚举
enum Role{
    Reporter,//0
    Developer,//1
    Owner,//2
    Guest
}
console.log(Role.Owner)

enum Role{
    Test = 4,
    Like,
}
//递增，但是仅限于初始化第一个属性
console.log(Role.Like)
//！！！ 枚举的实现原理：反向映射
// var Role;
// (function(Role){
//     Role[Role['name'] = 2] = 'name'
// })(Role || (Role = {}))


//字符串枚举不可反向映射
enum Message {
    Success = '恭喜你',
    Fail = '失败了'
}
//异构枚举 （字符串枚举和数字枚举的混合）
enum Answer {
    N,
    Y = 'yes'
}

//枚举成员是只读的
// Role.Developer = 0
enum Char {

}
//常量枚举 编译后移除
const enum Month{
    Jan,
    Feb
}
let month = [Month.Jan,Month.Feb]

//枚举类型
enum E {a,b}
enum F {a = 0,b =1}
enum G {a = 'apple',b = 'banana'}

let e:E = 3
let f:F = 3
// e ===f不可比较 枚举类型不能比较，但是成员可以比较
let e1 :E.a  = 1
let e2 :E.a = 1
// e1 ===e2


/*接口 */
//对象类型接口
interface List{
    //只读属性
    readonly id:number;
    name:string;
    age?:number;
}
interface Result{
    data:List[]
}
function render(res:Result){
    res.data.forEach(value =>{
        if(value.age){

        }
        console.log(value.id);
    })
}
let result = {
    data:[{
        id:1,name:'test',age:9
    }]
    //鸭子变形法(可以传入多余的参数)
}
render(result)
//可选属性 ?
//函数类型接口
let add2 :(x:number,y:number) => number
interface Add{
    (x:number,y:number): number
}
//上面二者等价

// type Add = (x:number,y:number) => number
//具体函数
let add4 :Add = (a,b) => a+b

//混合接口（多用于定义类库）
interface Lib{
    ():void;
    version:string;
    doSomething():void
}
//为何要添加类型断言？因为let lib: Lib = () =>{}是错误的

function getLib(){
    let lib: Lib = (() =>{console.log('hahah')}) as Lib
    lib.version = '1.0'
    lib.doSomething = () =>{console.log('what is is')}
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib()


/*函数相关的知识点 */
function add5(x:number,y?:number){
    //可选参数要在必须参数之后
    return y?x+y:x;
}
add5(1)
function add6(x:number,y =9,z:number,q =1){
    return x+y+z+q
}
console.log(add6(1,undefined,5));
//当参数不确定的时候，必须参数后面的可以不传，前面的要传undefined

function add7(x:number,...res:number[]){
    return x+res.reduce((pre,cur)=>pre+cur)
}
console.log(add7(1,2,3,4,5))

//函数重载
//下面分别是两个函数声明的列表
function add8(...rest:number[]):number;
function add8(...rest:string[]):string;
function add8(...rest:any[]):any{
    // return 9
    let first = rest[0]
    if(typeof first ==='string'){
        return rest.join('')
    }
    if(typeof first ==='number'){
        return rest.reduce((pre,cur)=>pre+cur)
    }
};
console.log(add8(1,2,3));
console.log(add8('a','b','c'));