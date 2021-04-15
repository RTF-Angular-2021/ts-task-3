/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/

function validator(target: Object, propertyKey: string | symbol) {
    let _val = this[propertyKey];

    let descriptor: PropertyDescriptor = {
        get() {
            return _val;
        },
        set(newValue: string) {
            _val = newValue;
            if (!new RegExp(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i).test(newValue)) {
                console.log('invalid email');
            } else {
                console.log('valid email');
            }
            return _val;
        }
    }

    Object.defineProperty(target, propertyKey, {
        get: descriptor.get,
        set: descriptor.set
    });

}

class Example1 {
    
    @validator
    public email: string;

}

let exampleInstance = new Example1();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid