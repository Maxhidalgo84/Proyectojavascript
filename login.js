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
const login = () => {
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
};

login();
