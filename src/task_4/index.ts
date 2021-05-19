function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

//Здесь могло бы быть что угодно, но почему бы не оставить фамилию замечательного человека?
const x = {
    m : "Обабков"
}

console.log(getProperty(x, "m")); 