/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

class Example {
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid

function validateMail(target: Object, propertyKey: string | symbol): any {
    let email = ""
    let descriptor: PropertyDescriptor = {
        get() {
            return email
        },
        set(newEmail: string) {
            if (newEmail !== "" && !/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/.test(newEmail)) {
                throw 'Invalid email.'
            }
            console.log('email valid');
            email = newEmail;
        }
    }

    return descriptor;
}
