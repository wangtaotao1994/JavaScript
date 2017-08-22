// 注释

// 这是一个单行注释
/*这是一个
多行注释*/

//在JavaScript中，那些字符对对可能出现在正则表达式字面量里，所以块注释对于被注释的代码块来说是不安全的。例如：
/* 
    var rm_a = /a*/.match(s);
*/
// *******************************************

// 变量

var name;           //声明一个变量

var name,age;       //同时声明多个变量
name = "Wilton";    //将值赋值给变量
age = 24;       

// 以上代码等价于
var name = "wilton";
var age = 24;

var name = "Wilton",age = 24;
//*********************************************

// 数据类型
// JavaScript是一种弱类型语言，程序员可以在任何阶段改变变量的数据类型


// 字符串
var name = "Wilton";
var name = 'Wilton';

var mood ="don't ask";
var mood ='don\'t ask';                 //利用反斜杠对字符进行转义
var height = "about 5'10\" tall";


// 数值
// JavaScript只有一个数据类型。它在内部被表示为64位的浮点数。
var age = 20.5;
var temperature = -20;
var temperatyre = -20.3333333;


// 布尔型
var sleeping = true;
var married = false;  


// 数组
var beatles = Array();          //声明一个数组
var beatles = [];

var beatles = Array(4);         //声明一个数组，长度为4
beatles[0] = "John";            //填充beatles数组
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

//以上代码等价于
var beatles = Array("John","Paul","George","Ringo");
var beatles = ["John","Paul","Georgn","Ringo"];

// 一个数组可以包含多种数据类型
var lennon = ["John",1940,false]
var beatles = [];
beatles[0] = lennon;                //数组可以包含其他数组
// *******************************************

// 对象
// 对象也是使用一个名字表示一组值。对象的每个值都是对象的一个属性。

var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;

var lennon = {name:"John",year:1940,living:false;};






