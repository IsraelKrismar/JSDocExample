//@ts-check

/**
 * X
 * @type {number}
 * @constant
 */
const x = 10;

/**
 * Y
 * @type {number}
 * @constant
 */
const y = 10;

/**
 * X1
 * @author Israel
 * @type {number}
 */
let x1 = 10;

/**
 * Hace un mapeo lineal de un rango a otro. Usado 	para cuando el 100% del zoom cambia de rango
 * @param {number} value Valor a mapear
 * @param {number} low1 Valor mínimo del rango 1
 * @param {number} high1 Valor máximo del rango 1
 * @param {number} low2 Valor mínimo del rango 2
 * @param {number} high2 Valor máximo del rango 2
 * @returns Valor mapeado al nuevo rango
 */

const map_range = (value, low1, high1, low2, high2) => low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

console.log(map_range(14552, 10, 100, 56, 56));
