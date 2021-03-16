let score = 0
let question1 = prompt('1+1?')
let question2 = prompt('4+6?')
let question3 = prompt('5+8?')
let question4 = prompt('15+3?')
let question5 = prompt('4*2?')
let question6 = prompt('20-5?')
let question7 = prompt('6/3?')
let question8 = prompt('4+5?')
let question9 = prompt('3-1?')
let question10 = prompt('3*3?')



if (question1 == 2) score++;
if (question2 == 10) score++;
if (question3 == 13) score++;
if (question4 == 18) score++;
if (question5 == 8) score++;
if (question6 == 15) score++;
if (question7 == 2) score++;
if (question8 == 9) score++;
if (question9 == 2) score++;
if (question10 == 9) score++;




alert( 'Your score is '+score)
if (score <= 3) alert ('you just typed something randomly, right?');
if (score <=6 && score>3) alert ('Bad!');
if (score <=9 && score>6) alert ('Good!');

if (score ==10) alert('Perfect score!')