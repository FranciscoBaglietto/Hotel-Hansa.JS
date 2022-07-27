// Luxon
// clases de Bootstrap

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const dateInput = document.getElementById("date-entrada");
const dateOutput = document.getElementById("date-salida");
const calcular = document.getElementById("calc");

calc.addEventListener("click", (e) => {
    e.preventDefault();

    const ingreso = dateInput.value;
    const ingresoDate = luxon.DateTime.fromISO(dateInput.value);

    const egreso = dateOutput.value;
    const egresoDate = luxon.DateTime.fromISO(dateOutput.value);

    console.log(ingreso, egreso);
    console.log(ingresoDate);

    const interval = howManyDays(ingresoDate, egresoDate);

    let estadia = interval.length("days");
    swal({
        title: `Genial`,
        text: `Su reservacion por ${estadia} días se realizó con éxito`,
        icon: `success`,
        confirm: `OK`,
        
    });
});

const howManyDays = (input, output) => {
    const i = Interval.fromDateTimes(input, output);

    return i;
};


const habitaciones = [
    {id: 1, habitacion: "Simple", precio: 100},
    {id: 2, habitacion: "Doble", precio: 200},
    {id: 3, habitacion: "Triple", precio: 300},
];


const rederizarCamas = () => {
    let elegirCamas = document.getElementById("camas");

    habitaciones.forEach( (p) =>{
        let camasHTML =`
        <option>${p.habitacion}</option>
        `
        elegirCamas.innerHTML += camasHTML
    })
}

rederizarCamas();

