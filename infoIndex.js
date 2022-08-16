import { productos } from "./productos.js";

//Mostrar informacion de cada bicicleta
let especi = [];
let info = [];

const renderInfo = () => {
  modal2.classList.toggle("modalActive");
  const contenedorInfo = document.getElementById("infoContenedor");

  contenedorInfo.innerHTML = "";

  especi.forEach((element) => {
    console.log(especi);
    let div = document.createElement("div");
    div.classList.add("productoEnInfo");
    div.innerHTML = `<h4>${element.nombre}</h4>
                    <p>Cuadro: ${element.especificaciones.cuadro}</p>
                    <p>Horquilla: ${element.especificaciones.horquilla}</p>
                    <p>Frenos: ${element.especificaciones.frenos}</p>
                    <p>Cadena: ${element.especificaciones.cadena}</p>
                    <p>Cambios: ${element.especificaciones.cambio}</p>
                    <p>Cubiertas: ${element.especificaciones.cubiertas}</p>
                    <p>Asiento: ${element.especificaciones.asiento}</p> `;
    contenedorInfo.appendChild(div);
    especi = [];
  });
};

export const infoIndex = (productoID) => {
  info = productos.find((producto) => producto.id == productoID);
  especi.push(info);
  renderInfo();
};
