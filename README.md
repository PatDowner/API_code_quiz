# Code Quiz

This is a multiple-choice online quiz built using HTML, CSS, and JavaScript. The quiz is a race against the clock to see how many questions you can answer correctly before the time runs out. Read carefully though, because wrong answers will deduct 10 seconds from the clock. The game is over when you answer all of the questions or the clock runs out, whichever comes first.

At the end of the quiz, the user's score will display. If their score is a new high score, they will be prompted for their initials, which they can then save as the high score that is displayed on the page.

#App Preview
[image of the app]

#Development Notes

####Functionality

* Header with the following information that is dynamically updated throughout the app:
  - Current High Score
  - Current Score
  - Time left on the timer
* The main part of the body contains a Bootstrap jumbotron with elements that are hidden or shown as needed. The elements are shown/hidden based on 3 main categories:
    1. **Landing screen:** `#quiz` name , `#instructions`, and a `#start` button
    2. **Questions screen:** a `#feedback` banner to indicate if previous question was answered correct or wrong, a field for each `#question`, and a button for each one of the `#answers`
    3. **Finish screen:** the `#feedback` banner that pertains to the last question of the quiz, display of the user's `#finalScore`, a form for settting the user's `#initials` input if a high score was achieved, a `#save` button for the high score input, and a `#startOver` button that refreshes the page back to the landing screen.
* All of which is dynamically updated to cycle through the series of questions, their answers, and identifying the correct answer that are found in the `qList[]` array in the `app.js` file.
* Depending on the screen size, the answer buttons will appear as 1 row of 4 buttons, 2 rows of 2 buttons, or 4 separate rows utilizing Bootstrap's layout classes.
* Questions are set to have a minimum height of 100px to allow for the answer buttons to be placed in the same spot from screen to screen unless a question is particularly long.
* Each wrong answer costs the user 10 seconds on the timer.
* The high score for that computer is stored in and retrieved from localStorage and displayed on the top left of the screen.

####Credit
The app's HTML and CSS utilizes Bootstrap.

####Possible Future Updates
* Have the high score corner update as soon as `score` is greater than the previous `highScore`
* High score list that reveals more than 1 top score. Perhaps top 5 organized greatest to least.
* Randomize the order that questions appear during the quiz.

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application:
https://patdowner.github.io/API_code_quiz/

* The URL of the GitHub repository: https://github.com/PatDowner/API_code_quiz.git