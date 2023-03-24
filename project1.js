// // function 1
// // Declaration of a function
// function greet(name){
//     console.log('Good morning ' + name)
// }
// // Involking or Calling the function to display the output
// greet("Mr_Nath");

// // function 2
// const weather = 'sunny'
// function dogExercise(dogName, dogBreed){
//     if (weather === 'sunny') {
//         console.log(dogName + ' from ' + dogBreed + ' family can go out');
//         console.log(`${dogName} from ${dogBreed}`);
//     }
// }
// dogExercise('Blacky', 'BullDog');

// // function 3 - unname functions
// (function(){
//     console.log('Hello world');
// });

// //Arrow function - Converting the first function to an arrow function
// function foo(){
//     console.log('bar');
// }

// const foo = (para1, para2)=>{
//     console.log(para1 + para2);
// }

// const display =(text)=>{
//     console.log(text);
// }

// const show = text =>{
//     console.log(text);
// }

// const play = text => console.log(text); //You can only use this when the parameter is only one you can do away with the paranthesis (text) and you can ignore the {when the block of code is only one statement}

// //function 5
// const add = (x) => console.log(x*3);

// add(10);

// const arr=[1,2,'Kofi','Accra',45];
// console.log(arr[3]);

// function array(){
//     const array = [2,79,['Kofi',34,165,['Monday','Tuesday','Wednesday',['January','December']]],'Amen',true,'Hi',67];
//     console.log(array[2][3][3][1])
//     console.log(array[-1])
// }
// array()

// //pushing new item into an array list
// const arr = ['Amina','Kofi',23,'Ghana','Korea']
// console.log(arr)
// arr.push('AITI')
// console.log(arr);
// arr.unshift('Portugal')
// console.log(arr)
// console.log([...arr,'Accra'])   //spread operator three dot(...) - shadow operator
// console.log(['Accra',...arr])


// const ul = document.createElement();
// const list = animals.map((animals))=>{
//     <li>{{animals}}</li>
// });

// courses = {
//     english: 20,
//     math: 30,
//     science:35
// }
// console.log(courses)
// console.log(courses['science'])

//students

// fruits = {
//     Mango: 45,
//     Banana: 35,
//     Pawpaw: 40,
//     Pineapple: 56,
//     Orange: 63
// }

// //this gets the key for you
// console.log(fruits)
// for (key in fruits){
//     console.log(key)
// }

// //this gets the key for you
// console.log(fruits)
// for (key in fruits){
//     console.log(fruits[key])
// }

// for (key in fruits) {
//     if (Object.hasOwnProperty.call(fruits, key)) {
//         const element = fruits;
//         console.log(element)
//     }
// }

// const hospital = {

// }

// hospital.Kweku = 'Malaria'
// hospital.Abena = 'Cold'
// hospital.Kojo = 'Fever'
// hospital.Adwoa = 'Headeche'

// console.log(hospital)


// const letters = ['a','b','c','d'];

// for (const element of letters){
//     console.log(element)
// }

// const address = {
//     street1: '11 Broadway',
//     street2: '2nd Floor',
//     city: 'New York',
//     state: 'NY',
//     zipCode: '10004'
// };

// for (const key in address) {
//     if (address.hasOwnProperty.call(address, key)) {
//         const element = address[key];
//         console.log(element);
        
//     }
    
// }


// function isOdd(element,index,array){
//     return (element % 2 === 1);
// }

//arrow function - A callback function is a function that can be called in another function
// const isOdd = function(element,index,array){
//     return(element%2===1)
// }

// const isOddNum = (element,index,array)=>element%2===1;

const users = [
{
    firstName:'Nilky',
    lastName:'Morgan',
    favoriteColor:'Blue',
    favoriteAnimal:'Jaguar',
},
{
    firstName:'Tracy',
    lastName:'Lum',
    favoriteColor:'Yellow',
    favoriteAnimal:'Penguin',
},
{
    firstName:'Nat',
    lastName:'Mensah',
    favoriteColor:'Blue',
    favoriteAnimal:'Cat',
}
];

function firstNamePrinter(collection){
    for(const user of collection){
        if (user.favoriteColor === 'Blue'){
            console.log(user.firstName)

        }
        
    }
    
}

// function firstNamePrinter(collection){
//     for (const key in collection) {
//         if (collection.hasOwnProperty.call(collection, key)) {
//             const element = collection[key];
//             console.log(element.firstName)
//         }
//     }
    
// }

firstNamePrinter(users);

//using the map function: Map takes an array and gives out an array
numList=[1,2,3,4,5,6];
numList.map(function (numList){
    console.log(numList / 3);
});

//numList =>console.log(numList / 3);

//Using the reduce function
const sum = [1,2,3,4,5,6].reduce((total, num)=>total + num)
console.log(sum)

