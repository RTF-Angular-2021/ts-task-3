/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/

function validate(type: object, propertyKey: string) {
    return function validate(target: Object, propertyName: string){
      let descriptor: PropertyDescriptor = {
        get() {
            return type;
        }, 
        set(newType) {
            if (newType === type) {
                console.log('valid type');
                type = newType;
            } else {
                throw 'exception';
            }
            if (!propertyName[propertyKey]) {
                throw 'field is empty';
            }
            return type;
        }
    }

    Object.defineProperty(target, propertyName, {
        get: descriptor.get,
        set: descriptor.set
    }); 
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

  class Example {
      @validate(ValueExample1, "id")
      public propValueExample1: any;

      @validate(ValueExample2, "booleanProp")
      public propValueExample2: any;
  }