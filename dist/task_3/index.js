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
class Control {
    constructor() {
        this.name = "";
    }
}
/**Класс описывает TextBox контрол */
class TextBox extends Control {
    getValue() {
        return this.value;
    }
    setValue(val) {
        this.value = val;
    }
}
/**value контрола selectBox */
class SelectItem {
}
/**Класс описывает SelectBox контрол */
class SelectBox extends Control {
    getValue() {
        return this.value;
    }
    setValue(val) {
        this.value = val;
    }
}
class Container {
}
/**Фабрика которая отвечает за создание экземпляров контролов */
class FactoryControl {
    constructor() {
        this._collection = [];
    }
    register(type) {
        if (!this.existType(typeof type)) {
            this._collection.push({ instance: type, type: typeof type });
        }
    }
    getInstance(type) {
        return this._collection.find(item => item.instance === type.prototype).instance;
    }
    existType(type) {
        return this._collection.filter(g => g.type === type).length > 0;
    }
}
const factory = new FactoryControl();
factory.register(SelectBox);
const selectBoxInstance = factory.getInstance(SelectBox);
// selectBoxInstance.setValue("sdfsdf") // компилятор TS не пропускает
// selectBoxInstance.setValue(new SelectItem()) // компилятор TS пропускает
