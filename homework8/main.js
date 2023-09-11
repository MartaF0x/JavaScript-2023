// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(name, surname, email, phone) {
    this.id = Math.trunc(Math.random() * (1000000000000000 - 100000000000000) + 100000000000000);
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
let users = [];
users.push(new User('Margo', 'Lett', 'samjkj2j@gmail.com', '38768419801'));
users.push(new User('Joy', 'White', 'sajhb27@gmail.com', '56687989743'));
users.push(new User('Liam', 'Akers', 'ck685hgj@gmail.com', '56687989743'));
users.push(new User('Emma', 'Hole', '43rfbcdj@gmail.com', '56687989743'));
users.push(new User('William', 'Popet', 'm_75bvaj@gmail.com', '56687989743'));
users.push(new User('Henry', 'Dengate', 'lsxn777@gmail.com', '56687989743'));
users.push(new User('Sophia', 'Distin', 'qd#rqgl@gmail.com', '56687989743'));
users.push(new User('Amelia', 'Moorey', 'zjbn467@gmail.com', '56687989743'));
users.push(new User('Luna', 'Ledstone', 'ajh&sz00@gmail.com', '56687989743'));
users.push(new User('Anna', 'Yerker', 'aaaw4e5m@gmail.com', '56687989743'));
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let usersEvenId = users.filter(user => +user.id % 2 == 0);
console.log(usersEvenId);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let usersSortById = users.sort((u1, u2) => {
    return u1.id - u2.id
});
console.log(usersSortById);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(name, surname, email, phone, order) {
        this.id = Math.trunc(Math.random() * (1000000000000000 - 100000000000000) + 100000000000000);
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
clients.push(new Client('Margo', 'Lett', 'samjkj2j@gmail.com', '38768419801', ['dgjh', 'sjdgyhdf']));
clients.push(new Client('Joy', 'White', 'sajhb27@gmail.com', '56687989743', []));
clients.push(new Client('Liam', 'Akers', 'ck685hgj@gmail.com', '56687989743', ['jgddtyo']));
clients.push(new Client('Emma', 'Hole', '43rfbcdj@gmail.com', '56687989743', ['aeguhi', 'ayguyggfw8', 'xjbnaiuh']));
clients.push(new Client('William', 'Popet', 'm_75bvaj@gmail.com', '56687989743', ['skuth', 'mxfbhauye', 'rwutygb', 'esubhgsuy', 'fjvbhywegfayg']));
clients.push(new Client('Henry', 'Dengate', 'lsxn777@gmail.com', '56687989743', ['dmnzbdr']));
clients.push(new Client('Sophia', 'Distin', 'qd#rqgl@gmail.com', '56687989743', ['qwterfy', 'riuyihb', 'oturwhhb', 'cmznbkdsf']));
clients.push(new Client('Amelia', 'Moorey', 'zjbn467@gmail.com', '56687989743', ['zmndba', 'drgdf']));
clients.push(new Client('Luna', 'Ledstone', 'ajh&sz00@gmail.com', '56687989743', ['areug', 'akeugh', 'nmxbeur', 'dmhzber', 'qrwdfyfc', 'afbhjyg']));
clients.push(new Client('Anna', 'Yerker', 'aaaw4e5m@gmail.com', '56687989743', ['adh', 'uetyau', 'srkugh']));
// - Взяти масив (Client [] з попереднього завдання).то по зростанню. (sort)
//
let clientsSortByCountСommodity = clients.sort((c1, c2) => {
    return c1.order?.length - c2.order?.length
});
console.log(clientsSortByCountСommodity);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, yearOfManufacture, maxSpeed, сapacity) {
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.сapacity = сapacity;
}

let car = new Car('mitsubishi lancer', '2017', 160, 59)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`we drive at a speed of ${this.maxSpeed} per hour`)
};
car.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    for (const carKey in car) {
        if (typeof car[carKey] !== "function"){
            console.log(`${carKey} - ${car[carKey]}`);
        }
    }
}
car.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
}
car.increaseMaxSpeed(170);
console.log(car.maxSpeed);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.yearOfManufacture = newValue;
}
car.changeYear(2018);
console.log(car.yearOfManufacture);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}
car.addDriver({name: 'Leo', age: 25});
console.log(car.driver);
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
    constructor(model, yearOfManufacture, maxSpeed, сapacity) {
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.сapacity = сapacity;
    }
}
let car2 = new CarClass('toyota corolla','2015', 120, 49);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
CarClass.prototype.drive = function () {
    console.log(`we drive at a speed of ${this.maxSpeed} per hour`)
};
car2.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
CarClass.prototype.info = function () {
    for (const carKey in car) {
        if (typeof car[carKey] !== "function"){
            console.log(`${carKey} - ${car[carKey]}`);
        }
    }
}
car2.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
CarClass.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
}
// -- changeYear (newValue) - змінює рік випуску на значення newValue
CarClass.prototype.changeYear = function (newValue) {
    this.yearOfManufacture = newValue;
}
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
CarClass.prototype.addDriver = function (driver) {
    this.driver = driver;
}
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella('Anna', 23, 37),
    new Cinderella('Emma', 35, 39),
    new Cinderella('Olivia', 19, 36),
    new Cinderella('Mia', 20, 37),
    new Cinderella('Emily', 30, 38),
    new Cinderella('Violet', 25, 40),
    new Cinderella('Nora', 27, 38),
    new Cinderella('Lily', 31, 36),
    new Cinderella('Zoe', 29, 37),
    new Cinderella('Natalie', 18, 35)

]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

let prince = new Prince('Philip', 26, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let arrayWifes = [];
for (const cinderella of cinderellas) {
    if (cinderella.footSize == prince.shoeSize) {
        arrayWifes.push(cinderella);
    }
}
if (arrayWifes) {
    prince.wife = arrayWifes[0];
    for (const arrWife of arrayWifes) {
        if (Math.abs(arrWife.age - prince.age) < Math.abs(prince.wife.age - prince.age)) {
            prince.wife = arrWife;
        }

    }
}
console.log(prince.wife);
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
prince.wife = cinderellas.find(cinderella => cinderella.footSize == prince.shoeSize);
console.log(prince.wife);