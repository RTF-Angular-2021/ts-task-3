/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/

function validate<T, P extends keyof T>(type: new () => T, prop: P) {
    return (target: Object, propertyKey: string | symbol) : any => {
        let property: T;
        let descriptor: PropertyDescriptor = {
            get() {
                return property;
            },
            set(value: T) {
                if(!(value instanceof type)){
                    throw new Error(`Input value has another type: ${type.name}`)
                }
                if (!(prop in value)) {
                    throw new Error(`${prop} not exist in value`)
                }
                if(!value[prop])
                    throw new Error("Value must be defined")
                console.log("VALID")
                property = value;
            }
        }

        return descriptor;
    }
}

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

class ExampleT {
    @validate(ValueExample1, "id")
    public propValueExample1: any;
 
    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}

let quarta = new ExampleT();
let valueTest1 = new ValueExample1("Sharpest", 32);
let valueTest2 = new ValueExample2()
quarta.propValueExample1 = valueTest1;
quarta.propValueExample2 = valueTest2;
