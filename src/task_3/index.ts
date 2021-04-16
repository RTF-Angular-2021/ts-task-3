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
    public name: string;

    protected value: T;

    constructor(value: T, name: string = '') {
        this.name = name;
        this.value = value;
    }
    /**взять значение из контрола */
    public abstract getValue(): T;
    /**установить значение в контрол */
    public abstract setValue(val: T): void;
}
/**Класс описывает TextBox контрол */
class TextBox extends Control<string> {
    constructor(value: string = '', name?: string){
        super(value, name);
    }

    public getValue(): string {
        return this.name;
    }
    public setValue(val: string): void {
        if (val) {
            this.name = val;
        }
    }
}
/**value контрола selectBox */
class SelectItem {
    public value: string;
    public id: number;

    constructor(value: string = '', id: number = 0) {
        this.value = value;
        this.id = id;
    }
}

/**Класс описывает SelectBox контрол */
class SelectBox extends Control<SelectItem> {
    public getValue(): SelectItem {
        return this.value;
    }
    public setValue(val: SelectItem): void {
        if (val) {
            this.value = val;
        }
    }
}

class Container {
    public instance: Control<any>;
    public type: string;

    constructor(instance: Control<any>, type: string) {
        this.instance = instance;
        this.type = type;
    }
}

/**Фабрика которая отвечает за создание экземпляров контролов */
class FactoryControl {
    /**Список соотношений тип - инстанс типа */
    private _collection: Array<Container>;

    constructor() {
        this._collection = [];
    }

    public register(type: Function) {
        const typeStr = type.name;
        if (!this.existType(typeStr)) {
            this._collection.push(new Container(type(), typeStr))
        }
    }

    public getInstance(type: Function): Control<any> {
        const typeStr = type.name;
        const container = this._collection.find(x => x.type === typeStr);
        if (container){
            return container.instance;
        }
        this.register(type);
        return this._collection[this._collection.length - 1].instance;
    }

    private existType(type: string): boolean{
        return this._collection.filter(g => g.type === type).length > 0;
    }
}

const factory = new FactoryControl();
factory.register(SelectBox);

const selectBoxInstance = <SelectBox>factory.getInstance(SelectBox);

//selectBoxInstance.setValue("sdfsdf") // компилятор TS не пропускает
selectBoxInstance.setValue(new SelectItem()) // компилятор TS пропускает