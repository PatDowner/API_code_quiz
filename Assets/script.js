// Score counter variable
let score = 0

// List of questions to pull from later
let qList = [

  //Each item in the array is a new question (Q) with answers (A, B, C, and D) and the correct answer.
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
    B: 'Tails',
    C: 'Toad',
    D: 'Yoshi',
    Correct: 'B'
  },
  {
    Q: 'The early bird gets the ____.',
    A: 'coffee',
    B: 'prize',
    C: 'work',
    D: 'worm',
    Correct: 'D'
  }

]

// Need to figure out how to make it randomly work its way through the questions from the above qList WITHOUT repeating any. Does the Math.random thingy have a way to avoid repetition?? Or do I create another array that puts the numbers 0-19 (if 20 questions total) in the array in random order, then work my way through that array in order to pull question numbers from??
//For now, let's just get a random item number of the array
let qNum = parseInt(Math.floor(Math.random() * qList.length))

// Function to pick a question
const pickQ = () => {


  //replace content of question div in HTML
  document.getElementById('question').innerHTML = `
  <h3 class="display-4">
    `+ qList[qNum].Q + `
  </h3>
  `


  // Replace content of <p id="answers"></p> in HTML
  document.getElementById('answers').innerHTML = `
  <button id="btnA" class="btn btn-primary btn-lg">A. `+ qList[qNum].A + `</button>
  <button id="btnB" class="btn btn-primary btn-lg">B. `+ qList[qNum].B + `</button>
  <button id="btnC" class="btn btn-primary btn-lg">C. `+ qList[qNum].C + `</button>
  <button id="btnD" class="btn btn-primary btn-lg">D. `+ qList[qNum].D + `</button>
    `

}


// When the 'start' button is clicked...
document.getElementById('start').addEventListener('click', (event) => {

  // stop the default behavior of buttons
  event.preventDefault()

  // will need to address start timer here somewhere


  pickQ()

  let ans = qList[qNum].Correct

  console.log(ans)

  //Whan answer ___ is clicked ...Replace content of <p id="feedback"></p> in HTML with ___
  document.getElementById('btnA').addEventListener('click', (event) => {
    if (qList[qNum].Correct === 'A') {
      document.getElementById('feedback').innerHTML = 'Right!'
    } else {
      document.getElementById('feedback').innerHTML = 'Wrong!'
    }
  })

  document.getElementById('btnB').addEventListener('click', (event) => {
    if (qList[qNum].Correct === 'B') {
      document.getElementById('feedback').innerHTML = 'Right!'
    } else {
      document.getElementById('feedback').innerHTML = 'Wrong!'
    }
  })

  document.getElementById('btnC').addEventListener('click', (event) => {
    if (qList[qNum].Correct === 'C') {
      document.getElementById('feedback').innerHTML = 'Right!'
    } else {
      document.getElementById('feedback').innerHTML = 'Wrong!'
    }
  })

  //Whan answer D is clicked ...
  document.getElementById('btnD').addEventListener('click', (event) => {
    if (qList[qNum].Correct === 'D') {
      document.getElementById('feedback').innerHTML = 'Right!'
    } else {
      document.getElementById('feedback').innerHTML = 'Wrong!'
    }
  })

})

