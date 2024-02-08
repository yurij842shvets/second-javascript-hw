const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = 'yurij2011shvets@gmail.com';
console.log(email.includes('@'));
console.log(email.length);

const wordMy = 'My';
const wordName = 'name';
const wordIs = 'is';
const fullName = `${wordMy} ${wordName} ${wordIs} Viktor`;

const userName = prompt('Enter your name')
console.log(userName);
const payment = 300;
alert(`Дякуємо ${userName}! До сплати ${payment} гривень`)