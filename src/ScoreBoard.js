function ScoreBoard() {
  this.firstScore = 0;
  this.secondScore = 0;
  this.isFirstTurn = true;
  this.frame = [];
  this.allFrames = [];
  this.turn = 0;
  this.allTotals = [];
  this.frameArray = [];
  this.gameTotal = 0;
}

ScoreBoard.prototype.firstRoll = function(score) {
  this.firstScore = score;
  this.frame = [];
  this.frame.push(score);
  return this.firstScore.toString();
};

ScoreBoard.prototype.secondRoll = function(score) {
  this.secondScore = score;
  this.frame.push(score);
  this.storeFrames(this.frame);
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
  if (this.rollTurn() === true) {
    return this.firstRoll(score);
  }
  return this.secondRoll(score);
};

ScoreBoard.prototype.storeFrames = function(frame) {
  this.allFrames.push(frame);
};

ScoreBoard.prototype.currentTurn = function() {
  this.turn = this.allFrames.length;
  return this.turn;
};

ScoreBoard.prototype.turnTotal = function() {
  this.currentTurn();
  this.frameArray = this.allFrames[this.turn - 1];
  if (this.frame.length == 2){
    var frameTotal = this.frameArray[0] + this.frameArray[1];
  } else {
    var frameTotal = this.frame[0];
  }
  return frameTotal;
};

ScoreBoard.prototype.sumTotal = function(total) {
  console.log(this.gameTotal += total);
  return this.gameTotal;
};
