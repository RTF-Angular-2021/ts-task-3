/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function validateEmail(target: Object, propertyKey: string | symbol):any {
    let descriptor: PropertyDescriptor = {
        set(value: string){
            if(value.match(/@mail/g))
                console.log('e-mail valid');
            else
                throw new Error('incorrect e-mail');
        }
    }
    return descriptor;
}


class Example1 {
    @validateEmail
    public email: string;
}

let exampleInstance = new Example1();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
