/** Задача 4
 * Описать каким должен быть объект X, чтобы метод работал корректно
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

class C {
    public m: string;
    constructor(){
        this.m = "hello";
    }
}
let x = new C();
console.log(getProperty(x, "m")); 