/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
function decorEmail(target: object, propertyKey: string): any {
    let regExp = /[a-z]+@[a-z]+\.[a-z]+/gi;
    let property: PropertyDescriptor = {
        set: (value: string) => {
            if (regExp.test(value)) {
                console.log("e-mail valid");
            } else {
                console.log("Error");
            }
        }
    };
    return property;
}
class Example {
    @decorEmail
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
