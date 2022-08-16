import { mostrarProductos } from "./app.js";

const productos = [];

class Producto {
  constructor(
    id,
    img,
    nombre,
    descripcion,
    precio,
    categoria,
    especificaciones
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
const cargarProductos = async () => {
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
          dato.especificaciones
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
};

global();

export { productos };
