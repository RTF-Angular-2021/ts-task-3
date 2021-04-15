/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/

class ValueExample1 {
    public value: string;
    public id: number;
	public constructor(value?: string, id?: number) {
		this.value = value;
		this.id = id;
	}
}
 
class ValueExample2 {
    public undefinedProp: undefined;
    public booleanProp: boolean;
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

function validate<T>(type: T, prop: string) {
    return (target: Object, propertyKey: string | symbol) : any => {
        let property: T;
        let descriptor: PropertyDescriptor = {
            get() {
                return property;
            },
            set(value: T) {
                if (!(prop in value)) {
                    throw `value does not contain prop ${prop}`
                }

                property = value;
            }
        }

        return descriptor;
    }
}

let ex = new Example;

ex.propValueExample1 = {}; // вызовет ошибку
ex.propValueExample1 = {id: 1}; // не вызовет ошибку