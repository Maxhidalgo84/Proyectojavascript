import { productos } from "./productos.js";

let productoStorage = JSON.parse(localStorage.getItem("productos"));
const DateTime = luxon.DateTime;
let suma = document.getElementById("suma");

let carrito = JSON.parse(localStorage.getItem("productos")) || [];

//Renderizado del carrito de compras

const renderCarrito = () => {
  let productoStorage = JSON.parse(localStorage.getItem("productos"));
  const contenedorCarrito = document.getElementById("carritoContenedor");
  const contador = document.getElementById("contador");
  const contador2 = document.getElementById("contador2");
  const now = DateTime.now();
  const later = now.plus({ days: 10 });
  const envio = later.toLocaleString(DateTime.DATE_SHORT);
  contenedorCarrito.innerHTML = "";

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

    // boton de pago
    const botonMp = document.getElementById("finalizar");
    botonMp.addEventListener("click", (e) => pagar());

    //Acumulador de precio y cantidad del carrito
    let precioTotal = document.getElementById("suma");
    let total = carrito.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.precio * elemento.cantidad,
      0
    );
    precioTotal.innerHTML = `<p>Total: $${total}</p>
                              <p>La fecha estimada de envio es ${envio}</p>`;

    let cantidad = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.cantidad,
      0
    );
    contador.innerText = cantidad;
    contador2.innerText = cantidad;
  }
};

export const carritoIndex = (productoId) => {
  let producto = productos.find((producto) => producto.id == productoId);
  if (carrito.some((element) => element.id === productoId)) {
    carrito.find((item) => item.id === productoId).cantidad++;
  } else {
    carrito.push(producto);
    carrito.find((item) => item.id === productoId).cantidad++;
  }
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};

// Si hay algo en storage lo renderizo
if (suma) {
  if (productoStorage) {
    renderCarrito();
  }
}

export const borrarItemCarrito = (productoId) => {
  let borrado = productos.find((item) => item.id == productoId);
  if (
    carrito.some((element) => element.id === productoId) &&
    carrito.some((element) => element.cantidad > 0)
  ) {
    carrito.find((item) => item.id === productoId).cantidad--;
  } else {
    carrito.find((item) => item.id === productoId).cantidad--;
    carrito.splice(borrado);
  }

  // volvemos a renderizar
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};

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
