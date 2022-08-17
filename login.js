// Pedido de usuario

let padre = document.getElementById("demo3");
let usuarioSto = sessionStorage.getItem("usuario");
let somos = document.getElementById("somos");
let auto = document.getElementById("auto");
let ingresar = document.getElementById("ingresar");
let salir = document.getElementById("salir");
let mostrarUser = document.createElement("div");
let usuario;
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//Valido si ya esta logueado
const login = () => {
    if (usuarioSto) {
        ingresar.className = "ocultar";
        salir.className = "btn btn-danger";
        let nombre = usuarioSto;
        let mensaje = `${nombre}`;
        mostrarUser.innerHTML = `${mensaje}`;
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
                    if (!login || !password || !correo) {
                        Swal.showValidationMessage(`Ingrese todos los campos`);
                    } else if (password.length < 6 || password.match([0 - 9999])) {
                        Swal.showValidationMessage(
                            `Tu contraseña debe ser de mas 6 caracteres y un numero`
                        );
                    } else if (!validateEmail(correo)) {
                        Swal.showValidationMessage(`No has ingresado un correo valido`);
                    } else {
                        salir.className = "btn btn-danger";
                        usuario = document.getElementById("login");
                        sessionStorage.setItem("usuario", login);
                        mostrarUser.innerHTML = `Bienvenido ${login}`
                        padre.append(mostrarUser);
                    }
                    ingresar.className = "ocultar";

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
    salir.addEventListener("click", () => logout())
};

const logout = () => {
    sessionStorage.clear();
    ingresar.className = "btn btn-primary"
    salir.className = "ocultar"
    mostrarUser.innerText = "Sesion cerrada"
    padre.append(mostrarUser);

}

login();
