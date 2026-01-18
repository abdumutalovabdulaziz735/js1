// const cards = document.querySelectorAll(".card")

// cards.forEach(card => {
//     card.addEventListener("click", () => {
//         cards.forEach(user => {
//             user.classList.remove("active")
//         })
//         card.classList.add("active")

//     })
// })

//-----------------------------------------------------------

// const users = document.querySelector("#user");
// users.innerHTML = ("Hello DOM");

//-----------------------------------------------------------


// const offers = document.querySelector('.offer')
// const buttonss = document.querySelector('.buttons')

// buttonss.addEventListener("click", () => {
//     buttonss.classList.add("active")
//     offers.style = `font-size: 24px; color:red;`

// })

//-----------------------------------------------------------


// const user = document.querySelector(".user")
// const btn = document.querySelector(".btn")


// btn.addEventListener('click', () => {
//     btn.classList.toggle('active')
//     user.style = `color: blue; `

//     if (user.textContent === 'OFF') {
//         user.textContent = 'ON'
//     } else {
//         user.textContent = "OFF"
//     }
// })


//-----------------------------------------------------------


// const list = document.querySelector('#list')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     const li = document.createElement('li')

//     li.textContent = `New Item`

//     list.appendChild(li);
// }
// )

//-----------------------------------------------------------



// const content = document.querySelector('#content')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
//     const p = document.createElement('p')
//     p.textContent = 'I am a new paragraph'
//     content.appendChild(p);

// })


//-----------------------------------------------------------


// let user = 0

// const countSpan = document.querySelector('#count')
// const increase = document.querySelector('#increase')
// const decrease = document.querySelector('#decrease')
// const reset = document.querySelector('#reset')

// increase.addEventListener('click', () => {
//     user++;
//     countSpan.textContent = user;
// })

// decrease.addEventListener('click', () => {
//     user--;
//     countSpan.textContent = user;
// })

// reset.addEventListener('click', () => {
//     reset.classList.add('active')

//     user = 0;
//     countSpan.textContent = 0;

// })

//-----------------------------------------------------------



// const user = +prompt('enetr the number')

// if (user > 0) {
//     console.log('Positive');
// }else if(user < 0 ){
//     console.log('Negative');
// }else{
//     console.log('Zero');

// }

//-----------------------------------------------------------




// const age = prompt('enter the age ')
// if (age < 18) {
//     console.log('You are eligible to vote');
// }else{
//     console.log('You are not eligible to vote');

// }

//-----------------------------------------------------------



// const grade = +prompt('enter your final grade')

// if (grade >= 90) {
//     console.log('Grade A');
// } else if (grade >= 80) {
//     console.log('Grade B');
// } else if (grade >= 70) {
//     console.log('Grade C');
// } else if (grade >= 60) {
//     console.log('Grade D');
// } else {
//     console.log('Fail');

// }
//-----------------------------------------------------------



// const number = +prompt('enter the number you want ')

// if (number > 10 && number < 50) {
//     console.log('Number is in range');

// } else{
//     console.log('Number is out of range');
// }

//-----------------------------------------------------------



// const user1 = +prompt('enter the number-1')
// const user2 = +prompt('enter the number-2')
// const user3 = +prompt('enter the number-3')


// if (user1 >= user2 && user1 >= user3 ) {
//     console.log(`eng katta son: ${user1}`, user1);
// } else if (user2 >= user1 && user2 >= user3) {
//     console.log(`eng katta son: ${user2} `);
// } else {
//     console.log(`eng katta son: ${user3}`);
// }

//-----------------------------------------------------------



// const user1 = +prompt('enter the number-1')
// const user2 = +prompt('enter the number-2')
// const user3 = +prompt('enter the number-3')


// if (user1 <= user2 && user1 <= user3) {
//     console.log(`smallest number is ${user1}`);
// } else if (user2 <= user1 && user2 <= user3) {
//     console.log(`smallest number is ${user2}`);
// } else {
//     console.log(`smallest number is ${user3}`);

// }
//-----------------------------------------------------------



// const user1 = +prompt('enter the number-1')
// const user2 = +prompt('enter the number-2')
// const user3 = +prompt('enter the number-3')


// if(user1 === user2 && user2 === user3 && user1 === user3){
// console.log('tehy equale');

// }
//  else if(user1 <= user2 && user1 <= user3) {
//     console.log(`smallest number is ${user1}`);
// } else if (user2 <= user1 && user2 <= user3) {
//     console.log(`smallest number is ${user2}`);
// } else {
//     console.log(`smallest number is ${user3}`);

// }

//-----------------------------------------------------------


// const user1 = +prompt("enter the your number")
// const user2 = +prompt("enter the your number2")

// if (user1 % 2 == 0 && user1 >= user2) {
//     console.log('Positive Even');
// }else if(user2 % 2 != 0 && user1 <= user2 ){
//     console.log('Negative Even');
// }else{
//     console.log('Zero');

