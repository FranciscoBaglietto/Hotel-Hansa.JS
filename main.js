
// guardado een localSotaraje
const datosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carrito = datosCarrito || []



// Fetch
const API = "../data.json"  

const getData = async () => {
    try {
        const response = await fetch (API);
        const data = await response.json();
    
        return data;
        
    } catch (error) {
        console.log("Hubo un error en la petición", error)
    }
    
} 

const renderizarHabitaciones = async () => {
    let tienda = document.getElementById("contenedor-habitaciones");

    const data = await getData();


    data.forEach((p) => {
        let habitacionHTML = `
        <div>
        <div class= "card">
            <img src=${p.img} class="card-img-top" alt="Habitacion Doble ">
            <div class="card-body text-center">
                <h5 class="card-title">${p.actividad}</h5>
                <p>$ ${p.precio}</p>
            </div>
            <button id="btn-agregar" class="btn btn-primary" onclick="agregarProductoAlCarrito(${p.id})">Añadir al carrito</button>
        </div>
        </div>
        `;
        tienda.innerHTML += habitacionHTML;
    });
}

renderizarHabitaciones()


function agregarProductoAlCarrito(id) {
    let habitacion = actividades.find((hab) => hab.id === id);

    let habitacionEnCarrito = carrito.find((hab) => hab.id === id); //si hay habitacione en carrito

    if (habitacionEnCarrito) {
        habitacionEnCarrito.cantidad++;

        console.log(carrito);
    } else {
        habitacion.cantidad = 1;
        carrito.push(habitacion);
        console.log(carrito);
    }

    const btnAgregar = document.getElementById("btn-agregar");
    // llamar la libreria con swal
    swal({
        title: `Genial`,
        text: `Tu actividad se añadio al carrito`,
        icon: `success`,
        confirm: `OK`,
        button: false,
        timer: 1000,
    });
    //LocalStorage

    const enJSON = JSON.stringify(carrito); //hacemos los objetos en carrito en formato JSON

    localStorage.setItem("carrito", enJSON);


    renderizarCarrito();

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
                <h5 class="card-title">${p.actividad}</h5>
                <p>$ ${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button id="btn-eliminar" class="btn btn-primary" onclick="eliminarProductoAlCarrito(${p.id})">Eliminar</button>
            </div>
        </div>
        </div>
        `;
    });
    calcularTotal();
    carritoHTML.innerHTML = htmlcarrito;
}

function eliminarProductoAlCarrito(id) {
    let habitacionEliminar = carrito.find((hab) => hab.id === id);

    console.log(habitacionEliminar);
    swal({
        title: `¿Estas seguro de eliminar Actividad?`,
        icon: `warning`,
        button: true,
        dangerMode: true,
    }).then((result) => {
        //para esperar respuesta del usuarion
        if (result) {
            swal({
                title: `Borrado`,
                icon: `success`,
                text: `La actividad ha sido borrada con éxito`,
                timer: 1000,
            });
        }
    });

    habitacionEliminar.cantidad > 1
        ? habitacionEliminar.cantidad--
        : carrito.splice(carrito.indexOf(habitacionEliminar)); //Operador Avanzado-Ternario

    renderizarCarrito();
}

function calcularTotal() {
    let total = 0;

    carrito.forEach((p) => {
        total += p.cantidad * p.precio;
    });
    console.log(total);

    const t = document.getElementById("total");
    t.innerHTML = `<p>Total: $${total}</p>`;
}
