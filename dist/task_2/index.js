/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function decorator(target, propertyKey) {
    let _val = this[propertyKey];
    let getter = function () {
        return _val;
    };
    // сеттер
    let setter = function (newVal) {
        try {
            if (validateEmail(newVal)) {
                _val = newVal;
            }
            else {
                throw new Error('not valid');
            }
        }
        catch (e) {
            console.log("Error: " + e.message);
        }
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
class Example {
    constructor() {
        this.email = "";
    }
}
__decorate([
    decorator,
    __metadata("design:type", String)
], Example.prototype, "email", void 0);
let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid
