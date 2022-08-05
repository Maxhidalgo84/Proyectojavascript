import { productos } from "./productos.js";
import { carritoIndex } from "./carritoIndex.js";

//Muestro productos en el dom

const mostrarProductos = (productos) => {
  
  const mountain = document.getElementById("MB");
  const carrera = document.getElementById("carrera");
  const infantil = document.getElementById("infantil");

  for (const {id,img,nombre,descripcion,precio,categoria} of productos) {
    console.log(nombre);
  
    let contenedor = document.createElement("div");
    contenedor.classList.add("col-lg-4");

    contenedor.innerHTML = ` <div class="card">
                                <img src=${img} class="card-img-top" alt="...">
                                    <div class"card-body>
                                    <h5 class="card-title">${nombre} </h5>
                                    <p class="card-text"> ${descripcion} </p>
                                    <h5 class="card-title"> $${precio}</h5>
                                    <a href="#" id="${id}"  class="btn btn-primary">Comprar</a>
                                    </div>
                                </div>`;
    if (mountain) {
       (categoria === "mountain") ? mountain.appendChild(contenedor): (categoria === "carrera") ? carrera.appendChild(contenedor)
       : infantil.appendChild(contenedor);
    

      //eleccion de bici al apretar comprar
      const bicicleta = document.getElementById(`${id}`);
      //bicicleta.onclick = () => {eleccion(producto.id)}
      bicicleta.addEventListener("click", () => {
        carritoIndex(id);
        Swal.fire({
          title: 'Listo!',
          text: `Se agrego ${nombre} al carrito`,
          imageUrl:`${img}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
             //alert(`Se agrego ${nombre}`);
      });
    }
  }
};

//mostrarProductos(productos);

export {mostrarProductos}

// Pedido de usuario

let padre = document.getElementById("demo3");
let error1 = document.getElementById("error1");
let usuario;
let correo;
let usuarioSto = sessionStorage.getItem("usuario");
let formulario = document.getElementById("formulario");
let boton01 = document.getElementById("envia");

// si no esta logueado se tiene que loguear con esta funcion.
if (formulario) {
  const loguear = () => {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      padre.innerText = "";
      error1.innerText = "";
      if (
        e.target.correo.value.includes("@") &&
        e.target.correo.value.includes(".")
      ) {
        usuario = document.getElementById("name");
        sessionStorage.setItem("usuario", usuario.value);
        let mostrarUser = document.createElement("div");
        mostrarUser.className = "demo2";
        mostrarUser.innerText = `Bienvenido ${usuario.value}`;
        padre.append(mostrarUser);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Parece que no has ingresado un correo valido!',
        })
        let mostrarUser = document.createElement("div");
        mostrarUser.innerHTML = "no es un correo";
        error1.appendChild(mostrarUser);
        e.correo.value = "";
      }
    });
  };

  //Valido si ya esta logueado
  if (usuarioSto) {
    let usuario = usuarioSto;
    let mensaje = `Bienvenido ${usuario}`;
    Swal.fire(mensaje)
    let mostrarUser = document.createElement("div");
    mostrarUser.className = "demo2";
    mostrarUser.innerText = `Bienvenido ${usuario}`;
    padre.append(mostrarUser);
  } else {
    loguear();
  }
}



