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
        text: `Su reserva por ${estadia} días se realizó con éxito`,
        icon: `success`,
        confirm: `OK`,
        button: false,
        timer: 1000,
    });
});

const howManyDays = (input, output) => {
    const i = Interval.fromDateTimes(input, output);

    return i;
};
