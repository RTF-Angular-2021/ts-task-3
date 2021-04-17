/** Задача 4
 * Описать каким должен быть объект X, чтобы метод работал корректно
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const x = { "year": 2016 };

console.log(getProperty(x, "year")); 