// }

// const user1 = +prompt("enter the your number")

// if (user1 % 2 === 0 && user1 != 0 ) {
//     console.log('Positive Even');
// } else if (user1 == 0) {
//      console.log('Zero');

// } else {
//     console.log('negative ');

// }

//-----------------------------------------------------------



// const speed = +prompt('enter the vehicle speed')

// // speed > 0 || speed < 0
// if (speed !== 0) {
//     if (speed > 0) {
//         console.log('oldiga yurvoti');
//         if (speed % 2 === 0) {
//             console.log('Tez harakatlanmoqda');

//         } else {
//             console.log('Sekin harakatlanmoqda');

//         }
//     } else if (speed < 0) {
//         console.log('orqaga yurdi');
//         if (speed % 2 === 0) {
//             console.log('Orqaga tez harakatlanmoqda');
//         } else {
//             console.log('Orqaga sekin harakatlanmoqda');

//         }
//     }

// } else {

//     console.log("toxta");

// }



//-----------------------------------------------------------



// const speed = +prompt('enter the vehicle speed')


// if (speed !== 0) {

//     console.log('Stopped');

//     if (speed > 0) {
//         console.log('Moving Fast');
//     } else if (speed % 2 === 0) {
//         console.log('Moving Slowly');
//     }

// }



// else {
//     console.log("toxta");

//     if (speed < 0) {
//         console.log('Reverse Fast');

//     } else if (speed % 2 === 0) {
//         console.log('Reverse Slowly');

//     }
// }


//-----------------------------------------------------------


// const user1 = +prompt('enter the number1')
// const user2 = +prompt('enter the number2')
// const user3 = +prompt('enter the number3')

// if (user1 == user2 && user2 == user3) {
//     console.log('All equal');
// } else if (user1 == user2 && user1 != user3 ||
//     user2 == user3 && user1 != user2 || user3 == user1 && user3 != user2
// ) {
//     console.log('Two equal');

// } else if (user1 != user2 && user2 != user3 && user1 != user3) {
//     console.log('All different')


// }


//-----------------------------------------------------------


// const user = +prompt('enter the number to check  wether')

// if (user !== 0) {
//     console.log('Positive');
//     if (user % 2 === 0) {
//         console.log('Positive Even');

//     } else {
//         console.log('Positive Odd');

//     }


// } else if (user < 0) {
//     console.log('Negative');
//     if (user % 2 === 0) {
//         console.log('Negative Even');

//     } else {
//         console.log('Negative Odd');

//     }

// }else{
//     console.log('Zero');

// }

//-----------------------------------------------------------


// const Age = +prompt('enter the number to check age')

// if (Age < 0) {
//     console.log('Invalid AgeInvalid Age');
// } else if (Age === 0) {
//     console.log('Just Born');
// } else if (Age >= 1 && Age <= 12) {
//     console.log('Child');

// } else if (Age >= 20 && Age <= 59) {
//     console.log('Adult');
// }else{
//     console.log('Senior Citizen');

// }

//-----------------------------------------------------------


// this is your hamework for loop topic  

// const number1 = +prompt('enter the number to check number1')
// const number2 = +prompt('enter the number to check number2')
// const number3 = +prompt('enter the number to check number3')

// let middle;

// if (number1 >= number2 && number1 <= number3 || number1 <= number2 && number1 >= number3) {
//     middle = number1

// } else if (number2 >= number1 && number2 <= number3 || number2 <= number1 && number2 >= number3) {
//     middle = number2


// } else if (number3 >= number1 && number3 <= number2 || number3 <= number1 && number3 >= number2){
//     middle = number3

// }

// alert(`middle number is here ${middle} `)




// const user = +prompt('5 + 5')
// let answer = 10
// if (user == answer) {
//     alert(`correct answer  ${answer}`);

// } else {
//     alert(`incorrect answer  ${user}`);

// }
// console.log(`sizni javobingiz - ${user} va togri javob - ${answer}`);




// let user = +prompt('enter the number')

// while (isNaN(user)) {
//     user = +prompt('entre the number  ')

// }
// let answer = 1;

// for (let i = 1; i <= user; i++) {
//     answer *= i
// }

// console.log(answer);

//-----------------------------------------------------------



// let user = +prompt('enter the number ')

// let answer = 0;

// for (let i = 1; i < user; i++) {
//     answer += i 
// }

// console.log(answer);

//-----------------------------------------------------------



//i have to ask this one from my teacher 







// const number = +prompt('enter the number')

// let answer = 0

// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         answer += i
//     }
// }
// console.log(`here is the your answer ${answer}`);



//-----------------------------------------------------------



// THIS IS DOUBLE LOOPS TOPIC HERE ===>


