"use strict";
function usestrictTest() {
    try {
        //是否支持严格模式
        var hasStrictModel = this === undefined;        
        alert(hasStrictModel.toString());

        var v = 0;
        var v = 0;

        test = "test";
    }
    catch (e) {
        alert(e.message);
    }
}