/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function emailDecorator(target: Object, propertyKey: string | symbol): any {
    let email: string = "";
    let descriptor: PropertyDescriptor = {
        get: function () {
            return email;
        },
        set: function (newEmail: string) {
            if (newEmail.match(/[\w.-]+@[\w]+\.[\w]+/) && newEmail != email) {
                email = newEmail;
                console.log("Email Valid");
            }
            throw new Error("Invalid Email");
        }
    }
    return descriptor;
}

class Example {
    @emailDecorator
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
