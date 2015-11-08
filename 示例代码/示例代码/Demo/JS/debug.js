/**
 * Created by admin on 2015/10/15.
 * 在document中的一个指定区域输出调试信息，如果不存在该区域，则创建
 */
function debug(msg) { 
    //通过查看HTML元素id属性来查找文档的调试部分
    var log=document.getElementById("debuglog");

    //如果元素不存在，创建
    if(!log){
        //创建一个新的DIV
        log=document.createElement("div");
        //给这个元素HTML ID赋值
        log.id="debuglog";
        //定义初始内容
        log.innerHTML="<h1>Debug Log</h1>";
        //将其添加到文档末尾
        document.body.appendChild(log);
    }

    //创建<pre>标签
    var pre=document.createElement("pre");
    //将msc包装到一个文本节点中
    var text=document.createTextNode(msg);

    //将文本添加到<pre>
    pre.appendChild(text);
    //将<pre>添加到log
    log.appendChild(pre);
}
