/** Задача 1
 * 1) Изучить принцип работы паттерна декоратор (https://refactoring.guru/ru/design-patterns/decorator)
 * 2) Для метода exec класса Calculator реализовать два классических декоратора:
 * 		2.1) DecorateRu - Оборачивает работу метода exec и выводит
 * 			 результат в виде строки на русском языке:
 * 			 результат сложения ${a} + ${b} = ${рассчитанное значение}
 *		2.2) DecorateEn - Оборачивает работу метода exec и выводит
 *			 результат в виде строки на английском языке:
 *			 result of the addition operation ${a} + ${b} = ${рассчитанное значение}
*/

function DecorateRu(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        let returnValue = originalMethod.apply(this);
        console.log(`результат сложения ${this.a} + ${this.b} = ${returnValue}`)
        return returnValue;
    }
}

function DecorateEn(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        let returnValue = originalMethod.apply(this);
        console.log(`result of the addition operation ${this.a} + ${this.b} = ${returnValue}`)
        return returnValue;
    }
}

class Calculator {
    protected a: number = 0;
    protected b: number = 0;

    constructor(a: number, b: number) {
        if (!!a) {
            this.a = a;
        }
        if (!!b) {
            this.b = b;
        }
    }
    @DecorateRu
    @DecorateEn
    public exec(): string {
        return (this.a + this.b).toString();
    }
}