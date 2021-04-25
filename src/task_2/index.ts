/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function check_mail(target: Object, propertyKey: string): any{
    let email = "";
    let discriptor: PropertyDescriptor = {
        get: function()
        {
            return email;
        },
        set: function(newmail: string)
        {
            let mail_write = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/
            if (mail_write.test(newmail))
            {
                email = newmail; 
                console.log('email valid')  
                
            }
            else
            {
                throw "Invalid email"  
            }       
        }
    }
    return discriptor;
}

