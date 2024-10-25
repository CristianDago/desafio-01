
// Declaración de variables

let number1: number;
let number2: number;

// Función

const Total = () => {
    // Números ingresados por usuario  
    do {
        number1 = Number(prompt("Ingrese el primer número (mayor a 0):"));
        number2 = Number(prompt("Ingrese el segundo número (mayor a 0 y diferente del primero):"));
        //  Validación de datos         
        if (number1 <= 0 || number2 <= 0 || number1 === number2) {
            console.error("Los números ingresados no son válidos. Por favor, ingrese números mayores a 0 y diferentes entre sí.");
        }

    } while (number1 <= 0 || number2 <= 0 || number1 === number2);

    //  Operaciones    
    const suma = number1 + number2;
    const resta = number1 - number2;
    const multiplicacion = number1 * number2;
    const division = number1 / number2;

    // Resultados 

    console.log(suma);
    console.log(resta);
    console.log(multiplicacion);
    console.log(division);
}

// Llamada de la función 
Total();

// Exportación
export const getTotal = () => {
    return Total;
}