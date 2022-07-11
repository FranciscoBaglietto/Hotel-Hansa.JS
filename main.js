const carrito = [];

let total = 0;

function renderizarHabitaciones() {
    
    let tienda = document.getElementById("contenedor-habitaciones");
    
    habitaciones.forEach(p =>{
        
        let habitacionHTML = `
        <div>
        <div class= "card">
            <img src="$(p.img)" class="card-img-top" alt="Habitacion Doble">
            <div class="card-body text-center">
                <h5 class="card-title">$(p.habitacion)</h5>
                <p>$(p.precio)</p>
            </div>
            <button class="btn" onClick="agregarProductoAlCarrito($(p.id))>Añadir al carrito</button>
        </div>
        </div>
        `
        tienda.innerHTML += habitacionHTML;
        

    })

};

renderizarHabitaciones();

function agregarProductoAlCarrito() {

    let habitacion = habitaciones.find(hab => hab.id === id);

    let habitacionEnCarrito = carrito.find(hab => hab.id === id);//si hay habitacione en carrito

    if(habitacionEnCarrito){
        habitacionEnCarrito++

    }else{
        habitacion.cantidad = 1;
        carrito.push(habitacion);
    }

    renderizarCarrito()
}

function renderizarCarrito() {
    
    let carritoHTML = document.getElementById("carrito");
    console.log(carritoHTML)
}
