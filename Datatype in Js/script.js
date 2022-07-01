//------------basically to declare string in Js, we use ''  OR  "".
let x='hel\'lo';    //--------to use single quote inside single quote we use backslash(\) before sigle quote as shown here.
console.log(x);
//BASICALLY THERE ARE INTEGER AND STRING. IN INTEGER, WE CAN PUT NEG VALUE OR FRACTIONAL VALUE.

//-----In js, we can change the data type of variable as shown below. At first, x was a string with value hel'lo and here below we have assigned the value of x in integer type.So, this way we can change the data type of any variable in JS.
x=5;
console.log(x);



//BOOLEN
//----There is another data type called BOOLEN data type. BOOLEN either reurns true or false according to the condition. BoOLEN is basically used in conditional statement.
let y=2>3;  //----we have assigned 2>3 condition to y.So 2>3 is a false condition. So hence, y will store false.
console.log(y);
y=3>2;  //-----but here if we agained assigned y=3>2 then it will give output TRUE as 3>2 is a true statement.
console.log(y);



//ARRAY
//Araay is also a data type in JS. Array is used to store multiple values in a single variable.
let z=["Ram","Shyam","Hari"];


//OBJECT
//OBJECT is also a data type in JS. In js, object is also used to store multiple datas in a single varible.
let student = {name:"Ram",age:19};

//UNDEFINED
//in Js, undefined is also a data type. When we declare variable in Js, but do not give it any value then the variable holds no value and it is hence undefined.for eg;
let nike;
console.log(nike);  //----------the output will be undefined as we havent assigned any value to the variable called nike.
nike = "";  //-----but here by giving double quote i have assigned a string value to the variable.so the data type of nike is now string.
console.log(nike);  //-----the output will be nothing as i havent written anything inside double quote.




//---------------------------------------typeof OPERATOR------------------------------------------------------//

//type of operator in js helps you to identify the type of given content or variable.for eg;
y= typeof 10;   //----typeof operator will now give the type of 10. As 10 is a integer value, it will show number which is stored in y.
console.log(y); //----the output will be number.

//2nd example
x="Ram";
console.log(typeof x);  //------the output will be string as x holds string value.


//-------------------template literals in JS-------------------------//
x='random text';
console.log(x); //-----the output will be random text. We already know this.

console.log("hello " + x);   //------here also output will be hello random text. I have used + coz two string in Js are added by using +

//BUT

console.log("hello + x");   //-----the output wont be hello random text. Rather outout will be hello + x itself as we have enclosed them in doubke quote brackets.
//So in order ti print string inside double or single quote brackets, we use template literals in Js. Template literals wont work with double or single quote. So, we have to use backtick (`) symbol as shown below.
console.log(`Hello ${x}`);  //-----${} is the template literal in Js which will only work if we use blacktick. As shown, we wont ave to use + in between hello and template literal.