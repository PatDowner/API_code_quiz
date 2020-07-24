// When the 'start' button is clicked...
document.getElementById('start').addEventListener('click', (event) => {

  // stop the default behavior of buttons
  event.preventDefault()

  // will need to address start timer here somewhere

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
      Q: 'The early bird gets the ____',
      A: 'coffee',
      B: 'prize',
      C: 'work',
      D: 'worm',
      Correct: 'D'
    }

  ]

  // Just testing the function of the qList above.
  console.log(qList[1].Q)
  console.log(qList[1].A)
  console.log(qList[1].B)
  console.log(qList[1].C)
  console.log(qList[1].D)
  console.log(qList[1].Correct)

  // Need to figure out how to make it randomly work its way through the questions from the above qList WITHOUT repeating any. Does the Math.random thingy have a way to avoid repetition?? Or do I create another array that puts the numbers 0-19 (if 20 questions total) in the array in random order, then work my way through that array in order to pull question numbers from??

  //replace content of question div in HTML
  document.getElementById('question').innerHTML = `
  <h3 class="display-4">
    `+ qList[1].Q + `
  </h3>
  `

  // Replace content of answers p in HTML
  document.getElementById('answers').innerHTML = `
  <button class="btn btn-primary btn-lg">A. `+ qList[1].A + `</button>
  <button class="btn btn-primary btn-lg">B. `+ qList[1].B + `</button>
  <button class="btn btn-primary btn-lg">C. `+ qList[1].C + `</button>
  <button class="btn btn-primary btn-lg">D. `+ qList[1].D + `</button>
    `













})