// let user = +prompt("son kiritin")
// let box = ""

// for (let i = 0; i < user; i++) {
//     for (let j = 0; j < user; j++) {
//         if (i == j  || j == 0 || i == 0 || j == user -1 || i == user -1) {
//             box += `[*]`
//         } else {
//             box += "   "
//         }
//     }
//     console.log(box);
//     box = ''

// }


// let user = ''

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         if (i % 2 === 0 && j % 2 === 1 || i % 2 === 1 && j % 2 === 0) {
//             user += ' ⬛'
//         } else {
//             user += ' ⬜'
//         }
//     }
//     console.log(user);
//     user = ''

// }


// let user = prompt('enter the number')
// let box = ''

// for (let i = 0; i < user; i++) {
//     for (let j = 0; j < user; j++) {
//         if (i == j || i == 0 || j == 0 || i == user - 1 || j == user - 1) {
//             box += '[*]'

//         } else {
//             box += "   "
//         }
//     }
//     console.log(box);
//     box = ''


// }


// const sheep = +prompt('enter the number')
// let user = ''

// for (let i = 0; i < sheep; i++) {
//     for (let j = 0; j < 1; j++) {
//         user += `${i + 1 } sheep ...`
//     }

// }
// console.log(user);  





// const sheep = +prompt('enter the number');
// let user = '';

// for (let i = 0; i < sheep; i++) {
//   for (let j = 0; j < 1; j++) {
//     user += (i + 1) + ' sheep ... ';
//   }
// }

// console.log(user);




// let user = prompt('enter the number')

// for (let i = 0; i < user; i++) {
//     for (let j = 0; j < user; j++) {
//         if () {
//             console.log(user);

//         }
//     }

// }






// const sheep = prompt('enter the numbers')
// let user = ''

// for (let i = 1; i <= sheep; i++) {
//     user += ` ${i} sheeps....`

//     if (i === 1) {
//         console.log('1 sheep....');
//     } else  {
//         console.log(`${i} sheeps....`);
//     }
// }
// console.log(user);
// // user += `${i + 1} sheep....`

//-----------------------------------------------------------


// FUCTION TOPIC AND HOMEWORK HERE ===> 


// const user = prompt('enter the your name ')
// let birthYear = +prompt('enter the your birth year ')
// let currentYear = +prompt('enter the current year ')
// while (isNaN(birthYear)) {
//     birthYear = +prompt('i said enter the your birth year ')
//     currentYear = +prompt('i said enter the current year ')
// }

// let box = ''

// box = currentYear - birthYear

// console.log(`${user} is ${box} years old`);


let str = () => {

    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    


    let operators = ['+', "-", '/', '*']

    let mini = operators[Math.floor(Math.random() * operators.length)]



    let answer = ''

    if (mini === '+') {
        answer = num1 + num2
    }else if(mini === '-'){
        answer = num1 - num2
    }else if(mini === '*'){
        answer = num1 * num2
    }else if(mini === '/'){
        answer = Math.floor(num1 / num2)
    }


    
    
    let box = +prompt(`${num1}  ${mini}  ${num2} = ? `)
    
    if (answer == box) {
        console.log(`your asnwer is correct ${answer}`);
    } else {
        console.log(`your asnwer is incorrect ${box}. correct one was ${answer}`);

    }


}

str()



// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;

// let operators = ['+', "-", '/', '*', '%']

// let mini = operators[Math.floor(Math.random() * operators.length)]


// let box = `${num1}  ${mini}  ${num2} `









// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;

// let operators = ['+', "-", '/', '*']

// let mini = operators[Math.floor(Math.random() * operators.length)]

// let box = `${num1}  ${mini}  ${num2} `

// let correctanswer = eval(box)

// if (+answer == correctanswer) {
//     console.log(`your asnwer is correct ${answer}`);
// } else {
//     console.log(`your asnwer is incorrect ${answer}. correct one was ${correctanswer}`);

// }

// let answer = +prompt(`give me the answer ${box}`)


//-----------------------------------------------------------



//this is the question fo rexercise

// 🟢 Exercise 14 (Speed Check)

// Task:

// Write a JavaScript program that:

// Takes the speed of a vehicle (in km/h) as input.

// Prints a message based on the speed:

// Speed condition	Output
// Speed = 0	"Stopped"
// Speed > 0 and even	"Moving Fast"
// Speed > 0 and odd	"Moving Slowly"
// Speed < 0 and even	"Reverse Fast"
// Speed < 0 and odd	"Reverse Slowly"

// Hints:

// Use the same structure as the positive/negative & even/odd code.

// % 2 can check if speed is even or odd.

// > and < can check forward/reverse (positive = forward, negative = reverse).

// This is exactly the same logic, just with a different story/context.

// You can try coding it the same way you did for the number exercise.

// Do you want me to check your code after you try it?