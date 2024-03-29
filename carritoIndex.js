import { productos } from "./productos.js";

let productoStorage = JSON.parse(localStorage.getItem("productos"));
const DateTime = luxon.DateTime;
let precioTotal = document.getElementById("suma");
let carrito = JSON.parse(localStorage.getItem("productos")) || [];
let botonMp = document.getElementById("finalizar");
let vaciarBtn = document.getElementById("vaciar");

//Renderizado del carrito de compras

export const renderCarrito = () => {
  productoStorage = JSON.parse(localStorage.getItem("productos"));
  const contenedorCarrito = document.getElementById("carritoContenedor");
  const contador = document.getElementById("contador");
  const contador2 = document.getElementById("contador2");
  const now = DateTime.now();
  const later = now.plus({ days: 10 });
  const envio = later.toLocaleString(DateTime.DATE_SHORT);
  contenedorCarrito.innerHTML = "";


  if (productoStorage) {// si existe algo en el localstorage lo muestro en el carrito
    botonMp.className = "finalizar"
    vaciarBtn.className = "btn btn-danger"
    for (const item of productoStorage) {
      let div = document.createElement("div");
      div.classList.add("productoEnCarrito");
      div.innerHTML = `   <p>${item.nombre}</p>
                        <p>Precio: ${item.precio}</p> 
                        <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
                        <button id="eliminar${item.id}" class="botonEliminar" ><i class="fa-solid fa-trash-can"></i></button>
            `;
      contenedorCarrito.appendChild(div);

      //para elminar del carrito
      const botonEliminar = document.getElementById(`eliminar${item.id}`);
      botonEliminar.addEventListener("click", () => {
        borrarItemCarrito(item.id);
      });
    }
    // boton de pago
    botonMp.addEventListener("click", (e) => pagar());

    //vaciar carrito
    vaciarBtn.addEventListener("click", () => vaciar());

    //Acumulador de precio y cantidad del carrito
    const cantidad = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.cantidad,
      0
    );
    contador.innerText = cantidad;
    contador2.innerText = cantidad;

    const total = carrito.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.precio * elemento.cantidad,
      0
    );
    if (total != 0) {
      precioTotal.innerHTML = `<p>Total: $${total}</p>
                              <p>La fecha estimada de envio es ${envio}</p>`;
    }
    else {
      contenedorCarrito.innerText = "Carrito Vacio";
      precioTotal.innerText = "";
      botonMp.className = "ocultar"
      vaciarBtn.className = "ocultar"
    }

  } else {//sino devuelvo vacio
    contenedorCarrito.innerText = "Carrito Vacio";
    botonMp.className = "ocultar"
    vaciarBtn.className = "ocultar"
    precioTotal.innerText = "";
    contador.innerText = "0";
    contador2.innerText = "0";
  }
};

//Agregar elemento al carrito
export const carritoIndex = (productoId) => {
  let producto = productos.find((producto) => producto.id == productoId);
  let carritoFind = carrito.find((element) => element.id === productoId);
  //si existe le agrego 1
  if (carritoFind) {
    carrito.find((item) => item.id === productoId).cantidad++;
  } else {//sino lo agrego al carrito
    let linea = { ...producto };
    carrito.push(linea);
    carrito.find((item) => item.id === productoId).cantidad++;
  }
  //renderizo
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};

//borrar item carrito
export const borrarItemCarrito = (productoId) => {
  let linea = carrito.find((element) => element.id === productoId);
  // si existe y es mayor a 1 
  if (linea) {
    if (linea.cantidad > 1) {
      carrito.find((item) => item.id === productoId).cantidad--;
    } else {//sino lo borro
      carrito.splice(carrito.indexOf(linea), 1);
    }
  }
  // volvemos a renderizar
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};

//vaciar carrito
const vaciar = () => {
  localStorage.clear();
  carrito = [];
  renderCarrito();
}

//Pagar del api de mercadopagos
const pagar = async () => {
  const productosToMap = carrito.map((Element) => {
    let nuevoElemento = {
      title: Element.nombre,
      description: Element.descripcion,
      picture_url: Element.img,
      category_id: Element.id,
      quantity: Element.cantidad,
      currency_id: "ARS",
      unit_price: Element.precio,
    };
    return nuevoElemento;
  });

  let response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-7235847452020414-081109-324ef6330b6a20637edf77f166577f9e-196132098",
      },
      body: JSON.stringify({
        items: productosToMap,
      }),
    }
  );

  let data = await response.json();

  window.open(data.init_point, "_blank");
};
