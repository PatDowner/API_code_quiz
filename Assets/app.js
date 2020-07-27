// Also, it does NOT address the timer issue. I'm gonna have to go back and look at what Devin did there to figure out how to work it in.
// I probably need more to address accessing the highScore from the localStorage too



// need something here to pull old highScore info OR allow for highScore = 0

// set high score to zero for now. Will update later.
let highScore = 0

// variable to store the initials of highScore holder
let champ = 'No current high score'

// set up array for logged scores
let scoreLog = []

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
const newQ = function (x) {
  ansCLick = x

  // this was ansResult()
  if (qList[qNum].Correct === ansClick) {
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
    console.log(ansClick, ': correct', score)

  } else {
    // otherwise, run function isWrong
    // isWrong()
    // tell the user their answer was correct
    document.getElementById('feedback').innerHTML = `
    Last answer: Wrong!
    `

    // subtract 10 sec from timer
    count = count - 10

    // record which answer they clicked and the word wrong
    console.log(ansCLick, ': wrong')
  }

  // Increase qNum by one so we can continue on to the next question
  qNum++

  if (qNum < qList.length) {


    // display next question
    document.getElementById('question').innerHTML = `
  <h3 class="display-4">
  ${qList[qNum].Q}
  </h3>
  `
    // Display next answer

    document.getElementById('ansA').innerHTML = `
  ${ qList[qNum].A}
  `
    document.getElementById('ansB').innerHTML = `
  ${ qList[qNum].B}
  `
    document.getElementById('ansC').innerHTML = `
  ${ qList[qNum].C}
  `
    document.getElementById('ansD').innerHTML = `
  ${ qList[qNum].D}
  `
  } else {
    // hide all the id elements that contain question stuff
    document.getElementById('question').classList.add('hide')
    document.getElementById('answers').classList.add('hide')
    document.getElementById('feedback').classList.add('hide')

    // show finished
    document.getElementById('finished').classList.remove('hide')

    if (score > highScore) {
      // set score as current highScore
      highScore = score

      // display text congratulating user
      document.getElementById('finalScore').innerHTML = `
      <p className="lead">Congratulations! You have achieved a new high score!!</p>
      <p className="lead">New High Score: ${highScore}</p>
      `

      // unhide finalScore element
      document.getElementById('finalScore').classList.remove('hide')

      document.getElementById('initialsSet').classList.remove('hide')

      document.getElementById('save').addEventListener('click', event => {
        event.preventDefault()

        // clicking button makes 2 things happen:
        // 1) log set champ = value of input and put that and highScore to localStorage
        // set value of champ to be text of input
        champ = document.getElementById('initials').value

        // array for local storage
        let scoreItem = {
          highScore: highScore,
          champ: champ
        }

        scoreLog.push(scoreItem)

        console.log(scoreLog[0])


        // Display current high score in HTML
        document.getElementById('highScore').innerHTML = `
        High Score: ${scoreLog[0].highScore}<br>
        User: ${scoreLog[0].champ}
        `

        // store champ and highScore to localStorage
        localStorage.setItem('scoreLog', JSON.stringify(scoreLog))

        // 2. take you to highScore display.
        alert(`
        New high score saved!
        High Score: ${highScore}
        User: ${champ}
        `)
      })

    } else {
      // otherwise, just display final score
      document.getElementById('finalScore').innerHTML = `
    Your score: ${score}`
    }

  }
}



// when the start button is clicked...
document.getElementById('start').addEventListener('click', event => {
  // Hide instructions & start button
  document.getElementById('quiz').classList.add('hide')
  // display first question
  document.getElementById('question').innerHTML = `
      ${ qList[qNum].Q}
      `
  // Hide instructions & start button
  document.getElementById('instructions').classList.add('hide')
  // Populate answers for first question
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
  document.getElementById('question').classList.remove('hide')
  document.getElementById('answers').classList.remove('hide')
})




// Set variable that states answer button A was clicked
document.getElementById('btnA').addEventListener('click', event => {
  ansClick = 'A'
  newQ(ansClick)
})

// Set variable that states answer button B was clicked
document.getElementById('btnB').addEventListener('click', event => {
  ansClick = 'B'
  newQ(ansClick)
})

// Set variable that states answer button C was clicked
document.getElementById('btnC').addEventListener('click', event => {
  ansClick = 'C'
  newQ(ansClick)
})

// Set variable that states answer button D was clicked
document.getElementById('btnD').addEventListener('click', event => {
  ansClick = 'D'
  newQ(ansClick)
})


