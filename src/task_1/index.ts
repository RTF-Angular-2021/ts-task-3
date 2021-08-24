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
    descriptor.value = function(...args) {
        let returnValue = originalMethod.apply(this, args)
        return `результат сложения ${args[0]} + ${args[1]} = ${returnValue}`
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
    public exec(): string {
        return (this.a + this.b).toString();
    }
}
