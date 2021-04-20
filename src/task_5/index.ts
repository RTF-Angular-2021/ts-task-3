/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/
function validate<T>(type: new () => T, propKey: string) {
    return function(object: Object, propName: string): any {
        const descriptor: PropertyDescriptor = {
            set: function(value: T) {
                if(!(value as any)[propKey]){
                    throw Error('no set value');
                }
                if(!(value instanceof type)){
                    throw Error('invalid value');
                } else {
                    this.value = value;
                }
            }
        }
        return descriptor;
    }
}

class ValueExample1 {
    public value?: string;
    public id?: number;
}
 
class ValueExample2 {
    public undefinedProp: undefined;
    public booleanProp?: boolean;
}

class Example1 {
    @validate(ValueExample1, "id")
    public propValueExample1: any;
 
    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}
    
let ex1 = new Example1();
