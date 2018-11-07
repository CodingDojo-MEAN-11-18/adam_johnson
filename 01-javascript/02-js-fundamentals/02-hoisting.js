// #1
// console.log(hello);
// var hello = 'world';

//Prediction: undefined
//As seen by interpreter:
// var hello;
// console.log(hello);
// var hello = 'world';
//Answer: undefined

//#2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//Prediction: magnet
//As seen by interpreter:
// var needle;
// needle = 'haystack';
// test();
// function test(){
//   var needle;
//   needle = 'magnet';
//   console.log(needle);
// }
//Answer: magnet

//#3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//Prediction: super cool
//As seen by interpreter:
// var brendan;
// brendan = 'super cool';
// function print(){
//   brendan = 'only okay';
//   console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

//Answer: super cool

//#4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//Prediction: chicken half-chicken undefined
//As seen by interpreter:
// var food;
// food = 'chicken';
// console.log(food);
// eat()
// function eat(){
//   food = 'half-chicken';
//   console.log(food);
//   var food = 'gone';
// }
//Answer: chicken half-chicken

//#5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//As seen by interpreter:
// var mean;
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//Prediction: error
//Answer: TypeError: mean is not a function

//#6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//Prediction: undefined r&b r&b
//As seen by interpreter:
// var genre;
// console.log(genre);
// genre = 'disco';
// rewind();
// function rewind(){
//   genre = 'rock';
//   console.log(genre);
//   genre = 'r&b';
//   console.log(genre);
// }
// genre = 'disco';
// console.log(genre);
//Answer: undefined rock r&b disco

//#7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

//Prediction: san jose seattle burbank san jose
//As seen by interpreter:
// var dojo;
// dojo = 'san jose';
// console.log(dojo);
// learn();
// function learn(){
//   dojo = 'seattle';
//   console.log(dojo);
//   dojo = 'burbank';
//   console.log(dojo);
// }
// dojo = 'san jose';
// console.log(dojo);
//Answer: san jose seattle burbank san jose

//#8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

//Prediction: Chicago 65 true   Berkeley 0 closed for now
//As seen by interpreter:
// console.log(makeDojo('Chicago', 65));
// console.log(makeDojo('Berkeley', 0));
// //error occurs here after above line is attempted
// function makeDojo(name, students){
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50){
//     dojo.hiring = true;
//   }
//   else if (dojo.students <= 0){
//     dojo = 'closed for now';
//   }
//   return dojo;
// }
//Answer: { name: 'Chicago', students: 65, hiring: true } TypeError: Assignment to constant variable => dojo = "closed for now"


