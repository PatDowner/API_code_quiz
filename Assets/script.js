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


// When the 'start' button is clicked...
document.getElementById('start').addEventListener('click', (event) => {

  // stop the default behavior of buttons
  event.preventDefault()


  // Placeholder while function. Will cover in class today.
  // while ('timer'>0) {
  for (let i = 0; i < qList.length; i++) {

    //replace content of question div in HTML
    document.getElementById('question').innerHTML = `
    <h3 class="display-4">
    `+ qList[i].Q + `
    </h3>
    `


    // Replace content of <p id="answers"></p> in HTML
    document.getElementById('answers').innerHTML = `
    <button id="btnA" class="btn btn-primary btn-lg">A. `+ qList[i].A + `</button>
    <button id="btnB" class="btn btn-primary btn-lg">B. `+ qList[i].B + `</button>
    <button id="btnC" class="btn btn-primary btn-lg">C. `+ qList[i].C + `</button>
    <button id="btnD" class="btn btn-primary btn-lg">D. `+ qList[i].D + `</button>
      `

    let ans = qList[i].Correct

    console.log(ans)

    //Whan answer btn ___ is clicked ...Replace content of <p id="feedback"></p> in HTML with ___
    document.getElementById('btnA').addEventListener('click', (event) => {

      if (qList[i].Correct === 'A') {
        document.getElementById('feedback').innerHTML = 'Right!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        score++
        console.log(score)
        document.getElementById('score').innerHTML = `Score: ` + score
        continue
      } else {
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        continue
      }
    })

    document.getElementById('btnB').addEventListener('click', (event) => {
      if (qList[i].Correct === 'B') {
        document.getElementById('feedback').innerHTML = 'Right!'
        score++
        console.log(score)
        document.getElementById('score').innerHTML = `Score: ` + score
        continue
      } else {
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        continue
      }
    })

    document.getElementById('btnC').addEventListener('click', (event) => {
      if (qList[i].Correct === 'C') {
        document.getElementById('feedback').innerHTML = 'Right!'
        score++
        console.log(score)
        document.getElementById('score').innerHTML = `Score: ` + score
        continue
      } else {
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        continue
      }
    })

    document.getElementById('btnD').addEventListener('click', (event) => {
      if (qList[i].Correct === 'D') {
        document.getElementById('feedback').innerHTML = 'Right!'
        score++
        console.log(score)
        document.getElementById('score').innerHTML = `Score: ` + score
        continue
      } else {
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        continue
      }
    })


    // end loop that's working through qList
  }
  // end of while '(timer)' > 0
  // }
  // end of function
})

