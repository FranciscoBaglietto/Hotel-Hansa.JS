const habitaciones = [
    {
        id: 1,
        habitacion: "Simple",  //objeto1
        precio: 100,
        disponibilidad: 4
    },
    {
        id: 2,
        habitacion: "Doble", //objeto2
        precio: 200,
        disponibilidad: 2
    },
    {
        id: 3,
        habitacion: "Triple",    //objeto3
        precio: 300,
        disponibilidad: 1
    }
];

habitaciones.push({ id: 4, habitacion: "Cuadruple", precio: 400, disponibilidad: 3 }); //Agregando otro objeto mas con push

const carrito = [];
const precioTotal = () => carrito.reduce((acc, elem) => acc + elem.precio, 0);

let habitacionesFiltradas = [];

//Bienvenida

console.log("Bienvenidos a Hotel-Hansa")


//pregunta si quiere alquilar
let alquiler = prompt("¿Quieres alquilar una Habitación? Escribe si/no");

let preguntar = false;

while (!preguntar) {
    if (alquiler == "") {
        alert("No seleccionaste ninguna Habitacion");
        alquiler = prompt("¿Deaseas alquilar una habitacion?");
    }
    else {
        preguntar = true;
    }
    alquiler.toLowerCase();
}

if (alquiler == "si") {

    let filtrar = prompt("Deseas filtrar por precio? si/no").toLowerCase//filtrar por precio

    if (filtrar = "si") {
        let precio = Number(
            prompt("Ingrese el precio que deseas filtrar"));

        habitacionesFiltradas = [];
        habitacionesFiltradas = filtrarPrecio(precio);

        console.log(habitacionesFiltradas);
    } 
};

//elegir Habitacion
let eleccionHabitacion = "";

while (eleccionHabitacion != "no".toLowerCase) {

    let textoAMostrar = '';

    for (let i = 0; i < habitacionesFiltradas.length; i++) {
        textoAMostrar += `Digite ${i + 1} para alquilar Habitacion ${habitacionesFiltradas[i].habitacion}\n`;
    }




    eleccionHabitacion = prompt(`
      ¿Que habitaciones deseas Alquilar?

      Para dejar de alquilar, apreta Cancelar.

     ${textoAMostrar}`);

    if (eleccionHabitacion == null) {
        console.log('No quisiste alquilar ninguna habitacion. Vuelva pronto, o volve a empzar..')
        break;
    };

    if (eleccionHabitacion == "no".toLowerCase) {
        alert("Gracias por Visistarnos")
    };

    agregarHabitacionAlCarrito(parseInt(eleccionHabitacion));

};





function agregarHabitacionAlCarrito(id) {
    let habitacion = habitaciones.find(habitacion => habitacion.id === id);

    carrito.push(habitacion);
    console.log(`Este es tu carrito hasta el momento:\n`, carrito);
    console.log(precioTotal());
    //return habitacion.precio;
}

function filtrarPrecio(precio) {
    let filtrados = habitaciones.filter(habitacion => habitacion.precio <= precio);
    return filtrados;
}



