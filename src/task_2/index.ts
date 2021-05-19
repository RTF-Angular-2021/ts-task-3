function isValidEmail(target: Object, propertyKey: string): any {
    let email: string;
    let descriptor: PropertyDescriptor = {
        set(newEmail: string) {
            if (!/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/.test(newEmail))
                throw 'email is invalid'
            console.log('email is valid');
            email = newEmail;
        }
    }
    return descriptor;
}

class Example {
    @isValidEmail
    public email: string = "";
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg";
exampleInstance.email = "misha@mail.ru";
