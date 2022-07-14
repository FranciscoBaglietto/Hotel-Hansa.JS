// llamar a Boton para el HTML Habitaciones
// const btnBuscar = document.getElementById("myButton").onclick = 
// function () {
//     location.href= "./paginas/habitaciones.html"
// }

const carrito = [];

function renderizarHabitaciones() {

    let tienda = document.getElementById("contenedor-habitaciones");

    habitaciones.forEach(p => {

        let habitacionHTML = `
        <div>
        <div class= "card">
            <img src=${p.img} class="card-img-top" alt="Habitacion Doble ">
            <div class="card-body text-center">
                <h5 class="card-title">Habitacion ${p.habitacion}</h5>
                <p>$ ${p.precio}</p>
            </div>
            <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${p.id})">Añadir al carrito</button>
        </div>
        </div>
        `
        tienda.innerHTML += habitacionHTML;
    })

};

renderizarHabitaciones();

function agregarProductoAlCarrito(id) {

    let habitacion = habitaciones.find(hab => hab.id === id);

    let habitacionEnCarrito = carrito.find(hab => hab.id === id);//si hay habitacione en carrito

    if (habitacionEnCarrito) {

        habitacionEnCarrito.cantidad++;

        console.log(carrito);

    } else {
        habitacion.cantidad = 1;
        carrito.push(habitacion);

        console.log(carrito);
    }
    //LocalStorage

    const enJSON = JSON.stringify(carrito);//hacemos los objetos en carrito en formato JSON

    localStorage.setItem("carrito", enJSON);

    renderizarCarrito()
}

function renderizarCarrito() {

    let carritoHTML = document.getElementById("carrito");
    console.log(carritoHTML);

    let htmlcarrito = " ";

    carrito.forEach((p, id) => {

        htmlcarrito += `
        <div class="d-flex">
        <div class= "card">
            <div class="card-body text-center">
                <h5 class="card-title"> Habitacion ${p.habitacion}</h5>
                <p>$ ${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-primary" onclick="eliminarProductoAlCarrito(${p.id})">Eliminar</button>
            </div>
        </div>
        </div>
        `

    })
    calcularTotal()
    carritoHTML.innerHTML = htmlcarrito;

}

function eliminarProductoAlCarrito(id) {

    let habitacionEliminar = carrito.find((hab) => hab.id === id);

    console.log(habitacionEliminar);

    if (habitacionEliminar.cantidad > 1) {
        habitacionEliminar.cantidad--;
    } else {
        carrito.splice(carrito.indexOf(habitacionEliminar))
    }

    renderizarCarrito();
}


function calcularTotal() {

    let total = 0;

    carrito.forEach((p) => {
        total += p.cantidad * p.precio
    })
    console.log(total);

    const t = document.getElementById("total")
    t.innerHTML = `<p>Total de reservas: $${total}</p>`

}


