/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
function valid(target: Object, propertyKey: string):any{
    let email = "";
    let descriptor:PropertyDescriptor = {
        get() {
            return email;
        },
        set(setEmail : string) {
            if (setEmail.match(/^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/g)){
                console.log("email valid");
                email = setEmail;
            }
            else throw "Invalid"
        }
    }
    return descriptor;
}

class Example {
    @valid
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
