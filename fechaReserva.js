const datosTotal = JSON.parse(localStorage.getItem("totalReserva"));

// Luxon
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

    let precio = document.getElementById("camas").value;
    
    const total = estadia * precio;

    const totalJSON = JSON.stringify(total);
    localStorage.setItem("totalReserva", totalJSON);


    swal({
        title: `Genial`,
        text: `Su reservacion por ${estadia} días se realizó con éxito. 
        Total a pagar: $ ${total}`,
        icon: `success`,
        confirm: `OK`,
    });

});



const howManyDays = (input, output) => {
    const i = Interval.fromDateTimes(input, output);

    return i;
};


const habitaciones = [
    {id: 1, habitacion: "Simple $100", precio: 100},
    {id: 2, habitacion: "Doble $200", precio: 200},
    {id: 3, habitacion: "Triple $300", precio: 300},
];


const rederizarCamas = () => {
    let elegirCamas = document.getElementById("camas");

    habitaciones.forEach((p) =>{
        let camasHTML =`
        <option value=${p.precio}>${p.habitacion}</option>
        `
        elegirCamas.innerHTML += camasHTML
    })
}

rederizarCamas();

