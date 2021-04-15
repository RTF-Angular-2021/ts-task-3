/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function check_mail(target: object, propertyKey: string | symbol): any{
    let email: string
    let discriptor: PropertyDescriptor = {
        get: function(){
            return email
        },
        set: function(newmail: string){
            if (newmail.match(/[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]{2,4}/)){
                email = newmail;
                console.log("email valid")
            }
            throw "Invalid email"
        }

    }
}

