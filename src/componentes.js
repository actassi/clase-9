import React from "react";

class Componente extends React.Component {
    
        
        constructor(dato) { // dato es un texto en el caso del botón, una ruta en el caso de la imagen o del sonido  
                            //y un conjunto de items en el caso de la lista
            super(dato);
            this.text = dato; 
            this.image = dato;
            this.sound = dato;
            this.items = dato;
            
        }


        renderBoton() {
            return `<button>${this.text}</button>`;
        }

        renderImagen() {
            return `<img src="${this.image}">`;
        }

        renderSonido() {
            return `<audio controls><source src="${this.sound}" type="audio/ogg"></source></audio>`;
        }

        renderLista() {
            let html = "<ul>";
            for (let item of this.items) {
                html += `<li>${item}</li>`;
            }
            html += "</ul>";
            return html;
        }
    

}

export default Componente