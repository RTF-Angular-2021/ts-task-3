/** Задача 4
 * Описать каким должен быть объект X, чтобы метод работал корректно
*/
function getProperty(obj, key) {
    return obj[key];
}
const x = {
    manufacturer: "Toyota",
    m: "Camry",
    year: 2014,
};
console.log(getProperty(x, "m"));
