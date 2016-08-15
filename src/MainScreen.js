var bowling = new Bowling();
var scoreBoard = new ScoreBoard();
var rollScore = 0;
var scoreString = '0';
// function updateScore() {
//   scoreBoard.frame.forEach(function(score) {
//     return score;
//   });
// }

$('#roll').click(function() {
  rollScore = bowling.roll();
  scoreString = scoreBoard.getScore(rollScore);
  $('#score').text(scoreString);
});
