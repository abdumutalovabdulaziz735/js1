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

const speed = +prompt('enter the vehicle speed')


if (speed !== 0) {

    if (speed > 0) {
        console.log('oldiga yurvoti');
        if (speed % 2 === 0) {
            console.log('Tez harakatlanmoqda');

        } else {
            console.log('Sekin harakatlanmoqda');

        }
    } else if (speed < 0) {
        console.log('orqaga yurdi');
        if (speed % 2 === 0) {
            console.log('Orqaga tez harakatlanmoqda');
        } else {
            console.log('Orqaga sekin harakatlanmoqda');

        }
    }

} else {

    console.log("toxta");

}






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