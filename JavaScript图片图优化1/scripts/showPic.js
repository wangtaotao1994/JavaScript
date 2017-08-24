// function showPic(whichpic)                                          //图片显示
// {
//     var source = whichpic.getAttribute("href");                     //获取点击文字的链接
//     var placeholder = document.getElementById("placeholder");       //获取图片元素节点
//     placeholder.setAttribute("src",source);                         //将占位图片的链接改成对应点击文字的图片链接
//     var text = whichpic.getAttribute("title");                      //获取点击文字的title属性
//     var description = document.getElementById("description");       //获取文字描述的元素节点
//     description.firstChild.nodeValue = text;                        //将描述的文本节点改成对应点击文字的title属性值
// }

//不要做太多的假设
// function showPic(whichpic)
// {
//     if(!document.getElementById("placeholder")) return false;           //检测id值为placeholder的元素是否存在
//     var source = whichpic.getAttribute("href");
//     var placeholder = document.getElementById("placeholder");
//     placeholder.setAttribute("src",source);
//     if(document.getElementById("description"))                          //检测id为description的元素是否存在，如果存在执行下面代码
//     {
//         var text = whichpic.getAttribute("title");
//         var description = document.getElementById("description");
//         description.firstChild.nodeValue = text; 
//     }
//     return true;
// } 

//优化
function showPic(whichpic)
{
    if(!document.getElementById("placeholder")) return false;           
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;                       //检测placeholder的元素为图片
    placeholder.setAttribute("src",source);
    if(document.getElementById("description"))                          
    {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";    //检测title属性是否存在，如果存在的话将title的属性值赋值给text，否则将一个空字符赋值给text
        var description = document.getElementById("description");
        if (description.firstChild.nodeType === 3)                          //检测该节点是否为文本节点
            {
                description.firstChild.nodeValue = text;
            } 
    }
    return true;
}
//*******************************************************************************************************************

function prepareGallery()                                           //按钮事件函数
{
    if (!document.getElementsByTagName) return false;               //检测DOM方法是否可用
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    
    var gallery = document.getElementById("imagegallery");          //获取ul元素节点
    var links = gallery.getElementsByTagName("a");                  //获取a元素节点
    for (var i=0;i<links.length;i++)                                //历遍a元素，并执行对应函数
        {
            links[i].onclick = function()
            {
                // showPic(this);
                // return false;
                
                //平稳退化
                return !showPic(this);
            };
        }
}

function addLoadEvent(func)                                         //事件加载函数
{
    var oldonload = window.onload;                                  //将现有的window.onload事件处理函数的值存入变量oldonload
    if (window.onload != "function")                                //检测window.onload是否有绑定函数
        {
            window.onload = func;                                   //如果没有，就将新函数添加到window.onload
        }
        else
        {
            window.onload = function()                              //如果有，则将新函数追加到现有指令的末尾
            {
                oldonload();
                func();
            };
        }
}

addLoadEvent(prepareGallery);

