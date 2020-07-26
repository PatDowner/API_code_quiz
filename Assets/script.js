// Note: This is mostly psuedo coding to outline an overall plan of attack.
// Also, it does NOT address the timer issue. I'm gonna have to go back and look at what Devin did there to figure out how to work it in.
// I probably need more to address accessing the highScore from the localStorage too




// Set timer start value
let count = 90

// Score counter variable
let score = 0

// set question number to zero. Gonna use this to help work through the series of questions.
Let qNum = 0

// Set variable for which question button was clicked
let ansClick = ''

// set high score to zero for now. Will update later.
let highScore = 0

// variable to store the initials of highScore holder
let champ = ''

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


// create/define function isCorrect ()
// for p#feedback, set innerHTML ="correct!"
// increase score by 1
// console.log(ansClick, 'correct', score)
// update displayed score in HTML
// qNum++


// create/define function isWrong ()
// subtract 10 sec from timer
// console.log(ansCLick, 'wrong')
// qNum++


//create/define function newQuest ()
// if (event.target.classList.contains('ansBtn'))
// if (event.target.classList.contains('btnA'))
// ansClick = 'A'
// repeat that for answers B-D
// end that if
// if (qList[qNum].Correct === ansClick)
// isCorrect()
// else
// isWrong ()
// for div#question, place qList[qNum].Q
// for p#answers, place qList[qNum].A-D as buttons with class 'ansBtn' AND 'btnA', 'btnB', etc


// when the start button is clicked
// make the div#question and the p#answers innerHTML = qList[0].whatever, make sure to give answers classes 'ansBtn' AND 'btnA' (or evquivalent)


// global click listener


// I remember Q saying there's a repeat function x times option
// Run newQuest() in a repeat function for (qList.length - 1) times


// define/run lastQuest ()
// if (event.target.classList.contains('ansBtn'))
// if (event.target.classList.contains('btnA'))
// ansClick = 'A'
// repeat that for answers B-D
// end that if
// if (qList[qNum].Correct === ansClick)
// isCorrect()
// else
// isWrong ()


// Display finish screen
// set div#question to something like "Finished"
// set p#answers to highlight final score
// if score > highScore, set p#feedback to "New High Score!"
// highScore = score
// add input field with placeholder="enter your initials", button="Save"
// clicking button makes 2 things happen: 1) log set champ = value of input and put that and highScore to localStorage and 2. take you to highScore display.






// This part wouldn't be in this script file. It'd be in either index.html or possibly need its own highscore.html. I'll have to see how it works out.
// alternative to High Score HTML page, can we get fancy with some sort of pop up button (Bootstrap has to have something, or even just a button that is set to trigger an alert on click) where you click "See high score" and a small alert window or something appears?
// alert displays `High score: ${highScore}, user: ${champ}`