let x=2;    //--------------------------declaring a variable x and assiging it 2
let y;
y=5;
let z;
z = x + y;  //---------------------------here '=' is assignment operator
z += 1; //-------------------------------unary addition....We can also use increment and decrement operator in Js.
console.log(z); //------------------------shows output in console


//FOR OPERATING ANY OPERATION, WE DO NOT NEED TO FOLLW ANY PRESIDENCY AND ASSOCIATIVITY AS LIKE IN C. AS LIKE MATHEMATICS, JS ALSO FOLLOWS "BDMAS" RULE....WHERE B=BRACKET, D=DIVISION,.....SO ON.....SO IN ORDER TO PERFORM ADDITION FIRST, WE NEED TO GIVE BRACKET TO IT AS LIKE WE DO IN MATHEMATICS.


//---------------------------calculating power in Js
let a;
a = x ** 2; //---------------------------here '**' is used as power. In Js, ** helps us to calculate the power.
console.log(a);

//-------------------------------adding string in Js

let b='5';  //-------------------here, 5 is not a integer. As it is given inside '', it is a string.
console.log(y+b);   //-------------the output will be 55 as the value of y is 5(integer value), but b is string with value 5. So, we can't add integer value and a string. so, Js changed value of y to string and adds two string.

let c='hello';
let d='world';
console.log(c+" "+d);