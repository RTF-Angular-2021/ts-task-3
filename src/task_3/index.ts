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

    protected abstract value: T|undefined;
    /**взять значение из контрола */
    public abstract getValue(): T|undefined;
    /**установить значение в контрол */
    public abstract setValue(val: T): void;
}
/**Класс описывает TextBox контрол */
class TextBox extends Control<string> {
    protected value: string|undefined;

    public getValue(): string|undefined {
        return this.value;
    }
    public setValue(val: string): void {
        this.value = val;
    }
}
/**value контрола selectBox */
class SelectItem {
    public value: string|undefined;
    public id: number|undefined;
}

/**Класс описывает SelectBox контрол */
class SelectBox extends Control<SelectItem> {
    protected value: SelectItem|undefined;
    
    public getValue(): SelectItem|undefined {
        return this.value;
    }
    public setValue(val: SelectItem): void {
        this.value = val;
    }
}

class Container {
    public instance!: Control<any>;
    public type: string|undefined;
}

/**Фабрика которая отвечает за создание экземпляров контролов */
class FactoryControl {
    /**Список соотношений тип - инстанс типа */
    private _collection: Array<Container>;

    constructor() {
        this._collection = [];
    }

    public register<T extends Control<any>>(type: new () => T): void {      
        let instance = new type();

        if (!(instance instanceof Control))
            throw 'Invalid args.';
        
        const instanceType: string = instance.constructor.prototype.constructor.name;
        if (this._collection.filter(e => e.type === instanceType).length !== 0) {
            throw 'Already exists.';
        }

        this._collection.push({ type: instanceType, instance: instance});
        console.log(this._collection);
    }

    public getInstance<K>(type: new () => Control<K>): Control<K> {
        const instanceType = type.prototype.constructor.name;
        const instance = this._collection.filter(e => e.type === instanceType)[0].instance

        return instance;
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

