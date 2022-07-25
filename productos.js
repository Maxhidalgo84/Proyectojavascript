const productos = [];

class Producto {
    constructor(id,img,nombre,descripcion,precio,categoria){
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria = categoria;
    this.cantidad = 0;
}
}

productos.push(new Producto(1,"../img/mountain1.jpg","Mountain Rodado 29 GT","la mejor bici", 100000,"mountain" ));
productos.push(new Producto(2,"../img/mountain2.jpg","Mountain Rodado 29","Versatil, donde quiera que vayas", 80000,"mountain" ));
productos.push(new Producto(3,"../img/mountain3.jpg","Mountain 27.5","Con doble suspension y horquilla max", 50000,"mountain" ));
productos.push(new Producto(5,"../img/mountain4.jpg","Mountain eco","La mejor relacion precio", 40000,"mountain" ));
productos.push(new Producto(6, "../img/bicicarrera1.jpg", "Carrera 1", "La mejor bici de carrera", 100000,"carrera"));
productos.push(new Producto(7, "../img/bicicarrera2.jpg", "Carrera 2", "Ideal trayectos largos", 90000, "carrera"));
productos.push(new Producto(8, "../img/bicicarrera13.jpg", "Carrera 3", "Mejor en su precio", 70000, "carrera"));
productos.push(new Producto(9, "../img/biciniño1.jpg", "infantil 1", "Bici niño 1", 30000, "infantil"));
productos.push(new Producto(10, "../img/biciniño2.jpg", "infantil 2", "Bici niño 2", 20000, "infantil"));
productos.push(new Producto(11, "../img/biciniño2.jpg", "infantil 3", "Bici niño 3", 15000, "infantil"));

export {productos};