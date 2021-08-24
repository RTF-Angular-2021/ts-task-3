var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Задача 5
 * Реализовать декоратор с шаблонным типом, который добавляется к полю класса.
 * Декоратор должен выполнять 2 функции:
 * 		1) Проверять соответствие устанавливаемого значения типу, который передан в декоратор.
 * 		   Если тип не верный, то генерируется эксепшен.
 * 		2) Проверять у передаваемого объекта наличие заполненного поля.
 * 		   Если поле не заполнено, то генерируется эксепшен.
*/
import 'reflect-metadata';
function validate(ValueExample, param) {
    let newClass = new ValueExample1();
    return function (target, propertyName) {
        // to get the design type of the property from the object
        var t = Reflect.getMetadata("design:type", target, propertyName);
        console.log(`${propertyName} type: ${t.name}`); // name type: String       
    };
}
class ValueExample1 {
    constructor(value, id) {
        this.value = value;
        this.id = id;
    }
}
class ValueExample2 {
    constructor(undefinedProp, booleanProp) {
        this.undefinedProp = undefinedProp;
        this.booleanProp = booleanProp;
    }
}
class Exampl {
}
__decorate([
    validate(ValueExample1, "id"),
    __metadata("design:type", Object)
], Exampl.prototype, "propValueExample1", void 0);
__decorate([
    validate(ValueExample2, "booleanProp"),
    __metadata("design:type", Object)
], Exampl.prototype, "propValueExample2", void 0);
