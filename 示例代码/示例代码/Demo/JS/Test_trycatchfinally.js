function trycatchfinallyTest(){
    try{
        var str = "测试finally返回！";
        throw new Error("抛出异常!");
    }
    catch (e) {
        alert(e.message);
    }
    finally {
        return str;
    }
}