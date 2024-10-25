// Se crea un arreglo para almacenar

let userNumbers: number[] = [];

// Función

const Numbers = () => {

    // Numeros ingresados por el usuario y lo agregamos al arreglo 

    for (let i = 0; i < 5; i++) {
        let number: number;
        do {

            // Validación si no es número error, si está vacío ingresa 0         
            let input = prompt(`Ingrese el número ${i + 1}:`);
            number = Number(input);
            if (isNaN(number)) {
                console.error("Por favor, ingrese un número válido.");
            }
        } while (isNaN(number));
        userNumbers.push(number);
    }

    // suma de todos los números
    let suma = 0;
    for (let numero of userNumbers) {
        suma += numero;
    }

    // Promedio de los números
    let promedio = suma / userNumbers.length;

    // Resultados

    console.log(userNumbers[0])
    console.log(userNumbers[1])
    console.log(userNumbers[2])
    console.log(userNumbers[3])
    console.log(userNumbers[4])

    console.log("La suma de los números es:", suma);
    console.log("El promedio de los números es:", promedio);

}

Numbers()

export const getNumbers = () => {
    return Numbers
}

// Llamada de la función 