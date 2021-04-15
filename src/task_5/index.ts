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

function validate<T>(type: T, prop: string){
    return (target: Object, propertyKey: string | symbol):any => {
        return {
            set(value: any){
                if(getType(value) !== (type as Function).name)
                    throw new Error("incorrect type");
                else if(!value[prop])
                    throw new Error(`no property ${String(prop)}`);
            }
        }
    }
}

const getType = (obj: Object): string => obj.hasOwnProperty('id') ? "ValueExample1" : "ValueExample2";

class Example {
    @validate(ValueExample1, "id")
    public propValueExample1: any;

    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}
