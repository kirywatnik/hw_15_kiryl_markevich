
//1
var i =0;
while (i<3){
    alert( `number ${i}!` );
    i++;
}

//2
var browser;
if (browser === 'Edge'){
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

//3
var who = prompt('Кто там?');

if(who === '' || who === null){
    alert('Отменено');
} else if (who === 'Админ'){
    var pass = prompt('Пароль?');
} else {
    alert ('Я вас не знаю');
}
if (pass === "Я главный"){
    alert('Здравсвуйте');
} else if (pass === null || pass === ''){
    alert('Отменено');
} else {
    alert('Неверный пароль');
}

//4
var n = prompt('Cколько ступеняк?');
var symb = '';
for (var i=0; i<n; i++){
    (symb = symb + '#');
    console.log(symb);
}


//5(1)
var x = 20;
var y = 58;
var z = 42;
console.log(Number(x)+Number(y)+Number(z));

//6(2)
var sec = 60;
var min = 60;
var hour = 24;
var year = 365;
var myAgeInSeconds = 27*sec*min*hour*year;
console.log(myAgeInSeconds);

//6(3)
var count = 42;
var userName = '42';
//count = String(count);
//userName = Number(userName);
var a;
var a = count;
count = userName;
userName = a;
console.log(count);
console.log(userName);


//7(4)
var a = 1;
var b = 2;
var c = ' белых медведей';
console.log(String(a)+String(b)+c);

//8(5)

var a = 10;
var b = 'str';
var c = true;
console.log('a have type:'+typeof(a));
console.log('b have type:'+typeof(b));
console.log('c have type:'+typeof(c));

//9(6)
var imya = prompt('Как ваше имя?');
var age = prompt('Ваш возраст?');
console.log(imya);
console.log(age);

//10(7)

var a = 4;
var b = 3;

[a,b] = [b,a];
console.log(a);
console.log(b);


//11(8)

var a = true;
var b = false;
var int = 17;
var hz = undefined;
var empty = null;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(int));
console.log(typeof(hz));
console.log(typeof(empty));

//12(9)

var height = 15;
var width = 20;

if(height>width){
    console.log(height);
} else console.log(width);

//13 (10)
for (var i = 1; i<21; i++){
    if(i%3===0){
        console.log(i);
    }
}

//14(11)    ??????????????????????????????????????????????????????????????????????????????????????????

var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;
var shouldGoToWork;
if(key===true && documents===true && pen===true && orange===true || apple===false ){
    shouldGoToWork = true;
}
console.log(shouldGoToWork);

//15(12)
var a = prompt('Введите число');
if (a%3===0 && a%5===0){
    alert('FIZBuz');
} else if(a%5===0){
    alert('FIZ');
} else if(a%3===0){
    alert('Buz');
}


//16(13)
var age = prompt('Введите возраст');
if (age>=18){
    alert('Попей пивка');
} else if(age<18){
    alert('Попей колу');
}
if(age>=16 && age<=18){
    alert('Можешь выкурить сигаретку, только маме не говори');
}

//17(14)
var massage = prompt('В какую сторону свету хотел бы отправиться?');
switch(massage){
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь верного друга найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь разработчиком станешь');
    break;
    default:
        console.log('Введите еще раз');    
}

