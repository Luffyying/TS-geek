/*类  */
//ts中的类包含了es中的类，类中方法都是原型上的方法，但是属性都是实例上的属性
class Dog{
    constructor(name:string){
        this.name = name;
        // this.pri()
        this.pro()
    }
    // age?:string
    name:string
    //默认都是共有成员
    // public name:string
    run(){}
    //私有成员不能被继承，也不能被实例访问
    private pri(){
        console.log('-----')
    }
    //被保护成员不能在当前实例中调用，可以在子类中调用
    protected pro(){
        console.log('++')
    }
    readonly legs:number = 4
    static food:string = 'bones'
    

}
console.log(Dog.prototype)
let dog = new Dog('hauahua')
console.log(dog)
// dog.legs = 9
//继承
class Husky extends Dog{
    constructor(name:string,color:string){
        super(name)
        this.color = color
        // this.pro()
    }
    color:string
}
let h = new Husky('sss','pink')


//成员修饰符（对于js的扩展）

//private 如果给构造函数添加private,则表示既不能被实例化，也不能被继承
//protected 如果给构造函数添加protecdte,则表示不能被实例化，能被继承，表示基类
//readonly
//static 只能够通过类名类调用，可被继承


/*抽象类和多态 */
// 抽象类只能被继承 无法创建一个实例
abstract class Animal{
    eat(){
        console.log('eat');
    }
    abstract sleep():void
}
class Dog2 extends Animal{
    constructor(name:string){
        super()
        this.name = name
    }
    name:string
    sleep(){
        console.log('dog sleep')
    }
}
let d2 = new Dog2('www')
d2.sleep()
// let animal = new Animal()

//多态  函数名称相同，？？？？
class Cat extends Animal {
    sleep(){
        console.log('cat sleep')
    }
}
let cat = new Cat()
let animal:Animal[] = [d2,cat]
animal.forEach(i => {
    i.sleep()
})
class WorkFlow {
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}
new WorkFlow().step1().step2()

/*类实现接口（类和接口的关系） */
interface Human {
    name:string;
    eat():void;
    // new (name:string):void 构造函数
}
class Asian implements Human{
    constructor(name:string){
        this.name = name;
    }
    // private name:string
    name:string
    eat(){}
    sleep(){}
}
// 类实现接口的时候，要完全实现接口的参数，可以允许超过接口的定义范围（类属性多余接口）
//接口约束的范围:公有成员 和构造函数

interface Dog3 extends Human{
    run():void
}
interface Blue{
    cry():void
}
//接口也可以继承接口
interface Shidiqi extends Dog3,Blue{

}
let s :Shidiqi = {
    name:'',
    run(){},
    eat(){},
    cry(){}
}

class Auto{
    state = 1
    // private state2 = 0
}
//接口还可以继承类 抽象类的成员（私有、公有、受保护成员，没有方法）
interface AutoInterface extends Auto{}
class C implements AutoInterface{
    state = 1
}
class Bus extends Auto implements AutoInterface{

}
