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
      //bicicleta.onclick = () => {eleccion(producto.id)}
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
        //alert(`Se agrego ${nombre}`);
      });
    }
  }
};

export { mostrarProductos };

// Pedido de usuario

let padre = document.getElementById("demo3");
let usuarioSto = sessionStorage.getItem("usuario");
let somos = document.getElementById("somos");
let auto = document.getElementById("auto");
let ingresar = document.getElementById("ingresar");
let usuario;
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//Valido si ya esta logueado
if (auto) {
  if (usuarioSto) {
    ingresar.className = "ingresar";
    let nombre = usuarioSto;
    let mensaje = `Hola ${nombre}`;
    let mostrarUser = document.createElement("div");
    mostrarUser.className = "demo2";
    mostrarUser.innerText = `${mensaje}`;
    if (somos) {
      Swal.fire(mensaje);
      padre.append(mostrarUser);
    } else {
      padre.append(mostrarUser);
    }
  } else {
    //Utilizo un Swal.Fire para inicio de sesion.
    ingresar.addEventListener("click", () => {
      Swal.fire({
        title: "Inicio Sesion",
        html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre">
            <input type="email" id="correo" class="swal2-input" placeholder="correo">
            <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: "Enviar",
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector("#login").value;
          const password = Swal.getPopup().querySelector("#password").value;
          const correo = Swal.getPopup().querySelector("#correo").value;
          console.log(password);
          console.log(correo);
          if (!login || !password || !correo) {
            Swal.showValidationMessage(`Ingrese todos los campos`);
          } else if (password.length < 6 || password.match([0 - 9999])) {
            Swal.showValidationMessage(
              `Tu contraseña debe ser de mas 6 caracteres y un numero`
            );
          } else if (!validateEmail(correo)) {
            Swal.showValidationMessage(`No has ingresado un correo valido`);
          } else {
            usuario = document.getElementById("login");
            sessionStorage.setItem("usuario", login);
            let mostrarUser = document.createElement("div");
            mostrarUser.className = "demo2";
            mostrarUser.innerText = `Bienvenido ${login}`;
            padre.append(mostrarUser);
          }
          ingresar.className = "ingresar";

          return { login: login, correo: correo, password: password };
        },
      }).then((result) => {
        Swal.fire(
          `
              Hola: ${result.value.login}
            `.trim()
        );
      });
    });
  }
}
