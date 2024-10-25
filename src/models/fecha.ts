// Declaración de variable 
let userDays: number

// Constantes conversiones
const yearDays = 365;
const weekDays = 7;

// Función

const Date = () => {

    do {
        //Días ingresados por el usuario
        userDays = Number(prompt("Ingrese la cantidad de días:"));
        //Validación de datos     
        if (isNaN(userDays)) {
            console.error("Por favor, ingrese un número válido.");
        }
    } while (isNaN(userDays));

    // Cálculo Años
    let years = Math.floor(userDays / yearDays);
    userDays -= years * yearDays;

    // Cálculo Semanas
    let weeks = Math.floor(userDays / weekDays);
    userDays -= weeks * weekDays;

    // Días
    let dias = userDays;

    // Mostramos el resultado
    console.log(`${userDays} días equivalen a:`);
    console.log(`${years} años, ${weeks} semanas y ${dias} día(s).`);

}

// Llamada de la función
Date();

export const getDate = () => {
    return Date
}