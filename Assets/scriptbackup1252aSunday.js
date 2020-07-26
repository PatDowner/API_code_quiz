// Set timer start value
let count = 90

// Score counter variable
let score = 0

// // List of questions to pull from later
let qList = [
  {
    Q: 'What color is the sky?',
    A: 'Red',
    B: 'Yellow',
    C: 'Blue',
    D: 'Green',
    Correct: 'A'
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
  }]

console.log(qList)



// When the 'start' button is clicked...

document.getElementById('start').addEventListener('click', event => {



  // // this is the way to code it if this ends up in the global listener
  // if (event.target.classList.contains('start')) {

  // stop the default behavior of buttons
  event.preventDefault()
  console.log('start')


  // display first question by replacing the content of the question div in the HTML
  // Question for Q: Is there any reason to NOT do it this way? Instead of the process where he has us create a separate <div>, give that div innerHTML and then place that new div into the element that has #question?
  document.getElementById('question').innerHTML = `
        <h3 class="display-4">
        ${qList[0].Q}
        </h3>
        `

  // Replace content of p#answers in HTML
  document.getElementById('answers').innerHTML = `
        <button id="btnA" class="btn btn-primary btn-lg btnA">A. ${qList[0].A} </button>
        <button id="btnB" class="btn btn-primary btn-lg">B. ${qList[0].B} </button>
        <button id="btnC" class="btn btn-primary btn-lg">C. ${qList[0].C} </button>
        <button id="btnD" class="btn btn-primary btn-lg">D. ${qList[0].D} </button>
        `
  //End of if start clicked 

  // delete the parens if I have to move this back into global listener
})

// is this where I start the timer??


// Since I have a global listener later, do I need to address what happens if you click the High Score link??


// Is this where I'd put the while timer > 0 function? Wrapped around global click listener??

