/**
创建对象的几种方式：
1.对象直接量
2.new创建
*/

//对象直接量
var obj1 = {
    x: 0,
    y: 0
};

//new创建对象
var obj2 = new Object2();

function Object2() {
    var x = 0;
    var y = 0;

    alert(this.prototype)
}

//原型创建
var obj3 = Object.create({
    x: 1,
    y: 3
});

//没有原型的新对象，不继承任何属性和方法，包括toString()。
var nullobj = Object.create(null);

//普通空对象
var emptyobj = Object.create(Object.prototype);

//通过原型继承创建一个新对象
function inherit(obj) {
    if (obj == null)
        throw new TypeError("原型对象不允许为空！");

    //如果Object.create存在
    if (Object.create)
        return Object.create(obj);

    var objType = typeof obj;//原型的类型

    if (objType !== "object" && objType !== "function")
        throw TypeError("原型对象判断出错！");

    //1.定义一个空构造函数
    function SonClass() {

    }

    //2.将原型属性设置为obj
    SonClass.prototype = obj;

    //3.返回继承的对象
    return new SonClass();
}