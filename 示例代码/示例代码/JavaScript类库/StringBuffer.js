function StringBuffer() {
    this._strings_ = new Array();

    //添加字符方法
    StringBuffer.prototype.Append = function (str) {
        this._strings_.push(str);
    }

    //输出字符方法
    StringBuffer.prototype.ToString = function () {
        return this._strings_.join("");
    }
}

/*用法示例*/
function testStringBuffer() {
    var stringBuffer = new StringBuffer();

    stringBuffer.Append("test");
    stringBuffer.Append("test");
    stringBuffer.Append("test");

    alert(stringBuffer.ToString());
}