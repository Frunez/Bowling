ScoreBoard = function() {
  this.firstRoll = 0;
  this.secondRoll = 0;
};

ScoreBoard.prototype.firstRoll = function(score) {
  return this.firstRoll = bowling.getScore(score).toString();
};

ScoreBoard.prototype.secondRoll = function(bowling) {
  return this.secondRoll = bowling.getScore(score).toString();
};
