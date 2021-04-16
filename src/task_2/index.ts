/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
function validateBox(target: Object, propertyKey: string | symbol): any {
    const regExp = (email: string) =>{
        return /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/.test(email)
    }
    let email: string;
    let descriptor: PropertyDescriptor = {
        set(newEmail: string) {
            debugger
            if (!regExp(newEmail)) {
                console.log("Invalid email")
                throw 'Invalid email.'
            }
            console.log('email valid');
            email = newEmail;
        }
    }

    return descriptor;
}

class Example {
    @validateBox
    public email: string = "";
}

let exampleInstance = new Example();
//exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
