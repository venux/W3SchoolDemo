/*
in运算符
*/

var data = [7, 8, 9];

//根据索引判断是否在data中，test1,test2为true;test3,test4为falst;
var test1 = "0" in data;
var test2 = 1 in data;
var test3 = 3 in data;
var test4 = 8 in data;

function intest() {
    alert(test1 + " " + test2 + " " + test3 + " " + test4);
}
