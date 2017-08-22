// getElementsByClassName方法来获取元素，有一些兼容性问题，IE9以下的浏览器并不支持这个方法。以下是通过已有的DOM来实现getElementsByClassName的功能。
function getElementsByClassName(node,classname)
{
    if (node.getElementsByClassName)
        {
            //使用现有的方法
            return node.getElementsByClassName(classname);
        }
        else
        {
            var results = new Array();
            var elems = node.getElementsByTagName("*");
            for (var i=0;i<elems.length;i++)
                {
                    if (elems[i].classname.indexOf(classname) != -1)
                    {
                        results[results.length] = elems[i];
                    }
                }
                return results;
        }
}