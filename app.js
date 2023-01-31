document.body.innerHTML += "Hello JavaScript!";
// alert("Hello dat.js");
console.log("Hello Dat.js");
console.log("Hello Students");
console.log("Hello World");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("Martin").value;

  document.querySelector("button").addEventListener("click", sayHello);
}
