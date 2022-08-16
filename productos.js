import { renderCarrito } from "./carritoIndex.js";
import { mostrarProductos } from "./mostrarProductos.js";

const productos = [];

class Producto {
  constructor(
    id,
    img,
    nombre,
    descripcion,
    precio,
    categoria,
    especificaciones,
    cantidad
  ) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria = categoria;
    this.especificaciones = especificaciones;
    this.cantidad = 0;
  }
}
//traigo los productos del json
export const cargarProductos = async () => {
  try {
    const response = await fetch("../data.json");

    const datos = await response.json();

    datos.forEach((dato) => {
      productos.push(
        new Producto(
          dato.id,
          dato.img,
          dato.nombre,
          dato.descripcion,
          dato.precio,
          dato.categoria,
          dato.especificaciones,
          dato.cantidad
        )
      );
    });
  } catch {
    console.log("error");
  }
};

const global = async () => {
  await cargarProductos();
  mostrarProductos(productos);
  renderCarrito()

};

global();

export { productos };
