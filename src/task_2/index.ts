/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
function emailCheck(target: Object, propertyKey: string): any {
    let email = "";
    let descriptor: PropertyDescriptor = {
        get: function(){
            return email;
        },
        set: function(newEmail: string) {
            let reg = /\w*@[a-z]+\.[a-z]{2,}/;
            if (reg.test(newEmail)){
                email = newEmail;
                console.log("email valid")
            }
            else{
                throw new Error();
            }
        }
    };
    return descriptor;
}

class Example {
    @emailCheck
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid