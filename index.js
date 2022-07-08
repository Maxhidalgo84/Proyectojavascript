// Pedido de usuario y luego sigue eleccion de bicicleta (sin vincularlo con el DOM)

//LOGIN
/* 
 let usuario = prompt("ingrese su usuario")
    
    
        while(usuario == "") {
            alert("usuario incorrecto")
        usuario = prompt("Por favor ingrese un usuario");}
        
        let mensaje2 = (`Hola ${usuario} `)
        alert(mensaje2)

        let contraseña = prompt("ingrese contraseña")

            while (contraseña != "coder") {
            alert ("Contraseña incorrecta");

            contraseña = prompt("ingrese coder") 

            }
        alert(`${usuario} se logueo exitosamente`); 
     */

//Eleccion de la bici


class Producto {
    constructor(id,nombre,precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
}

vender() {
    this.vendido = true
}
}


let productos = [];

productos.push(new Producto(1,"MB 1", 100000 ));
productos.push(new Producto(2,"MB 2", 80000 ));
productos.push(new Producto(3,"MB 3", 50000 ));
productos.push(new Producto(4,"MB 4", 40000 ));
       
    let valor = 2
    
  /*   while (valor!=1 && valor!=2 && valor!=3 && valor!=4){
        alert("ingreso invalido");
        valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));} */
    
        

for (const producto of productos) {
       if (producto.id == (valor)){   
    precioBici = (producto.precio)
    producto.vender()} 
} 

      
    const suma = (a,b) => a +b;
    const resta = (a,b) => a - b;
    const iva = x => x *0.21;
    
    let precioProducto = precioBici;
    let descuento = precioProducto*0.10;
    let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento); 
     
    console.log(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor con descuento es de $${nuevoPrecio}`);
    