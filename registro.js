// llamamos al contenedor registro
const formRegistro = document.getElementById("contenedor-registro");

const datosRegistro = [];

formRegistro.addEventListener(`submit`, (e) => {

    e.preventDefault();//agregamos la prevencion al eveneto por default

    // capturamos cada uno de los input
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;//para ver el valor con .value

    const datos = {

        nombre,
        apellido,
        telefono,
        email,
        contraseña
    };

    datosRegistro.push(datos);//pusheamos los datos

    // localStorage
    const datosJSON = JSON.stringify(datosRegistro);//convertimos en formate JSON
    
    localStorage.setItem("Datos", datosJSON);//enviamos al LocalStorage
})