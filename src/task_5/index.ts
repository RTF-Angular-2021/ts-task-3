/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/

class ValueExample1 {
    public value: string | undefined;
    public id: number | undefined;
    public constructor(value?: string, id?: number) {
        this.value = value;
        this.id = id;
    }
}

class ValueExample2 {
    public undefinedProp: undefined;
    public booleanProp: boolean | undefined;
    public constructor(undefinedProp?: undefined, booleanProp?: boolean) {
        this.undefinedProp = undefinedProp;
        this.booleanProp = booleanProp;
    }
}

class Example {
    @validate(ValueExample1, "id")
    public propValueExample1: any;

    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}

function validate<TFunction>(type: TFunction, property: string) {
    return (target: Object, propertyKey: string) => {
        let propertyValue: TFunction;
        let descriptor: PropertyDescriptor = {
            get: function () {
                return propertyValue;
            },
            set: function (newValue: TFunction) {
                if (property in newValue) {
                    propertyValue = newValue;
                } else {
                    throw new Error("Invalid Value");
                }
            }
        }
        Object.defineProperty(target, propertyKey, descriptor);
    }
}
