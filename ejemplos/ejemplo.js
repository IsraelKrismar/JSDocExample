//@ts-check

/**
 * @module Constantes
 */

/**
 * Descripción de la constante x
 * @type {number}
 * @constant
 */
const x = 10;

/**
 * Descripción de la constante y
 * @type {number}
 * @constant
 */
const y = 10;

/**
 * @module Variables
 */

/**
 * Descripción de la variable x1
 * @type {number}
 */
let x1 = 10;

/**
 * Define la estructura del objeto Usuario
 * @typedef {Object} User
 * @property {number} id
 * @property {string} nombre
 * @property {number} edad
 */

/**
 * Nuevo usuario
 * @type {User}
 */
let newUser1 = {
	id: 1,
	nombre: "Nombre1",
	edad: 18,
};

/**
 * Nuevo usuario
 * @type {User}
 */
let newUser2 = {
	id: 2,
	nombre: "Nombre2",
	edad: 20,
};

/**
 * @module Funciones
 */

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

console.log(map_range(1, 10, 100, 0, 200));
