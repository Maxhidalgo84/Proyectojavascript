const getValueInput = () => {

    let usuario = document.getElementById("uid").value;

    if (usuario == "") {
        alert("usuario requerido");}
        else {

        let mensaje2 = (`Hola ${usuario}`)
        document.getElementById("demo3").innerHTML = mensaje2;
        let contraseña = document.getElementById("pass").value;

            while (contraseña != "coder") {
            alert ("Contraseña incorrecta");

            contraseña = prompt("ingrese coder") 

            }
         

        alert(`bienvenido ${usuario}`); 
    
        }
}



const seleccion = (x) =>{
    let precioss;
    let modelo;
   

    switch(x){
    case "1":
        precioss = "100000";
        modelo = "MB1";
        break;
        
    case "2":
        precioss = "80000";
        modelo = "MB2";
        break;
        
    case "3":
        precioss = "30000";
        modelo = "MB3";
        break;

    default:
        return ("no se encontro el modelo")
        
    }  

    
    
let precio = parseInt(precioss)

const suma = (a,b) => a +b;
const resta = (a,b) => a - b;
const iva = x => x *0.21;

let precioProducto = precio;
let descuento = precioProducto*0.10;

let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento); 

let mensaje = (`Usted eligio el modelo de bicicleta ${modelo} y el valor con descuento es de $${nuevoPrecio}`);   

document.getElementById("demo2").innerHTML = mensaje;

}
 


   // let modelo= prompt("ingrese el modelo de bicicleta").toUpperCase();
    
/* //alert(modelo);
let precio = parseInt(getValueInput(precioss))

const suma = (a,b) => a +b;
const resta = (a,b) => a - b;
const iva = x => x *0.21;

let precioProducto = precio;
let descuento = precioProducto*0.10;

let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento); 

alert(`Usted eligio el modelo de bicicleta ${modelo} y el valor con descuento es ${nuevoPrecio}`);    */