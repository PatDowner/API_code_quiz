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
let ansClick = 'x'

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

//create & define function newQ ()
const newQ = function (x, y) {
  x = qNum
  console.log('qNum in newQ: ' + x)

  y = ansClick


  console.log('ansClick in newQ: ' + y)

  // Set variable that states answer button A was clicked
  document.getElementById('btnA').addEventListener('click', event => {
    ansClick = 'A'
  })

  // Set variable that states answer button B was clicked
  document.getElementById('btnB').addEventListener('click', event => {
    ansClick = 'B'
  })

  // Set variable that states answer button C was clicked
  document.getElementById('btnC').addEventListener('click', event => {
    ansClick = 'C'
  })

  // Set variable that states answer button D was clicked
  document.getElementById('btnD').addEventListener('click', event => {
    ansClick = 'D'
  })

  console.log('ansClick in function newQ after click: ' + ansClick)


  // this was ansResult()
  if (qList[x].Correct === ansClick) {
    console.log("answer result correctgiven")
    // run function isCorrect
    // tell the user their answer was correct
    document.getElementById('feedback').innerHTML = `
    Last answer: Correct!
    `

    // increase score by 1
    score++

    // Display current score in HTML
    document.getElementById('score').innerHTML = `
    Score: ${score}
    `

    // record which answer they clicked, the word correct, and the current score
    console.log(y, 'correct', score)

  } else {
    // otherwise, run function isWrong
    console.log("answer result wrong given")
    // isWrong()
    // tell the user their answer was correct
    document.getElementById('feedback').innerHTML = `
    Last answer: Wrong!
    `
    // subtract 10 sec from timer
    count = count - 10

    // record which answer they clicked and the word wrong
    console.log(y, 'wrong')
  }

  // Increase x by one so we can continue on to the next question
  x++
  console.log('qNumx = ' + x)

  // display next question
  document.getElementById('question').innerHTML = `
  ${qList[x].Q}
  `
  // Display next answer
  document.getElementById('ansA').innerHTML = `
    ${qList[x].A}
    `
  document.getElementById('ansB').innerHTML = `
    ${qList[x].B}
    `
  document.getElementById('ansC').innerHTML = `
    ${qList[x].C}
    `
  document.getElementById('ansD').innerHTML = `
    ${qList[x].D}
    `
}



// when the start button is clicked...
document.getElementById('start').addEventListener('click', event => {
  // Hide instructions & start button
  document.getElementById('quiz').classList.add('hide')
  // Hide instructions & start button
  document.getElementById('instructions').classList.add('hide')

  document.getElementById('question').classList.remove('hide')
  document.getElementById('answers').classList.remove('hide')
  // document.getElementById('feedback').classList.remove('hide')
  console.log('qNum' + qNum)
  console.log('ansClick' + ansClick)
  // display first question
  document.getElementById('question').innerHTML = `
      ${ qList[qNum].Q}
    `
  // Populate answers for first question btns
  document.getElementById('ansA').innerHTML = `
  ${qList[qNum].A}
  `
  document.getElementById('ansB').innerHTML = `
  ${qList[qNum].B}
  `
  document.getElementById('ansC').innerHTML = `
  ${qList[qNum].C}
  `
  document.getElementById('ansD').innerHTML = `
  ${qList[qNum].D}
  `
})


console.log('qNum before newQ: ' + qNum)
console.log('ansClick before newQ: ' + ansClick)
newQ(qNum, ansClick)