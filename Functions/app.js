// function square (num){
//     num *= num;
//     return num;
// }
// console.log(square(5));

// ---------------------------------------------------------------------------------

// function square (num){
//     num *= num;
//     return num;
// }

// var squ = square(5)
// console.log('number square = ' + squ);

// ---------------------------------------------------------------------------------

// You can take input from user

// function square (num){
//     num *= num;
//     return num;
// }

// var squ = prompt('enter a number')
// console.log('number square = ' + square(squ));

// ---------------------------------------------------------------------------------

// function text(i){
//     let text_t = prompt('Please enter your text');
//     let piece = prompt('Please enter you iteration number');
//     for(var i = 1; i <= piece; i++){
//         console.log(text_t)
//     }
// }

// ---------------------------------------------------------------------------------

// const students = ['john', 'jessica', 'marcos', 'emre']

// function greet(student){
//     console.log(`Welcome ${student}!`);
// }

// for(let i = 0; i < students.length; i++){
//     greet(students[i]);
// }
    
// ---------------------------------------------------------------------------------

// const students = ['john', 'jessica', 'marcos', 'emre']

// function greet(student){
//     console.log(`Welcome ${student}!`);
// }

// function greetAll(who){
//     for(let i = 0; i < who.length; i++){
//     greet(who[i]);
// }
// }

// greetAll(students)

// ---------------------------------------------------------------------------------

// function multiply(num1, num2){
//     if(isNaN(num1) | isNaN(num2)) return 'please enter number';
//     return num1 * num2
// }

// let result = multiply(`5`,5)
// console.log('Result :>>', result);

// ---------------------------------------------------------------------------------

// function divide(dividend, divider){
//     if(divider == 0){
//         return -1;
//     }
//     let quatient = dividend / divider;
//     let reminder = dividend % divider;
//     let result = [quatient, reminder];
//     return result;
// }
 
// let res = divide(9,7);
// console.log('result ::>', res);

// ---------------------------------------------------------------------------------

// function divide(dividend, divider){    
//     if(divider == 0){
//         return -1;
//     }else{
//         return [dividend / divider, dividend % divider];
//     }
//  }

//  a = divide(9,4);
//  console.log(a);

// ---------------------------------------------------------------------------------

// function divide(dividend, divider){
//     dividend = prompt('please enter a number')
//     divider = prompt('please enter a number');
    
//     if(divider == 0){
//         return -1;
//     }else{
//         return [dividend / divider, dividend % divider];
//     }
//  }

//  let a = divide();
//  console.log(a);

// ---------------------------------------------------------------------------------

// const sayHi = function(){
//     return 'hello' ;
// }

// console.log(sayHi());

// ---------------------------------------------------------------------------------

// function count(num) {
//     if (num == 10) return;
//     console.log(num);
//     count(++num);    
// }

// count(5);

// ---------------------------------------------------------------------------------