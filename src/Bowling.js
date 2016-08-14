
Bowling = function(){
  this.score = 0;
};

Bowling.prototype.roll = function() {
  this.score = score;
  if (this.score == null) {
    return this.score = this.randomBowl();
  }
  return this.score = score;
};

Bowling.prototype.getScore = function(score) {
  this.getScore();
  return this.score;
};

Bowling.prototype.randomBowl = function() {
  return Math.floor(Math.random()*11);
};
