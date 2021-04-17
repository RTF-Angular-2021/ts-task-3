/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
function validDecorator(target: Object, propertyKey: string):any{
    let descriptor:PropertyDescriptor = {
        set(email : string) {
            if (email.match(/^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/g)){
                console.log("email valid");
            }
            else throw "Invalid"
        }
    }
    return descriptor;
}

class Example{
    @validDecorator
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
