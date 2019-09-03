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
