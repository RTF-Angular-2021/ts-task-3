/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/
function validate<T>(type: T, prop: string){
    return function(target: Object, propertyKey: string | symbol) : any{
        let descriptor: PropertyDescriptor = {
            set: function(val: any){
                if (typeof val === typeof type)
                    this.value = val;
                else 
                    throw new Error();

                if (!(prop in val))
                    throw new Error();
            }
        }
    }
}
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

class Example1 {
    @validate(ValueExample1, "id")
    public propValueExample1: any;
 
    @validate(ValueExample2, "booleanProp")
    public propValueExample2: any;
}
