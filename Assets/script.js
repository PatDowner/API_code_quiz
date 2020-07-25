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
if (event.target.classList.contains('start')) => {

  // stop the default behavior of buttons
  event.preventDefault()

  // display first question by replacing the content of the question div in the HTML
  // Question for Q: Is there any reason to NOT do it this way? Instead of the process where he has us create a separate <div>, give that div innerHTML and then place that new div into the element that has #question?
  document.getElementById('question').innerHTML = `
    <h3 class="display-4">
    ${qList[i].Q}
    </h3>
    `


  // Replace content of p#answers in HTML with answers for 
  document.getElementById('answers').innerHTML = `
    <button id="btnA" class="btn btn-primary btn-lg ansBtn btnA">A. ${qList[i].A} </button>
    <button id="btnB" class="btn btn-primary btn-lg ansBtn btnB">B. ${qList[i].B} </button>
    <button id="btnC" class="btn btn-primary btn-lg ansBtn btnC">C. ${qList[i].C} </button>
    <button id="btnD" class="btn btn-primary btn-lg ansBtn btnD">D. ${qList[i].D} </button>
      `
}

// Do I need to address what happens if you click the High Score link??

// is this where I start the timer??

// Is this where I'd put the placeholder while function? Wrapped around global click listener??


// global click listener
document.addEventListener('click', event => {

  //When ansBtn A || B || C || D is clicked ... 
  if (event.target.classList.contains('ansBtn')) {
    // variable which will help us define which answer button is the correct answer to first question
    let ans = qList[i].Correct

    // log correct answer
    console.log(ans)


    // if the ansBtn that was clicked was btnA
    if (event.target.classList.contains('btnA')) {
      // if btnA is the correct answer to first question
      if (qList[i].Correct === 'A') {
        // display feedback that the answer was correct
        document.getElementById('feedback').innerHTML = 'Correct!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        // increase score by 1
        score++
        // log: answer, correct, and current score
        console.log('A', 'correct', score)
        // update displayed score in HTML
        document.getElementById('score').innerHTML = `Score: ${score}`
        // if the correct answer is NOT btnA
      } else {
        // display feedback that the answer was wrong.
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        // log: answer, wrong, and current score
        console.log('A', 'wrong', "lose 10 sec", score)
        // ends determining if btnA is correct answer
      }

      // ends if answer btnA clicked
      // start if not btnA then if btnB
    } else if (event.target.classList.contains('btnB')) {
      // if btnB is the correct answer to first question
      if (qList[i].Correct === 'B') {
        // display feedback that the answer was correct
        document.getElementById('feedback').innerHTML = 'Correct!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        // increase score by 1
        score++
        // log: answer, correct, and current score
        console.log('B', 'correct', score)
        // update displayed score in HTML
        document.getElementById('score').innerHTML = `Score: ${score}`
        // if the correct answer is NOT btnB
      } else {
        // display feedback that the answer was wrong.
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        // log: answer, wrong, and current score
        console.log('B', 'wrong', "lose 10 sec", score)
        // ends determining if btnB is correct answer
      }

      // ends if answer btnA clicked
      // starts if not btnA or btnB then if btnC
    } else if (event.target.classList.contains('btnC')) {
      // if btnC is the correct answer to first question
      if (qList[i].Correct === 'C') {
        // display feedback that the answer was correct
        document.getElementById('feedback').innerHTML = 'Correct!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        // increase score by 1
        score++
        // log: answer, correct, and current score
        console.log('C', 'correct', score)
        // update displayed score in HTML
        document.getElementById('score').innerHTML = `Score: ${score}`
        // if the correct answer is NOT btnC
      } else {
        // display feedback that the answer was wrong.
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        // log: answer, wrong, and current score
        console.log('C', 'wrong', "lose 10 sec", score)
        // ends determining if btnC is correct answer
      }

      // ends if answer btnC clicked
      // starts if not btnA or btnB or btnC then if btnD
    } else if (event.target.classList.contains('btnD')) {
      // if we reach this point, it means all the other answer buttons (A, B, C) were wrong. Which means D must be correct.
      // display feedback that the answer was correct
      document.getElementById('feedback').innerHTML = 'Correct!'
      // is there a way to change color of button briefly to reflect answer accuracy?
      // increase score by 1
      score++
      // log: answer, correct, and current score
      console.log('D', 'correct', score)
      // update displayed score in HTML
      document.getElementById('score').innerHTML = `Score: ${score}`

      // ends if answer btnD clicked
    }

    // ends if ansBtn clicked
  }

  // start loop for other questions. Start at i = 1 because I already handled i=0.
  for (let i = 1; i < qList.length; i++) {

    //replace content of question div in HTML
    // Question for Q: Is there any reason to NOT do it this way? Instead of the process where he has us create a separate <div>, give that div innerHTML and then place that new div into the element that has #question?
    document.getElementById('question').innerHTML = `
      <h3 class="display-4">
      ${qList[i].Q}
      </h3>
      `

    // Replace content of p#answers in HTML
    document.getElementById('answers').innerHTML = `
      <button id="btnA" class="btn btn-primary btn-lg">A. ${qList[i].A} </button>
      <button id="btnB" class="btn btn-primary btn-lg">B. ${qList[i].B} </button>
      <button id="btnC" class="btn btn-primary btn-lg">C. ${qList[i].C} </button>
      <button id="btnD" class="btn btn-primary btn-lg">D. ${qList[i].D} </button>
        `

    let ans = qList[i].Correct

    console.log(ans)

    //When ansBtn A || B || C || D is clicked ... 
    if (event.target.classList.contains('ansBtn')) {
      // variable which will help us define which answer button is the correct answer to first question
      let ans = qList[i].Correct

      // log correct answer
      console.log(ans)


      // if the ansBtn that was clicked was btnA
      if (event.target.classList.contains('btnA')) {
        // if btnA is the correct answer to first question
        if (qList[i].Correct === 'A') {
          // display feedback that the answer was correct
          document.getElementById('feedback').innerHTML = 'Correct!'
          // is there a way to change color of button briefly to reflect answer accuracy?
          // increase score by 1
          score++
          // log: answer, correct, and current score
          console.log('A', 'correct', score)
          // update displayed score in HTML
          document.getElementById('score').innerHTML = `Score: ${score}`
          // if the correct answer is NOT btnA
        } else {
          // display feedback that the answer was wrong.
          document.getElementById('feedback').innerHTML = 'Wrong!'
          // subtract 10sec from timer (when I have that figured out)
          // log: answer, wrong, and current score
          console.log('A', 'wrong', "lose 10 sec", score)
          // ends determining if btnA is correct answer
        }

        // ends if answer btnA clicked
        // start if not btnA then if btnB
      } else if (event.target.classList.contains('btnB')) {
        // if btnB is the correct answer to first question
        if (qList[i].Correct === 'B') {
          // display feedback that the answer was correct
          document.getElementById('feedback').innerHTML = 'Correct!'
          // is there a way to change color of button briefly to reflect answer accuracy?
          // increase score by 1
          score++
          // log: answer, correct, and current score
          console.log('B', 'correct', score)
          // update displayed score in HTML
          document.getElementById('score').innerHTML = `Score: ${score}`
          // if the correct answer is NOT btnB
        } else {
          // display feedback that the answer was wrong.
          document.getElementById('feedback').innerHTML = 'Wrong!'
          // subtract 10sec from timer (when I have that figured out)
          // log: answer, wrong, and current score
          console.log('B', 'wrong', "lose 10 sec", score)
          // ends determining if btnB is correct answer
        }

        // ends if answer btnA clicked
        // starts if not btnA or btnB then if btnC
      } else if (event.target.classList.contains('btnC')) {
        // if btnC is the correct answer to first question
        if (qList[i].Correct === 'C') {
          // display feedback that the answer was correct
          document.getElementById('feedback').innerHTML = 'Correct!'
          // is there a way to change color of button briefly to reflect answer accuracy?
          // increase score by 1
          score++
          // log: answer, correct, and current score
          console.log('C', 'correct', score)
          // update displayed score in HTML
          document.getElementById('score').innerHTML = `Score: ${score}`
          // if the correct answer is NOT btnC
        } else {
          // display feedback that the answer was wrong.
          document.getElementById('feedback').innerHTML = 'Wrong!'
          // subtract 10sec from timer (when I have that figured out)
          // log: answer, wrong, and current score
          console.log('C', 'wrong', "lose 10 sec", score)
          // ends determining if btnC is correct answer
        }

        // ends if answer btnC clicked
        // starts if not btnA or btnB or btnC then if btnD
      } else if (event.target.classList.contains('btnD')) {
        // if we reach this point, it means all the other answer buttons (A, B, C) were wrong. Which means D must be correct.
        // display feedback that the answer was correct
        document.getElementById('feedback').innerHTML = 'Correct!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        // increase score by 1
        score++
        // log: answer, correct, and current score
        console.log('D', 'correct', score)
        // update displayed score in HTML
        document.getElementById('score').innerHTML = `Score: ${score}`

        // ends if answer btnD clicked
      }

      // ends if ansBtn clicked
    }

    // end loop that's working through qList
  }

  // end global click listener
})
  // end of while '(timer)' > 0
  // }
  // end of function
})

