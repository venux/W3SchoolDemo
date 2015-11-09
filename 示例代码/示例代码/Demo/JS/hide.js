/**
 * Created by admin on 2015/10/15.
 * 通过JS操纵样式来隐藏元素e
 */
function hide(e,reflow){
    if(reflow){
        //隐藏元素e，其所占的空间也消失
        e.style.display="none"
    }
    else{
        //隐藏元素e，但保留所占空间
        e.style.visibility="hidden";
    }
}

/**
 * 通过设置CSS类来高亮显示e
 * @param e 元素
 */
function highlight(e){
    //简单定义或追加HTML类属性
    if(!e.className){
        e.className="hilite";
    }
    else{
        e.className+=" hilite";
    }
}

