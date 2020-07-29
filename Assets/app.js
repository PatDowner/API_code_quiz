// Set high score to zero
let highScore = 0

// user name indicates no high score until player has logged an initial high score
let userName = 'No current high score'

// recalls last high score if user has visited page before or sets up an empty array ready to accept a new high score
let scoreLog = JSON.parse(localStorage.getItem('scoreLog')) || []

// if there's data in localStorage for scoreLog, use that to set the highScore and user
for (let i = 0; i < scoreLog.length; i++) {
  highScore = scoreLog[i].highScore
  userName = scoreLog[i].userName
}

// Display current highScore in HTML
document.getElementById('highScore').innerHTML = `
High Score:&nbsp;${highScore}<br>
User: ${userName}
`

// Score counter variable
let score = 0

// Display current score in HTML
document.getElementById('score').innerHTML = `
Current<br>
Score: ${score}
`

// Set timer start value
let seconds = 90

// set question number to zero, used for marking qList[qNum]
let qNum = 0

// Set variable that will store which question button was clicked
let ansClick = ''

// List of questions to pull from. Q = questions, A-D = answers A-D, Correct = indicates correct answer
let qList = [
  {
    Q: 'Which of the following HTML tags is self-closing?',
    A: '<li>',
    B: '<a>',
    C: '<img>',
    D: '<p>',
    Correct: 'C'
  },
  {
    Q: 'Which symbols are used to enclose an array?',
    A: '" "',
    B: ' < >',
    C: '( )',
    D: '[ ]',
    Correct: 'D'
  },
  {
    Q: 'Which of the following does NOT mean "increase count by 1"?',
    A: 'count++',
    B: 'count = count + 1',
    C: 'count = 1',
    D: 'count += 1',
    Correct: 'C'
  },
  {
    Q: 'With timer interval loops, what amount of time is indicated by the number 1000?',
    A: '1000 seconds',
    B: '1 second',
    C: '1 millisecond',
    D: '1 minute',
    Correct: 'B'
  },
  {
    Q: 'In the array letters[A, B, C, D], what value does letters[2] return?',
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    Correct: 'C'
  },
  {
    Q: 'Which is not a type of data value in Javascript?',
    A: 'variable',
    B: 'string',
    C: 'number',
    D: 'boolean',
    Correct: 'A'
  },
  {
    Q: `What's wrong with this code?:
        document.getElementById(myId)`,
    A: '"document" should be "Document"',
    B: `You can't get an element by its id`,
    C: `You didn't put the whole thing in parentheses`,
    D: "You forgot to put myId into single quotes",
    Correct: 'D'
  },
  {
    Q: 'Which of the following has a different value than the others?',
    A: 'true',
    B: 'false',
    C: '!true',
    D: '!!!true',
    Correct: 'A'
  },
  {
    Q: 'What terminal command would you type before pasting the repository URL to get a copy of a github repository onto your computer?',
    A: 'git',
    B: 'git hub',
    C: 'git pull',
    D: 'git clone',
    Correct: 'D'
  },
  {
    Q: `Which of these correctly fixes following code:
    console(log).'what's wrong with this code?'`,
    A: `console.log('what's wrong with this code')`,
    B: `console.log.'what's wrong with this code'`,
    C: "console.log(`what's wrong with this code`)",
    D: 'There is nothing wrog with that code.',
    Correct: 'C'
  }

]

//function newQ evaluates answer of previous question, then produces feedback about answer while displaying next question
const newQ = function (x) {
  // uses info about which answer was clicked
  ansCLick = x

  // shows the feedback div based on if the answer was correct or wrong
  document.getElementById('feedback').className = 'feedback py-2 pl-3'

  // if the answer clicked on matches the corresponding correct item in the array...
  if (qList[qNum].Correct === ansClick) {
    // run function isCorrect
    isCorrect()

  } else {
    // otherwise, run function isWrong
    isWrong()
  }

  // Increase qNum by one so we can continue on to the next item in the qList array
  qNum++

  // if we haven't reached the last object of the question array...
  if (qNum < qList.length) {
    // display the new question and answer choices...
    getQ()
    getAns()
    // once we've finished the last question...
  } else {
    // stop the timer
    clearInterval(timer)
    // and display the finish screen
    endGame()
  }
}

// if user's answer was correct...
const isCorrect = () => {

  // show feedback that it's correct
  document.getElementById('feedback').innerHTML = `
  Last answer: Correct!
  `
  // mark the feedback background green
  document.getElementById('feedback').classList.add('bg-success')

  // increase score by 1
  score++

  // Display current score in HTML
  document.getElementById('score').innerHTML = `
  Current<br>
  Score: ${score}
  `
}

// if user's answer was wrong...
const isWrong = () => {
  // display feedback that it's wrong
  document.getElementById('feedback').innerHTML = `
  Last answer: Wrong!
  `
  // mark the feedback background red
  document.getElementById('feedback').classList.add('bg-danger')

  // subtract 10 sec from timer
  seconds = seconds - 10
}

