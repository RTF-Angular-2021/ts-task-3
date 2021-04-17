/** Задача 3
 * Ниже представлен код в котором, пропущены участки кода.
 * Требуется дописать участки кода так, чтобы программа компилировалась.
 * Использование типа any допустимо только в Control<any>.
 * Переопределенные методы getValue и setValue в классах TextBox и SelectBox должны
 * принимать и возвращать только свой результирующий тип (string и SelectItem)
 * Методы register и getInstance класса FactoryControl. Должны принимать и возвращать только те типы,
 * которые унаследованы от класса Control<T>.
*/

/**Базовый класс для контролов */
abstract class Control<T> {
    public name: string = "";

    protected value: T | undefined;
    /**взять значение из контрола */
    public abstract getValue(): T | undefined;
    /**установить значение в контрол */
    public abstract setValue(val: T): void;
}
/**Класс описывает TextBox контрол */
class TextBox extends Control<string> {
    protected val: string | undefined
    public getValue(): string | undefined{
        return this.val;
    }
    public setValue(val: string): void{
        this.val = val;
    } 
}
/**value контрола selectBox */
class SelectItem {
    public value: string | undefined;
    public id: number | undefined;
}

/**Класс описывает SelectBox контрол */
class SelectBox extends Control<SelectItem> {
    protected val: SelectItem | undefined;
    public getValue(): SelectItem | undefined{
        return this.val;
    }
    public setValue(val: SelectItem): void{
        this.val = val;
    }
}

class Container {
    public instance: Control<any>;
    public type: string | undefined;
}

/**Фабрика которая отвечает за создание экземпляров контролов */
class FactoryControl {
    /**Список соотношений тип - инстанс типа */
    private _collection: Array<Container>;

    constructor() {
        this._collection = [];
    }

    public register<T extends Control<any>>(type: new () => T){
        const typeInstance: T = new type();
        if (this.existType(typeInstance.name)) {
            throw new Error("Already exists")
        }
        if (!(typeInstance instanceof Control)){
            throw new Error("Invalid type");
            
        }
    }

    public getInstance<T>(type: new () => Control<T>): Control<T>{
        const typeInstance: Control<T> = new type();
        const instances = this._collection.filter(g => g.type === typeInstance.name);
        if (instances.length > 0) {
            return instances[0].instance;
        }
        throw Error("Instance not found");
    }

    private existType(type: string) {
        return this._collection.filter(g => g.type === type).length > 0;
    }
}

const factory = new FactoryControl();
factory.register(SelectBox);

const selectBoxInstance = factory.getInstance(SelectBox);

selectBoxInstance.setValue("sdfsdf") // компилятор TS не пропускает
selectBoxInstance.setValue(new SelectItem()) // компилятор TS пропускает
