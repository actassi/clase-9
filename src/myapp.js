import Componente from "./componentes.js";


let myDiv = document.querySelector("#myApp");

let myButton = new Componente("Click me!");

myDiv.innerHTML = myButton.renderBoton();


let myImagen = new Componente("./logo.svg");

myDiv.innerHTML += myImagen.renderImagen();

let mySound = new Componente("https://www.w3schools.com/tags/horse.ogg");

myDiv.innerHTML += mySound.renderSonido();

const lista = ["item 1", "item 2", "item 3", "item 5", "item 4", "item 7", "item 6"];

let myList = new Componente(lista);

myDiv.innerHTML += myList.renderLista();

