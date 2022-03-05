//@ts-check

/** @module Variables globales */

/**
 * Valor booleano que indica si se usa local storage
 * @type {boolean}
 */
var banderaLocalStorage = true;

/**
 * Variable temporal. Se le da el valor de PREFIJO
 * @type {string}
 */
var nombreObjeto = null;

/**
 * Array temporal usado para hacer operaciones con su contenido antes de pasarlo a un array definitivo
 * @type {number[]}
 */
var array = null;

/** @module Funciones y procedimientos*/

/**
 * Genera un arreglo desordenado con valores en el rango de [ 0, longitud del vector de entrada - 1 ]
 * @param {any[]} arreglo Arreglo cuya longitud define la longitud del vector de salida
 * @returns Arreglo desordenado con valores en el rango de [ 0, longitud del vector de entrada - 1 ]
 */
function aleatorioArreglo(arreglo) {
	/**
	 * Arreglo de salida
	 * @type {number[]}
	 */
	var vector = null;

	if (banderaLocalStorage) {
		nombreObjeto = PREFIJO;
		array = generateNumericArray(arreglo);
		generarArreglo(); // Crea y verifica los elementos en el local storage
		vector = creaArregloNuevo(); // Crea un arreglo aleatorio cuyo primer elemento sea el elementoActual del local storage
	} else {
		vector = generateNumericArray(arreglo);
		mezclar(vector);
	}

	return vector;
}

/**
 * Genera un arreglo ordenado de rango [ 0, longitud del vector de entrada - 1 ]
 * @param {any[]} arreglo Arreglo cuya longitud define la longitud del vector de salida
 * @returns Arreglo ordenado de rango [ 0, longitud del vector de entrada - 1 ]
 */
function generateNumericArray(arreglo) {
	/**
	 * Arreglo que contendrá los números
	 * @type {number[]}
	 */
	var array = [];

	// Agregamos la cantidad de números correspondiente a la longitud del arreglo
	for (let index = 0; index < arreglo.length; index++) {
		array.push(index);
	}

	return array; // Regresamos el arreglo
}

/**
 * Mezcla las posiciones de un arreglo
 * @param {number[]} bar Arreglo a mezclar
 */
function mezclar(bar) {
	/**
	 * Último índice del arreglo
	 * @type {number}
	 */
	var m = bar.length - 1;

	for (let i = m; i > 1; i--) {
		let alea = Math.floor(i * Math.random());
		let temp = bar[i];
		bar[i] = bar[alea];
		bar[alea] = temp;
	}
}
