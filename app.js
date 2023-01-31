function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " +
    document.querySelector("#name").value +
    " din alder er " +
    document.querySelector("#age").value +
    " " +
    document.querySelector("#email").value;
}

document.querySelector("button").addEventListener("click", sayHello);
