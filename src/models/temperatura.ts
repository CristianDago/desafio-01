
// Declaración de variable - 

let degreesCelsius: number;

// Función

const Degress = () => {

    do {
        //Temperatura ingresada por el usuario
        degreesCelsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
        //Validación de datos     
        if (isNaN(degreesCelsius)) {
            console.error("Por favor, ingrese un número válido.");
        }
    } while (isNaN(degreesCelsius));

    // Conversión a Kelvin
    let degreesKelvin = degreesCelsius + 273.15;

    // Conversión a Fahrenheit
    let degreesFahrenheit = (degreesCelsius * 9 / 5) + 32;

    // Mostrar resultados

    console.log(`${degreesKelvin} grados Kelvin`);
    console.log(`${degreesFahrenheit} grados Fahrenheit`);
}

// Llamada de la función
Degress();

// Exportación
export const getDegress = () => {
    return Degress;
}