//----------------------------------------------Arrays and objects----------------------------------------------------
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['srting0', true, 0, 5950, -1000000, "tdrtr lokocswaew", 2, false, 'this is biiiiiiiig string', 9];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[arr.length - 1]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Pale Horse',
    pageCount: 284,
    genre: 'Crime'
}
let book2 = {
    title: 'Black  Council',
    pageCount: 526,
    genre: 'Historical novel'
}
let book3 = {
    title: 'I see you are interested in the dark',
    pageCount: 664,
    genre: 'Psychological detective story'
}
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
book1.authors = [{name: 'Agatha Christie', age: 71}];
book2.authors = [{name: 'Panteleimon Kulish', age: 38}];
book3.authors = [{name: 'Illarion Pavlyuk', age: 43}];
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Margo', username: 'MStyle', password: '04589766'},
    {name: 'Joy', username: 'FGtjs', password: '49802031'},
    {name: 'Liam', username: 'AebGhrn', password: 'Liam6567'},
    {name: 'Emma', username: 'Kenguru', password: 'Kenguru5'},
    {name: 'William', username: 'Allias', password: 'All90900'},
    {name: 'Henry', username: 'Horizont', password: 'hori_333'},
    {name: 'Sophia', username: 'Blue_eyes', password: '#8495796'},
    {name: 'Amelia', username: 'SafeSelf', password: 'Safe45_@'},
    {name: 'Luna', username: 'WhiteTail', password: 'auuuM00N'},
    {name: 'Mia', username: 'Sequoia', password: 'Str0ng_P'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//-------------------------------------------------Logical ramifications-----------------------------------------------
/*- Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
 інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = 25;
let a;
if (x != 0) {
    console.log('True');
} else {
    console.log('False');
}
a = 1;
x = a;
if (x != 0) {
    console.log('True');
} else {
    console.log('False');
}
a = 0;
x = a;
if (x != 0) {
    console.log('True');
} else {
    console.log('False');
}
a = -3;
x = a;
if (x != 0) {
    console.log('True');
} else {
    console.log('False');
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = 10;//prompt('Enter number from 0 to 59');
if (time != false && typeof (time) == "number" && time >= 0 && time <= 59) {
    if (time > 15) {
        if (time > 30) {
            if (time > 45) {
                console.log('The fourth quarter of an hour');
            } else {
                console.log('The third quarter of an hour');
            }
        } else {
            console.log('The second quarter of an hour');
        }
    } else {
        console.log('The first quarter of an hour');
    }
} else {
    console.log('Wrong data');
}
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
 (у першу, другу чи третю).*/
let day = 10;//prompt('Enter number from 1 to 31');
if (day != false && typeof (day) == "number" && day >= 1 && day <= 31) {
    if (day <= 20) {
        if (day <= 10) {
            console.log('First decade of the month');
        } else {
            console.log('Second decade of the month');
        }
    } else {
        console.log('Third decade of the month');
    }
} else {
    console.log('Wrong data');
}
/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
 відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
let dayOfWeek = 1;//prompt('Enter the serial number of the day of the week');
switch (parseInt(dayOfWeek)) {
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Not the serial number of the day of the week')
}
/*- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/
let num1 = 12;//prompt('Enter first number');
let num2 = 34;// prompt('Enter second number');
if (num1 != false && num2 != false && typeof (num1) == "number" && typeof (num2) == "number") {
    if (num1 / num2 <= 1) {
        if (num1 / num2 == 1) {
            console.log('The numbers are the same');
        } else {
            console.log(num2);
        }
    } else {
        console.log(num1);
    }
} else {
    console.log('Wrong data');
}
/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
 (хибноподібні, тобто приводиться до false)*/
let X = NaN//prompt('Enter any value');
if(X == undefined || X == null || isNaN(X) || X == "" || X == 0 || X == false){
    X = "default";
}
console.log(X);
/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
 його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]["monthDuration"] > 5) {
    console.log("Super");
}
if (coursesAndDurationArray[1]["monthDuration"] > 5) {
    console.log("Super");
}
if (coursesAndDurationArray[2]["monthDuration"] > 5) {
    console.log("Super");
}
if (coursesAndDurationArray[3]["monthDuration"] > 5) {
    console.log("Super");
}
if (coursesAndDurationArray[4]["monthDuration"] > 5) {
    console.log("Super");
}
if (coursesAndDurationArray[5]["monthDuration"] > 5) {
    console.log("Super");
}
