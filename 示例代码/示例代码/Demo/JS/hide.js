/**
 * Created by admin on 2015/10/15.
 * ͨ��JS������ʽ������Ԫ��e
 */
function hide(e,reflow){
    if(reflow){
        //����Ԫ��e������ռ�Ŀռ�Ҳ��ʧ
        e.style.display="none"
    }
    else{
        //����Ԫ��e����������ռ�ռ�
        e.style.visibility="hidden";
    }
}

/**
 * ͨ������CSS����������ʾe
 * @param e Ԫ��
 */
function highlight(e){
    //�򵥶����׷��HTML������
    if(!e.className){
        e.className="hilite";
    }
    else{
        e.className+=" hilite";
    }
}

