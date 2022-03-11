//@ts-check

/**
 * @module Constantes
 */

/**
 * @description Número de rondas por partida
 * @type {number}
 * @constant
 */
const N_RONDAS = 10;

/**
 * @description Número de preguntas por ronda
 * @type {number}
 * @constant
 */
const N_PREGUNTAS = 4;

/**
 * @module Variables
 */

/**
 * @description Descripción de la variable x
 * @type {number}
 */
let x = 10;

/**
 * @description Punto en un espacio coordenado
 * @type {Object<string, number>}
 */
let punto = {
	x: 1,
	y: 2,
	z: 3,
};

/**
 * @description Nuevo usuario
 * @type {{id:number, nombre:string, edad:number}}
 */
let nuevoUsuario0 = {
	id: 0,
	nombre: "Nombre0",
	edad: 30,
};

/**
 * @description Define la estructura del objeto Usuario
 * @typedef {Object} Usuario
 * @property {number} id ID del usuario
 * @property {string} nombre Nombre del usuario
 * @property {number} edad Edad del usuario
 */

/**
 * @description Nuevo usuario
 * @type {Usuario}
 */
let nuevoUsuario1 = {
	id: 1,
	nombre: "Nombre1",
	edad: 18,
};

/**
 * @description Nuevo usuario
 * @type {Usuario}
 */
let nuevoUsuario2 = {
	id: 2,
	nombre: "Nombre2",
	edad: 20,
};

/**
 * @module Funciones
 */

/**
 * @description Crea e imprime la gráfica en pantalla
 * @todo Implementar la clase Grafica
 */
function imprimirGrafica() {
	// ts-expect-error Espera un error en el siguiente renglón
	//@ts-expect-error
	let grafica = new Grafica();

	// ts-ignore Ignora el siguinente renglón
	//@ts-ignore
	grafica.imprimir();
}

/**
 * @description Hace un mapeo lineal de un rango a otro. Usado 	para cuando el 100% del zoom cambia de rango
 * @param {number} value Valor a mapear
 * @param {number} low1 Valor mínimo del rango 1
 * @param {number} high1 Valor máximo del rango 1
 * @param {number} low2 Valor mínimo del rango 2
 * @param {number} high2 Valor máximo del rango 2
 * @returns Valor mapeado al nuevo rango
 * @example map_range( 1, 0, 100, 0, 200 ) // Regresa 2
 */
const map_range = (value, low1, high1, low2, high2) => low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

console.log(map_range(1, 10, 100, 0, 200));
