//创建元素节点
// window.onload = function()                          
// {
//     var para = document.createElement("p");         //创建元素节点p，并将其赋值给para
//     var info =" nodeName: ";                        
//     info += para.nodeName;                          //返回元素节点的名字
//     info += " nodeType: ";
//     info += para.nodeType;                          //返回元素节点的节点类型
//     alert(info);
// };  
//***********************************************************

//将新创建的节点插入文档的节点树
window.onload = function()                          
{
    var para = document.createElement("p");        
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);                              //将创建的新节点p插入div
    var txt = document.createTextNode("Hello world!");      //创建文本节点
    para.appendChild(txt);                                  //将文本节点加入到元素节点中
};  