// display next question
const getQ = () => {
  document.getElementById('question').innerHTML = `
  <h3 class="display-5">
  ${qList[qNum].Q}
  </h3>
  `
}

// display answer choices for next question
const getAns = () => {
  // answer A
  document.getElementById('ansA').innerHTML = `
  ${ qList[qNum].A}
  `
  // answer B
  document.getElementById('ansB').innerHTML = `
  ${ qList[qNum].B}
  `
  // answer C
  document.getElementById('ansC').innerHTML = `
  ${ qList[qNum].C}
  `
  // answer D
  document.getElementById('ansD').innerHTML = `
  ${ qList[qNum].D}
  `
}

const endGame = () => {
  // hide all the id elements that contain question stuff
  document.getElementById('question').classList.add('hide')
  document.getElementById('answers').classList.add('hide')

  // show finished screen
  document.getElementById('finished').classList.remove('hide')

  // if the user set a new high score...
  if (score > highScore) {
    // set user's score to be the current highScore
    highScore = score

    // display text congratulating user
    document.getElementById('finalScore').innerHTML = `
      <p className="lead">Congratulations! You have achieved a new high score!!</p>
      <p className="lead">Your Score: ${highScore}</p>
      `

    // unhide finalScore element
    document.getElementById('finalScore').classList.remove('hide')

    document.getElementById('userSet').classList.remove('hide')

    document.getElementById('save').addEventListener('click', event => {
      event.preventDefault()

      // take user's input and store as userName
      userName = document.getElementById('initials').value

      // scoreObj array that will be pushed onto scoreLog
      let scoreObj = {
        highScore: highScore,
        userName: userName
      }

      // push the scoreObj to scoreLog
      scoreLog.push(scoreObj)

      // pushing scoreLog to localStorage making userName and highScore available for reference on refresh
      localStorage.setItem('scoreLog', JSON.stringify(scoreLog))

      // display confirmation that new highScore is saved
      document.getElementById('input').innerHTML = `
      <p class="text-success">New high score saved!<br>
      High Score: ${highScore}<br>
      User: ${userName}</p>
      `
      document.getElementById('save').classList.add('hide')

      // Display current high score in HTML
      document.getElementById('highScore').innerHTML = `
        High Score: ${highScore}<br>
        User: ${userName}
        `
      // show start over button
      document.getElementById('startOver').classList.remove('hide')
    })

  } else {
    // otherwise, just display final score
    document.getElementById('finalScore').innerHTML = `
    <p>Your score: ${score}</p>
    <p>High score: ${highScore}<br>
    (by user: ${userName})</p>
    `

    // unhide finalScore element and start over button
    document.getElementById('finalScore').classList.remove('hide')
    document.getElementById('startOver').classList.remove('hide')

  }
}


// ============ This is where the action actually starts ============




// when the start button is clicked...
document.getElementById('start').addEventListener('click', event => {

  // Hide instructions & start button
  document.getElementById('quiz').classList.add('hide')

  // display first question
  document.getElementById('question').textContent = `
  ${ qList[qNum].Q}
  `

  // Hide instructions & start button
  document.getElementById('instructions').classList.add('hide')

  // Populate answers for first question
  // answer A
  document.getElementById('ansA').textContent = `
  ${qList[qNum].A}
  `
  // answer B
  document.getElementById('ansB').textContent = `
  ${qList[qNum].B}
  `
  // answer C
  document.getElementById('ansC').textContent = `
  ${qList[qNum].C}
  `
  // answer D
  document.getElementById('ansD').textContent = `
  ${qList[qNum].D}
  `

  // show question & answer
  document.getElementById('question').classList.remove('hide')
  document.getElementById('answers').classList.remove('hide')

  // start a timer that runs over intervals of 1 second (1000 ms)
  timer = setInterval(() => {
    // for each interval, subtract a second from the timer
    seconds--

    // and update that time in the HTML page
    document.getElementById('time').textContent = seconds

    // once the seconds are less than or equal to zero...
    if (seconds <= 0) {
      // clear the timer
      clearInterval(timer)
      // and run the endGame() function
      endGame()
    }
  }, 1000);
})



// These identify which answer button is clicked:

// answer A was clicked
document.getElementById('btnA').addEventListener('click', event => {
  // preventDefault()
  ansClick = 'A'
  newQ(ansClick)
})

// answer B was clicked
document.getElementById('btnB').addEventListener('click', event => {
  // preventDefault()
  ansClick = 'B'
  newQ(ansClick)
})

// answer C was clicked
document.getElementById('btnC').addEventListener('click', event => {
  // preventDefault()
  ansClick = 'C'
  newQ(ansClick)
})

// answer D was clicked
document.getElementById('btnD').addEventListener('click', event => {
  // preventDefault()
  ansClick = 'D'
  newQ(ansClick)
})

document.getElementById('startOver').addEventListener('click', event => {
  location.reload()
})