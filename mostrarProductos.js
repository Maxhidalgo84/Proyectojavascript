import { productos } from "./productos.js";
import { carritoIndex } from "./carritoIndex.js";
import { infoIndex } from "./infoIndex.js";

//Muestro productos en el dom

const mostrarProductos = (productos) => {
  const mountain = document.getElementById("MB");
  const carrera = document.getElementById("carrera");
  const infantil = document.getElementById("infantil");

  for (const { id, img, nombre, descripcion, precio, categoria } of productos) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("col-lg-4");

    contenedor.innerHTML = ` <div class="card">
                                <img src=${img} class="card-img-top" alt="...">
                                    <div class"card-body>
                                    <h5 class="card-title">${nombre} </h5>
                                    <p class="card-text"> ${descripcion} </p>
                                    <h5 class="card-title"> $${precio}</h5>
                                    <a href="#" id="${id}"  class="btn btn-primary">Comprar</a>
                                    <a href="#" id="inf${id}"  class="btn btn-primary">Info</a>
                                    </div>`;
    //separo por categoria
    if (mountain) {
      categoria === "mountain"
        ? mountain.appendChild(contenedor)
        : categoria === "carrera"
          ? carrera.appendChild(contenedor)
          : infantil.appendChild(contenedor);

      const showInfo = document.getElementById(`inf${id}`);
      showInfo.addEventListener("click", () => {
        infoIndex(id);
      });

      //eleccion de bici al apretar comprar
      const bicicleta = document.getElementById(`${id}`);
      
      bicicleta.addEventListener("click", () => {
        carritoIndex(id);
        Swal.fire({
          title: "Listo!",
          text: `Se agrego ${nombre} al carrito`,
          imageUrl: `${img}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      });
    }
  }
};

export { mostrarProductos };
