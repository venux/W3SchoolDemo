/*
逻辑表达式
返回值为计算的结果值，而不一定是true或false
*/

function logicTest() {
    var obj = { x: 1 };
    var nullobj = null;

    var test1 = obj && obj.x;//返回1
    var test2 = nullobj && nullobj.test;//nullobj无test属性，而前半部分为null，计算为false所以不会执行后半部分判断

    alert(test1 + " " + test2);
}