// global click listener
document.addEventListener('click', event => {














  // this was from when I was trying to display q1 separately










  // // Moving on to a set of ifs/else ifs that control what happens when when an answer to first question is clicked ... 
  // if (event.target.classList.contains(btnA || btnB || btnC || btnD)) {
  //   console.log('clicked some answer')
  //   // if btnA was clicked
  //   if (event.target.classList.contains('btnA')) {
  //     console.log('clicked btnA')
  //     // if btnA is the correct answer to first question
  //     if (qList[0].Correct === 'A') {
  //       // display feedback that the answer was correct
  //       document.getElementById('feedback').innerHTML = 'Correct!'
  //       // is there a way to change color of button briefly to reflect answer accuracy?
  //       // increase score by 1
  //       score++
  //       // log: answer, correct, and current score
  //       console.log('A', 'correct', score)
  //       // update displayed score in HTML
  //       document.getElementById('score').innerHTML = `Score: ${score}`
  //       // if the correct answer is NOT btnA
  //     } else {
  //       // display feedback that the answer was wrong.
  //       document.getElementById('feedback').innerHTML = 'Wrong!'
  //       // subtract 10sec from timer (when I have that figured out)
  //       // log: answer, wrong, and current score
  //       console.log('A', 'wrong', "lose 10 sec", score)
  //       // ends determining if btnA is correct answer
  //     }

  //     // ends if answer btnA clicked
  //     // start if not click btnA then if btnB clicked
  //   } else if (event.target.classList.contains('btnB')) {
  //     console.log('clicked btnB')
  //     // if btnB is the correct answer to first question
  //     if (qList[0].Correct === 'B') {
  //       // display feedback that the answer was correct
  //       document.getElementById('feedback').innerHTML = 'Correct!'
  //       // increase score by 1
  //       score++
  //       // log: answer, correct, and current score
  //       console.log('B', 'correct', score)
  //       // update displayed score in HTML
  //       document.getElementById('score').innerHTML = `Score: ${score}`
  //       // if the correct answer is NOT btnB
  //     } else {
  //       // display feedback that the answer was wrong.
  //       document.getElementById('feedback').innerHTML = 'Wrong!'
  //       // subtract 10sec from timer (when I have that figured out)
  //       // log: answer, wrong, and current score
  //       console.log('B', 'wrong', "lose 10 sec", score)
  //       // ends determining if btnB is correct answer
  //     }

  //     // ends if answer btnB clicked
  //     // starts if not btnA or btnB then if btnC clicked
  //   } else if (event.target.classList.contains('btnC')) {
  //     console.log('clicked btnC')
  //     // if btnC is the correct answer to first question
  //     if (qList[0].Correct === 'C') {
  //       // display feedback that the answer was correct
  //       document.getElementById('feedback').innerHTML = 'Correct!'
  //       // is there a way to change color of button briefly to reflect answer accuracy?
  //       // increase score by 1
  //       score++
  //       // log: answer, correct, and current score
  //       console.log('C', 'correct', score)
  //       // update displayed score in HTML
  //       document.getElementById('score').innerHTML = `Score: ${score}`
  //       // if the correct answer is NOT btnC
  //     } else {
  //       // display feedback that the answer was wrong.
  //       document.getElementById('feedback').innerHTML = 'Wrong!'
  //       // subtract 10sec from timer (when I have that figured out)
  //       // log: answer, wrong, and current score
  //       console.log('C', 'wrong', "lose 10 sec", score)
  //       // ends determining if btnC is correct answer
  //     }

  //     // ends if answer btnC clicked
  //     // starts if not btnA or btnB or btnC then if btnD clicked
  //   } else if (event.target.classList.contains('btnD')) {
  //     console.log('clicked btnD')
  //     // if we reach this point, it means all the other answer buttons (A, B, C) were wrong. Which means D must be correct.
  //     // display feedback that the answer was correct
  //     if (qList[0].Correct === 'D') {
  //       document.getElementById('feedback').innerHTML = 'Correct!'
  //       // is there a way to change color of button briefly to reflect answer accuracy?
  //       // increase score by 1
  //       score++
  //       // log: answer, correct, and current score
  //       console.log('D', 'correct', score)
  //       // update displayed score in HTML
  //       document.getElementById('score').innerHTML = `Score: ${score}`
  //       //ends if btnD is correct
  //     } else if (event.target.classList.contains('btnD')) {
  //       if (qList[0].Correct === 'D') {
  //         // display feedback that the answer was correct
  //         document.getElementById('feedback').innerHTML = 'Correct!'
  //         // is there a way to change color of button briefly to reflect answer accuracy?
  //         // increase score by 1
  //         score++
  //         // log: answer, correct, and current score
  //         console.log('C', 'correct', score)
  //         // update displayed score in HTML
  //         document.getElementById('score').innerHTML = `Score: ${score}`
  //         // if the correct answer is NOT btnD
  //       } else {
  //         // display feedback that the answer was wrong.
  //         document.getElementById('feedback').innerHTML = 'Wrong!'
  //         // subtract 10sec from timer (when I have that figured out)
  //         // log: answer, wrong, and current score
  //         console.log('D', 'wrong', "lose 10 sec", score)
  //         // ends determining if btnD is correct answer
  //       }
  //       // ends if answer btnD clicked
  //     }
  //     //Ends if A || B || C || D for question 1
  //   }
  // }










  // loop below













  //Each item in the array is a new question (Q) with answers (A, B, C, and D) and the correct answer.

  // start loop for other questions. Start at i = 1 because I already handled i=0.
  for (let i = 0; i < qList.length; i++) {
    console.log('loop')





    // // use this if you want to start the loop with showing the question






    // //replace content of question div in HTML
    // // Question for Q: Is there any reason to NOT do it this way? Instead of the process where he has us create a separate <div>, give that div innerHTML and then place that new div into the element that has #question?
    // document.getElementById('question').innerHTML = `
    //     <h3 class="display-4">
    //     ${qList[i].Q}
    //     </h3>
    //     `

    // // Replace content of p#answers in HTML
    // document.getElementById('answers').innerHTML = `
    //     <button id="btnA" class="btn btn-primary btn-lg btnA">A. ${qList[i].A} </button>
    //     <button id="btnB" class="btn btn-primary btn-lg">B. ${qList[i].B} </button>
    //     <button id="btnC" class="btn btn-primary btn-lg">C. ${qList[i].C} </button>
    //     <button id="btnD" class="btn btn-primary btn-lg">D. ${qList[i].D} </button>
    //     `

    //When one of the answer buttons is clicked ... 

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
      if (qList[i].Correct === 'D') {
        // display feedback that the answer was correct
        document.getElementById('feedback').innerHTML = 'Correct!'
        // is there a way to change color of button briefly to reflect answer accuracy?
        // increase score by 1
        score++
        // log: answer, correct, and current score
        console.log('C', 'correct', score)
        // update displayed score in HTML
        document.getElementById('score').innerHTML = `Score: ${score}`
        // if the correct answer is NOT btnD
      } else {
        // display feedback that the answer was wrong.
        document.getElementById('feedback').innerHTML = 'Wrong!'
        // subtract 10sec from timer (when I have that figured out)
        // log: answer, wrong, and current score
        console.log('D', 'wrong', "lose 10 sec", score)
        // ends determining if btnD is correct answer
      }
      // ends if answer btnD clicked
    }

    if (i < qList.length) {

      //replace content of question div in HTML
      // Question for Q: Is there any reason to NOT do it this way? Instead of the process where he has us create a separate <div>, give that div innerHTML and then place that new div into the element that has #question?
      document.getElementById('question').innerHTML = `
    <h3 class="display-4">
    ${qList[i = i++].Q}
        </h3>
        `

      // Replace content of p#answers in HTML
      document.getElementById('answers').innerHTML = `
        <button id="btnA" class="btn btn-primary btn-lg btnA">A. ${qList[i].A} </button>
        <button id="btnB" class="btn btn-primary btn-lg">B. ${qList[i].B} </button>
        <button id="btnC" class="btn btn-primary btn-lg">C. ${qList[i].C} </button>
        <button id="btnD" class="btn btn-primary btn-lg">D. ${qList[i].D} </button>
        `
      i = i--
    } else {
      document.getElementById('question').innerHTML = `
    <h3 class="display-4">
    Finished!!
        </h3>
        `

      // Replace content of p#answers in HTML
      document.getElementById('answers').innerHTML = `
        Put something about high score here
        `
    }

    // end loop that's working through qList
  }

  // end global click listener
})
// end of while '(timer)' > 0
// }