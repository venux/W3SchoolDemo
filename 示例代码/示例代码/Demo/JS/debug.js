/**
 * Created by admin on 2015/10/15.
 * ��document�е�һ��ָ���������������Ϣ����������ڸ������򴴽�
 */
function debug(msg) { 
    //ͨ���鿴HTMLԪ��id�����������ĵ��ĵ��Բ���
    var log=document.getElementById("debuglog");

    //���Ԫ�ز����ڣ�����
    if(!log){
        //����һ���µ�DIV
        log=document.createElement("div");
        //�����Ԫ��HTML ID��ֵ
        log.id="debuglog";
        //�����ʼ����
        log.innerHTML="<h1>Debug Log</h1>";
        //������ӵ��ĵ�ĩβ
        document.body.appendChild(log);
    }

    //����<pre>��ǩ
    var pre=document.createElement("pre");
    //��msc��װ��һ���ı��ڵ���
    var text=document.createTextNode(msg);

    //���ı���ӵ�<pre>
    pre.appendChild(text);
    //��<pre>��ӵ�log
    log.appendChild(pre);
}
