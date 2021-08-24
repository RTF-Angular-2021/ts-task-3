/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function validateEmail(email: string): boolean {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function decorator(target: Object, propertyKey: string): any {

    let _val = this[propertyKey]
    let getter = function (): string {
        return _val;
    };

    // сеттер
    let setter = function (newVal: string): void {
        try {
            if (validateEmail(newVal)) {
                _val = newVal;
            } else {
                throw new Error('not valid')
            }
        } catch (e) {
            console.log("Error: " + e.message);

        }
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

class Example {
    @decorator
    public email: string = "";
}

let exampleInstance = new Example();

exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
