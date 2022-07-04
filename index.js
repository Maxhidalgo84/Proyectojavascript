// Pedido de usuario y luego sigue eleccion de bicicleta (sin vincularlo con el DOM)

//LOGIN

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
    

//Eleccion de la bici

        function ingresar(x){   
            if (x==1){
            return "100000"
            
            }  
                
            else if (x==2){
            return "80000"
            }
    
            else if (x==3){
                return "50000"
                }
    
            else if (x==4) {
            return "40000"
                }    
            
            else { 
                return "0"
            }  
    }
       
    let valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));
    
    while (valor!=1 && valor!=2 && valor!=3 && valor!=4){
        alert("ingreso invalido");
        valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));}
    
    precio = parseInt(ingresar(valor));
    
    const suma = (a,b) => a +b;
    const resta = (a,b) => a - b;
    const iva = x => x *0.21;
    
    let precioProducto = precio;
    let descuento = precioProducto*0.10;
    let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento); 
     
    alert(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor con descuento es de $${nuevoPrecio}`);
    


//// Pedido de usuario y luego sigue eleccion de bicicleta (vicunlado con el DOM)
  
//LOGIN
/* 

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

//ELECCION DE BICI

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
  */
