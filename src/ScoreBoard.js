function ScoreBoard() {
  this.firstScore = 0;
  this.secondScore = 0;
  this.frame = [];
  this.isFirstTurn = true;
}

ScoreBoard.prototype.firstRoll = function(score) {
  this.firstScore = score;
  this.frame.push(score);
  return this.firstScore.toString();
};

ScoreBoard.prototype.secondRoll = function(score) {
  this.secondScore = score;
  this.frame.push(score);
  return this.secondScore.toString();
};

ScoreBoard.prototype.rollTurn = function(){
  if (this.frame.length % 2 === 0){
    this.isFirstTurn = true;
    return this.isFirstTurn;
  }
  this.isFirstTurn = false;
  return this.isFirstTurn;
};

ScoreBoard.prototype.getScore = function(score) {
  if (this.isFirstTurn === true) {
    return this.firstRoll(score);
  }
  return this.secondRoll(score);
};
