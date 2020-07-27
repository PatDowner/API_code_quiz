// Note: This is mostly psuedo coding to outline an overall plan of attack.
// Also, it does NOT address the timer issue. I'm gonna have to go back and look at what Devin did there to figure out how to work it in.
// I probably need more to address accessing the highScore from the localStorage too



// need something here to pull old highScore info OR allow for highScore = 0

// set high score to zero for now. Will update later.
let highScore = 0

// variable to store the initials of highScore holder
let champ = 'No current high score'

// Display current high score in HTML
document.getElementById('highScore').innerHTML = `
High Score: ${highScore}<br>
Set by: ${champ}
`

// Score counter variable
let score = 0

// Display current score in HTML
document.getElementById('score').innerHTML = `
Score: ${score}
`

// Set timer start value
let count = 90

// set question number to zero. Gonna use this to help work through the series of questions.
let qNum = 0

// Set variable for which question button was clicked
let ansClickv = 'x'

// might need to set let dispHighScore = alert('see what I wrote below for text idea')

// // List of questions to pull from later
let qList = [
  {
    Q: 'What color is the sky?',
    A: 'Red',
    B: 'Yellow',
    C: 'Blue',
    D: 'Green',
    Correct: 'C'
  },
  {
    Q: 'What character is not a Mario character?',
    A: 'Mario',
    B: 'Donky Kong',
    C: 'Toad',
    D: 'Yoshi',
    Correct: 'B'
  },
  {
    Q: 'The early bird gets the ____.',
    A: 'worm',
    B: 'prize',
    C: 'work',
    D: 'coffee',
    Correct: 'A'
  },
  {
    Q: 'In which Toy Story movie does Woody decide to become a lost toy?',
    A: 'Toy Story 1',
    B: 'Toy Story 2',
    C: 'Toy Story 3',
    D: 'Toy Story 4',
    Correct: 'D'
  },
]

console.log(qList)


// create & define function ansClick()
const ansClick = function () {
  // If that answer A is clicked...
  if (event.target.classList.contains('btnA')) {
    // Set variable that states answer button A was clicked
    ansClickv = 'A'
    console.log(ansClickv)
  }
  // If that answer B is clicked...
  else if (event.target.classList.contains('btnB')) {
    // Set variable that states answer button B was clicked
    ansClickv = 'B'
    console.log(ansClickv)
  }
  // If that answer C is clicked...
  else if (event.target.classList.contains('btnC')) {
    // Set variable that states answer button C was clicked
    ansClickv = 'C'
    console.log(ansClickv)
  }
  // If that answer D is clicked...
  else if (event.target.classList.contains('btnD')) {
    // Set variable that states answer button D was clicked
    ansClickv = 'D'
    console.log(ansClickv)
  }


  // end ansClick ()
}


// create & define function isCorrect ()
const isCorrect = function () {

  // tell the user their answer was correct
  document.getElementById('feedback').innerHTML = `
  Correct!
  `

  // increase score by 1
  score++

  // record which answer they clicked, the word correct, and the current score
  console.log(ansClickv, 'correct', score)
}


// create & define function isWrong ()
const isWrong = function () {

  // subtract 10 sec from timer
  count = count - 10

  // record which answer they clicked and the word wrong
  console.log(ansCLickv, 'wrong')
}


// What to do with the generated answer
const ansResult = function () {
  ansClick()
  if (qList[qNum].Correct === ansClickv) {
    // run function isCorrect
    isCorrect()
  } else {
    // otherwise, run function isWrong
    isWrong()
  }
  console.log("answer result given")
}


//create & define function newQ ()
const newQ = function () {
  ansClick()
  ansResult()

  // Increase qNum by one so we can continue on to the next question
  qNum++
  console.log(qNum)
  // // display next question
  // document.getElementById('question').innerHTML = `
  // <h3 class="display-4">
  // ${qList[qNum].Q}
  // <h3>
  // `
  // // Display next answer
  // document.getElementById('answers').innerHTML = `
  //         <button id="btnA" class="btn btn-primary btn-lg btnA">A. ${qList[qNum].A} </button>
  //         <button id="btnB" class="btn btn-primary btn-lg" btnB>B. ${qList[qNum].B} </button>
  //         <button id="btnC" class="btn btn-primary btn-lg btnC">C. ${qList[qNum].C} </button>
  //         <button id="btnD" class="btn btn-primary btn-lg btnD">D. ${qList[qNum].D} </button>
  //         `
  // end newQ ()
}



