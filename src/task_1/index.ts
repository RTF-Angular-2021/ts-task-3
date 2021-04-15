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

    public exec(): string {
        return (this.a + this.b).toString();
    }
}

class decorateRu extends Calculator {
    public exec(): string {
        return `результат сложения ${this.a} + ${this.b} = ${super.exec()}`
    }
}

class decorateEn extends Calculator {
    public exec(): string {
        return `result of the addition operation ${this.a} + ${this.b} = ${super.exec()}`
    }
}