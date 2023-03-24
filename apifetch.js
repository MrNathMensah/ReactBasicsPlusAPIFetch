// //fetching a jason file to be displayed in your browser or terminal
// fetch("http://api.open-notify.org/astros.json")
// .then(function (response){
//     return response.json();
// })
// .then(function (data){
//     console.log(data);
//     console.log(`Holy cow! There are ${data["number"]} humans in space.`);
// });


// //Fetching raw data to be converted to jason file
// fetch("https://anapioficeandfire.com/api/books")
// .then((response)=>response.json())
// .then((json)=>console.log(json));

//let document = document.querySelector("#document")
// function fetchBooks() {
//     // To pass the tests, don't forget to return your fetch!
//     return fetch("https://anapioficeandfire.com/api/books")
//     .then((resp) => resp.json())
//     .then((json) => renderBooks(json));
//   }

//   function renderBooks(books) {
//     const main = document.querySelector('main');
//     books.forEach(book => {
//       const h2 = document.createElement('h2');
//       h2.innerHTML = book.name;
//       main.appendChild(h2);
//     });
//   }
//   document.addEventListener('DOMContentLoaded', function() {
//     fetchBooks()
//  });

const header = document.createElement("h1");
header.textContent = "Hi!";
header.className = "main";

const container = document.querySelector("#container");
container.append(header);

 
  