// when the start button is clicked...
document.getElementById('start').addEventListener('click', event => {
  // Hide instructions & start button
  document.getElementById('instructions').classList.add('hide')
  // display first question
  document.getElementById('question').innerHTML = `
  <h3 class="display-4">
  ${qList[qNum].Q}
  <h3>
  `
  // Populate answers for first question
  document.getElementById('ansA').innerHTML = `
  ${qList[qNum].A}
  `
  document.getElementById('answers').classList.remove('hide')
})

// If that answer A is clicked...
// if (document.getElementById('btnA')) {
//   // Set variable that states answer button A was clicked
document.getElementById('btnA').addEventListener('click', event => {
  ansClickv = 'A'
  console.log(ansClickv)
  newQ()
})
// }
// If that answer B is clicked...
// else if (document.getElementById('btnB')) {
//   // Set variable that states answer button B was clicked
document.getElementById('btnB').addEventListener('click', event => {
  ansClickv = 'B'
  console.log(ansClickv)
  newQ()
})
// }
// If that answer C is clicked...
// if (document.getElementById('btnC')) {
//   // Set variable that states answer button C was clicked
document.getElementById('btnC').addEventListener('click', event => {
  ansClickv = 'C'
  console.log(ansClickv)
  newQ()
})
// }
// // If that answer D is clicked...
// if (document.getElementById('btnD')) {
// Set variable that states answer button D was clicked
document.getElementById('btnD').addEventListener('click', event => {
  ansClickv = 'D'
  console.log(ansClickv)
  newQ()
})
// }


// // global click listener
// document.addEventListener('click', event => {

//   // If that answer A is clicked...
//   if (event.target.classList.contains('btnA')) {
//     // Set variable that states answer button A was clicked
//     ansClickv = 'A'
//     console.log(ansClickv)
//     newQ()
//   }
//   // If that answer B is clicked...
//   else if (event.target.classList.contains('btnB')) {
//     // Set variable that states answer button B was clicked
//     ansClickv = 'B'
//     console.log(ansClickv)
//     newQ()
//   }
//   // If that answer C is clicked...
//   else if (event.target.classList.contains('btnC')) {
//     // Set variable that states answer button C was clicked
//     ansClickv = 'C'
//     console.log(ansClickv)
//     newQ()
//   }
//   // If that answer D is clicked...
//   else if (event.target.classList.contains('btnD')) {
//     // Set variable that states answer button D was clicked
//     ansClickv = 'D'
//     console.log(ansClickv)
//     newQ()
//   }

//   // I remember Q saying there's a repeat function x times option
//   // Run ans() and newQ() in a repeat function for (qList.length - 1) times

//   // newQ()
//   // ansClick()
//   // newQ()
//   // ansClick()
//   // newQ()

//   // // Get the answer results for the last question
//   // ansClick()

//   // Display finish screen

//   // display first the word finished
//   document.getElementById('question').innerHTML = `
//     <h3 class="display-4">
//     Finished!!
//     <h3>
//     `




//   // if current score is more than previous high score...
//   if (score > highScore) {

//     // set score as current high Score
//     highScore = score

//     // display text congratulating user, displaying new high score, then an input field to put in user's initials.
//     document.getElementById('feedback').innerHTML = `
//       <p>Congratulations, you have achieved a new high score!!</p>
//       <p> Your final score is: ${score}</p>
//       <form>
//         <p>
//           <label for="initials">Input your initials: </label>
//           <input type="text" name="initials" id="initials" placeholder="your initials">
//           <button id='save'>Save</button>
//         </p>
//       </form>
//       `

//     // clicking button makes 2 things happen: 1) log set champ = value of input and put that and highScore to localStorage and 2. take you to highScore display.
//   } else {
//     // otherwise, just display final score
//     document.getElementById('answers').innerHTML = `
//     Your score: ${score}`
//   }






// })








// This part wouldn't be in this script file. It'd be in either index.html or possibly need its own highscore.html. I'll have to see how it works out.
// alternative to High Score HTML page, can we get fancy with some sort of pop up button (Bootstrap has to have something, or even just a button that is set to trigger an alert on click) where you click "See high score" and a small alert window or something appears?
// alert displays `High score: ${highScore}, user: ${champ}`