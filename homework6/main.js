// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowerCase();
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
str = str.split(' ').filter(x => x).join(' ');
console.log(str.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let string = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    return str.split(' ');
}

console.log(stringToarray(string));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
numbers = numbers.map(number => `${number}`);
console.log(numbers);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(arr, direction) {
    switch (direction) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending':
            return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((c1, c2) => {
    return c2.monthDuration - c1.monthDuration
});
console.log(sortMonthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterLongCourses = coursesAndDurationArray.filter(cours => cours.monthDuration > 5);
console.log(filterLongCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCourses = coursesAndDurationArray.map(course => {
    course.id = Math.random();

    return course;
});
console.log(mapCourses);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)let deck of cards
let deckOfCards = [
    {suit: 'spade', values: '6', color: 'black'},
    {suit: 'spade', values: '7', color: 'black'},
    {suit: 'spade', values: '8', color: 'black'},
    {suit: 'spade', values: '9', color: 'black'},
    {suit: 'spade', values: '10', color: 'black'},
    {suit: 'spade', values: 'jack', color: 'black'},
    {suit: 'spade', values: 'queen', color: 'black'},
    {suit: 'spade', values: 'king', color: 'black'},
    {suit: 'spade', values: 'ace', color: 'black'},
    {suit: 'diamond', values: '6', color: 'black'},
    {suit: 'diamond', values: '7', color: 'black'},
    {suit: 'diamond', values: '8', color: 'black'},
    {suit: 'diamond', values: '9', color: 'black'},
    {suit: 'diamond', values: '10', color: 'black'},
    {suit: 'diamond', values: 'jack', color: 'black'},
    {suit: 'diamond', values: 'queen', color: 'black'},
    {suit: 'diamond', values: 'king', color: 'black'},
    {suit: 'diamond', values: 'ace', color: 'black'},
    {suit: 'clubs', values: '6', color: 'red'},
    {suit: 'clubs', values: '7', color: 'red'},
    {suit: 'clubs', values: '8', color: 'red'},
    {suit: 'clubs', values: '9', color: 'red'},
    {suit: 'clubs', values: '10', color: 'red'},
    {suit: 'clubs', values: 'jack', color: 'red'},
    {suit: 'clubs', values: 'queen', color: 'red'},
    {suit: 'clubs', values: 'king', color: 'red'},
    {suit: 'clubs', values: 'ace', color: 'red'},
    {suit: 'heart', values: '6', color: 'red'},
    {suit: 'heart', values: '7', color: 'red'},
    {suit: 'heart', values: '8', color: 'red'},
    {suit: 'heart', values: '9', color: 'red'},
    {suit: 'heart', values: '10', color: 'red'},
    {suit: 'heart', values: 'jack', color: 'red'},
    {suit: 'heart', values: 'queen', color: 'red'},
    {suit: 'heart', values: 'king', color: 'red'},
    {suit: 'heart', values: 'ace', color: 'red'}
];
// - знайти піковий туз
console.log(deckOfCards.filter(card => card.suit == 'spade' && card.values == 'ace'));
// - всі шістки
console.log(deckOfCards.filter(card => card.values == '6'));
// - всі червоні карти
console.log(deckOfCards.filter(card => card.color == 'red'));
// - всі буби
console.log(deckOfCards.filter(card => card.suit == 'clubs'));
// - всі трефи від 9 та більше
console.log(deckOfCards.filter(card => card.suit == 'diamond' && (card.values.length > 1 || card.values == '9')));
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortDeckOfCards = deckOfCards.reduce(function (accumulator, card) {
    switch (card.suit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(sortDeckOfCards);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let coursesSassModules = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesSassModules);
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesDockerModules = coursesArray.filter(course=>course.modules.includes('docker'));
console.log(coursesDockerModules);
