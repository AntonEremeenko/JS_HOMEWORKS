'use strict';

function convertTemperature() {
    const temperature = prompt('Enter a number');
    const temperatureNum = Number(temperature);

    if (typeof temperatureNum !=='number') {
        alert('Please enter a valid number.');
        return convertTemperature();
    }

    const celsiusOrFahrenheit = prompt('Enter C (Celsius) or F (Fahrenheit)');

    if (celsiusOrFahrenheit.toUpperCase() === 'C') {
        const fahrenheit = 9 / 5 * temperatureNum + 32;
        alert(`${fahrenheit}F`);
    } else if (celsiusOrFahrenheit.toUpperCase() === 'F') {
        const celsius = 5 / 9 * (temperatureNum - 32);
        alert(`${celsius}C`);
    } else {
        alert('Please enter C for Celsius or F for Fahrenheit.');
    }
}
convertTemperature();