// let score = 95;
// let grade = score >= 50
// ---------------------------------------------------------------------------------
// 2 diff combination
// if (grade) {
//     console.log(`congratulations your score ${score}, you passed`);
// }

// if (grade) console.log(`congratulations your score ${score}, you passed`);

// ---------------------------------------------------------------------------------

// if (grade) {
//     console.log(`congratulations your score ${score}, you passed`);
// }else{
//     console.log(`Sorry your score ${score}, you did'nt pass`);
// }

// ---------------------------------------------------------------------------------

// if (score >=80) {
//     console.log(`Congratulations your score ${score}, you passed and you are very good and brilant student`);
// }else if (score >=50){
//     console.log(`Congratulations your score ${score}, you passed`);
// }else{
//     console.log(`Sorry your score ${score}, you didnt pass`);
// }

// ---------------------------------------------------------------------------------

// Ternary If else

// score >= 50 ? console.log(`Congratulations your score ${score}, you passed`):
//                console.log(`Sorry your score ${score}, you didnt pass`);

// ---------------------------------------------------------------------------------

// let score = prompt(`Please enter exam point: `)

// score >= 80 ? console.log(`Congratulations your score ${score}, you passed and you are very good`):
//  score >=50 ? console.log(`Congratulations your score ${score}, you passed`):
//   console.log(`Sorry your score ${score}, you didnt pass`);

// ---------------------------------------------------------------------------------

// let username = prompt(`Please enter your username`)

// username && console.log(`Hello ${username}`);

// ---------------------------------------------------------------------------------

// var text;
// var fruits = prompt('Do you have any fruits name?')

// switch (fruits.toLowerCase()){
//     case "banana":
//         text = 'Banana is good!';
//         break;
//     case 'lime':
//     case 'lemon':
//     case 'orange':
//         text = `Im not fan of ${fruits}`;
//         break;
//     case 'apple':
//         text = 'How you like apples';
//         break;
//     default:
//         text = `I have never heard of ${fruits}`;

// }

// console.log(text);

// ---------------------------------------------------------------------------------
// Write the s code that gives the meaning of the day it received from the user.
// ---------------------------------------------------------------------------------

// var text;
// var day = prompt('Please enter a day name')

// switch(day.toLocaleLowerCase()){
//     case 'monday':
//     case 'wednesday':
//     case 'thursday':
//     case 'saturday':
//         text = 'in class';
//         break;
//     case 'teusday':
//     case 'friday':
//         text = 'Teamwork or workshop';
//         break;
//     case 'sunday':
//         text = 'Holidayy'; 
//         break;
//     default:
//         text = 'Please enter a day name';
// } 
// console.log(text); 

// ---------------------------------------------------------------------------------

// let password = 'password1'

// if (password.length >=5 && password.includes(`1`,'2','3') ){
//     console.log('that password is strong');
// }else {
//     console.log('password is not long enough');
// }

// ---------------------------------------------------------------------------------

// LOOPS //

// let i = 0;
// let sum = 0;

// while (i < 11){
//     sum += i;
//     console.log(sum)
//     i++
// }

// ---------------------------------------------------------------------------------

// let i = 0 , sum = 0;

// while (i<11){
//     sum+=i;
//     i++
//     console.log(i);
// }

// ---------------------------------------------------------------------------------

// var i = 2 , sum = 0;

// while (i<6){
//     sum = sum+i;
//     i++;
// }
// console.log('the total is: ' + sum);

// ---------------------------------------------------------------------------------

// var i = 1;
// var mult=5;
// while (i < 4) {
// mult *= i;
// i++;
// }
// console.log ("The answer is: " + mult);

// ---------------------------------------------------------------------------------

// let i = 5 , sum = 0;

// do {
//     sum += i;
//     i++;
// }
// while (i < 7)
// console.log(sum);

// ---------------------------------------------------------------------------------

// for(var i = 0; i < 10; i++){
//     console.log('i :' + i);
// }

// ---------------------------------------------------------------------------------

// let text = 'clarusway';

// for(let i =0; i < text.length; i++){
//     console.log(text[i]);
// }

// ---------------------------------------------------------------------------------

// let sum = 0;

// for(let i = 0; i <= 10; i++){
//     sum += i
//     console.log(sum);
// }

// ---------------------------------------------------------------------------------

// let sum = 0;

// for(let i = 0; i <= 10; i++){
    
//     if (i%2 ==0) {
//     sum +=i;
//     }
//     console.log(sum);
// }

// ---------------------------------------------------------------------------------

// let sum = 0;

// for(let i = 0; i <= 10; i++){
    
//     if (i%2 ==0) {
//     console.log(i);
//     }
// }

// ---------------------------------------------------------------------------------

// for(var y = 0; y < 101; y++){
//     if(y % 5 == 0 && y % 3 == 1){
//         console.log(y);
//     }
// }

// ---------------------------------------------------------------------------------

// for(let i =0; i <=100; i++){

//     if (i%15 ==0) {
//         console.log(i,'FizzBuzz');
//     }else if(i%5 ==0) {
//         console.log(i,'Fizz');
//     }else if(i%3 ==0){
//         console.log(i,'Buzz');
//     }

// }