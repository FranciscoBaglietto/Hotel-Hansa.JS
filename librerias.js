// Agregando SweetAlert

const btnAgregar = document.getElementById("btn-agregar")

btnAgregar.addEventListener( "click", () => {
    // llamar la libreria con swal
    swal({
        title: `Genial`,
        text: `Tu actividad se añadio al carrito`,
        icon: `success`,
        confirm: `OK`,
        button: false,
        timer: 1000
    })
    
});

// Luxon
// clases de Bootstrap
const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const dateInput = document.getElementById("date-entrada");
const dateOutput = document.getElementById("date-salida"); 
const calcular = document.getElementById("calc");

// escucahar evento change = cuando el usuario elija una fecha especifica escuchamos un cambio en el elemento


calc.addEventListener("click", (e) => {

    e.preventDefault();

    const ingreso = dateInput.value;
    const ingresoDate = luxon.DateTime.fromISO(dateInput.value);
    
    const egreso = dateOutput.value;
    const egresoDate = luxon.DateTime.fromISO(dateOutput.value);

    console.log(ingreso, egreso);
    console.log(ingresoDate);

    const interval = howManyDays(ingresoDate, egresoDate);

    console.log(interval.length("days"));

});

const howManyDays = (input, output) => {
    const i = Interval.fromDateTimes(input, output);

    return i;
};


const btnEliminar = document.getElementById("btn-eliminar");

btnEliminar.addEventListener( "click", () => {
    swal({
        title: `Esta seguro de eliminar Habitacion`,
        icon: `warning`,
        button: true,
        timer: 1000,
        dangerMode:true
    }).then( result =>{//para esperar respuesta del usuario
        if (result) {
            swal({
                title:`Borrado`,
                icon: `success`,
                text: `La habitación ha sido borrada con éxito`
            })
        }
    })
});




