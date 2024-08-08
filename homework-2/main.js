// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const array = ["Hello world!", 666, true, null, {
    name: 'unknown',
    age: 'unknown'
}, undefined, "World", false, [1, 'first word', 'bla-bla-bla', 'second word', null, 'third word'], 0.000000000000000001];

console.log('Array: ', array);
console.log('Array element: ', array[0]);
console.log('Array element: ', array[1]);
console.log('Array element: ', array[2]);
console.log('Array element: ', array[3]);
console.log('Array element: ', array[4]);
console.log('Array element: ', array[5]);
console.log('Array element: ', array[6]);
console.log('Array element: ', array[7]);
console.log('Array element: ', array[8]);
console.log('Array element: ', array[9]);

const book1 = {
    title: 'Murder on the Orient Express', pageCount: 256, genre: 'crime novel',
}
const book2 = {
    title: 'Peril at End House', pageCount: 270, genre: 'crime novel',
}
const book3 = {
    title: 'The Mystery of the Blue Train', pageCount: 296, genre: 'crime novel',
}

const book1WithAuthors = {
    title: 'The Hunger Games', pageCount: 374, genre: 'dystopian', author: [{name: 'Suzanne Collins', age: 61}]
}
const book2WithAuthors = {
    title: 'Catching Fire', pageCount: 391, genre: 'dystopian', author: [{name: 'Suzanne Collins', age: 61}]
}
const book3WithAuthors = {
    title: 'Mockingjay', pageCount: 390, genre: 'dystopian', author: [{name: 'Suzanne Collins', age: 61}]
}

const users = [{name: 'lily', surname: 'evans', password: 'notmyharryplease'},
    {name: 'james', surname: 'potter', password: 'ahahseverusisaloser'},
    {name: 'sirius', surname: 'black', password: 'iwaited13yearsintheazkaban'},
    {name: 'remus', surname: 'lupin', password: 'iamwerewolf'},
    {name: 'peter', surname: 'pettigrew', password: 'iamarat'},
    {name: 'severus', surname: 'snape', password: '10pointsfromgryffindor'},
    {name: 'albus', surname: 'dumbledore', password: '123456789pointstogryffindor'},
    {name: 'harry', surname: 'potter', password: 'thechosenone'},
    {name: 'ron', surname: 'weasley', password: 'ilovechicken'},
    {name: 'hermione', surname: 'granger', password: 'leviosanotleviosa'}]

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

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

const temperatureFor7Days = [{morning: '21', day: '26', evening: '24'},
    {morning: '18', day: '28', evening: '24'},
    {morning: '22', day: '29', evening: '26'},
    {morning: '17', day: '24', evening: '21'},
    {morning: '17', day: '25', evening: '20'},
    {morning: '16', day: '22', evening: '19'},
    {morning: '17', day: '27', evening: '23'}]

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x = 1;
x = 0;
x = -3;

if (x === 0) {
    console.log('Правильно!');
} else {
    console.log('Не правильно!');
}

let time = 65;

if (time >= 0 && time <= 15) {
    console.log('First quarter.');
} else if (time > 15 && time <= 30) {
    console.log('Second quarter.');
} else if (time > 30 && time <= 45) {
    console.log('Third quarter.');
} else if (time > 45 && time < 60) {
    console.log('Fourth quarter.');
} else {
    console.log('It is more than an hour.');
}

let day = 11;

if (day >= 0 && time <= 10) {
    console.log('First decade.');
} else if (time > 10 && time <= 20) {
    console.log('Second decade.');
} else if (time > 20 && time <= 31) {
    console.log('Third decade.');
} else {
    console.log('It is more than an month.');
}

const dayOfTheWeek = prompt('Введіть день тижня:', 'Понеділок');

switch (dayOfTheWeek) {
    case 'Понеділок':
        console.log('Monday.');
        break;
    case 'Вівторок':
        console.log('Tuesday.');
        break;
    case 'Середа':
        console.log('Wednesday.');
        break;
    case 'Четвер':
        console.log('Thursday.');
        break;
    case 'Пятниця':
        console.log('Friday.');
        break;
    case 'Субота':
        console.log('Saturday.');
        break;
    case 'Неділя':
        console.log('Sunday.');
        break;
    default:
        console.log('Ми не знаємо таких днів тижня! >:(')
}

const num1 = prompt('Введіть перше число:');
const num2 = prompt('Введіть друге число:');

if (num1 > num2) {
    console.log('Перше число більше за друге.');
} else if (num1 < num2) {
    console.log('Друге число більше за перше.');
} else {
    console.log('Числа = один одному.');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let value = '';
if (value === '' || value === 0 || value === null || value === undefined || value === NaN) {
    x = 'default';
    console.log(x)
} else {
    console.log(x)
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер.');
} else console.log('Не супер.');