const Pi = 3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle(a, b) {
    return a * b;
}

console.log(areaOfRectangle(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r) {
    return Pi * r * r;
}

console.log(areaOfCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder(h, r) {
    return 2 * Pi * r * (h + r);
}

console.log(areaOfCylinder(5, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 'some function', 10000, false, "reaction", , true, 55];

function writerElemOfArray(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

writerElemOfArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writerArticle(text) {
    document.write(
        `
        <div>
            <p>${text}</p>
        </div>
        `
    );
}

writerArticle('some text to article');

// - створити функціюList яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function writerList3(text) {
    document.write(
        `
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
        `
    );
}

writerList3("some text for list");
document.write('-----------------------------------------------------------------------------------------');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writerList(text, numOfLi) {
    if (numOfLi) {
        document.write(`<ul>`);
        for (let i = 0; i < numOfLi; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
}

writerList("some text for list", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function printArrayList(arr) {
    if (arr) {
        document.write(`<ul>`);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                document.write(`<li>${arr[i]}</li>`);
            }
        }
        document.write(`</ul>`);
    }
}

printArrayList(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: '04589766', name: 'Margo', age: 32},
    {id: '49802031', name: 'Joy', age: 23},
    {id: 'Liam6567', name: 'Liam', age: 40},
    {id: 'Kenguru5', name: 'Emma', age: 19},
    {id: 'All90900', name: 'William', age: 18},
    {id: 'hori_333', name: 'Henry', age: 42},
    {id: '#8495796', name: 'Sophia', age: 24}
]

function writerArrayObjects(users) {
    for (const user of users) {
        document.write(`<div>`);
        for (const userKey in user) {
            document.write(`
                <p>${userKey} ${user[userKey]}</p>
            `)
        }
        document.write(`</div>`);
    }
}

writerArrayObjects(users);
// - створити функцію яка повертає найменьше число з масиву
let numbers = [12, 23, -56, 7, 0, 900, -1, 34, 4, 1111, -6, 76, 9];

function minimal(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minimal(numbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(numbers));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapNumb = [11,22,33,44];
function swap(arr,index1,index2){
    arr[index1] += arr[index2];
    arr[index2] = arr[index1] - arr[index2];
    arr[index1] = arr[index1] - arr[index2];
    return arr;
}
console.log(swap(swapNumb,0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const valute of currencyValues) {
        if (valute.currency == exchangeCurrency){
            return sumUAH/valute.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));