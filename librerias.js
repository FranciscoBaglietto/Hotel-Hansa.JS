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


// Luxon
// clases de Bootstrap
const DateTime = luxon.DateTime();
const Interval = luxon.Interval();

const inputIngreso = document.getElementById("date-entrada");
const inputSalida = document.getElementById("date-salida"); 

// escucahar evento change = cuando el usuario elija una fecha especifica escuchamos un cambio en el elemento
inputIngreso.addEventListener( "change", () => {
    //Para saber el dia que eligio
    const fechaEntrada = inputIngreso.value;
    const fechaEntradaArray = fechaEntrada.split("-");
    const [ año, mes, dia] = fechaEntradaArray;

    const a = Number(año);
    const m = Number(mes);
    const d = Number(dia);

    const interval = cuantosDias(a, m, d);

});
inputSalida.addEventListener("change", () => {
    const fechaSalida = inputSalida.value;

})

// cuantos dias de una fecha a otra
const cuantosDias = (año, mes, dias) => {
    const now = DateTime.now();
    

}




