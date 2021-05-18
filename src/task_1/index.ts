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

interface ICalculator {
    exec(): string;
}

class Calculator implements ICalculator{
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

class BaseDecorator implements ICalculator
{
    protected calculator: ICalculator
    protected a: number = 0;
    protected b: number = 0;

    constructor(calc: ICalculator) {
        this.calculator = calc;
    }

    public exec(): string
    {
        return this.calculator.exec();
    }
}

class DecorateEn extends BaseDecorator
{
    public exec(): string
    {
        return `Result of the addition operation ${super.exec()}`;
    }
}

class DecorateRu extends BaseDecorator
{
    public exec(): string
    {
        return `Результат сложения ${super.exec()}`;
    }
}

//Test region

let q = new Calculator(15, 78);
let ruCalc = new DecorateRu(q);
let enCalc = new DecorateEn(q);
console.log(`${q.exec()} \n ${enCalc.exec()} \n ${ruCalc.exec()}`)
