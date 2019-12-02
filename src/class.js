"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*类  */
//ts中的类包含了es中的类，类中方法都是原型上的方法，但是属性都是实例上的属性
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.legs = 4;
        this.name = name;
        // this.pri()
        this.pro();
    }
    //默认都是共有成员
    // public name:string
    Dog.prototype.run = function () { };
    //私有成员不能被继承，也不能被实例访问
    Dog.prototype.pri = function () {
        console.log('-----');
    };
    //被保护成员不能在当前实例中调用，可以在子类中调用
    Dog.prototype.pro = function () {
        console.log('++');
    };
    Dog.food = 'bones';
    return Dog;
}());
console.log(Dog.prototype);
var dog = new Dog('hauahua');
console.log(dog);
// dog.legs = 9
//继承
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
        // this.pro()
    }
    return Husky;
}(Dog));
var h = new Husky('sss', 'pink');
//成员修饰符（对于js的扩展）
//private 如果给构造函数添加private,则表示既不能被实例化，也不能被继承
//protected 如果给构造函数添加protecdte,则表示不能被实例化，能被继承，表示基类
//readonly
//static 只能够通过类名类调用，可被继承
/*抽象类和多态 */
// 抽象类只能被继承 无法创建一个实例
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog2.prototype.sleep = function () {
        console.log('dog sleep');
    };
    return Dog2;
}(Animal));
var d2 = new Dog2('www');
d2.sleep();
// let animal = new Animal()
//多态  函数名称相同，？？？？
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('cat sleep');
    };
    return Cat;
}(Animal));
var cat = new Cat();
var animal = [d2, cat];
animal.forEach(function (i) {
    i.sleep();
});
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2();
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var s = {
    name: '',
    run: function () { },
    eat: function () { },
    cry: function () { }
};
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        // private state2 = 0
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 1;
    }
    return C;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
