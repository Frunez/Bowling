
function Bowling(){
}

Bowling.prototype.roll = function(score) {
  if (score == null) {
    this.randomBowl();
    return this.score;
  }
  this.score = score;
  return this.score;
};

Bowling.prototype.randomBowl = function() {
  if (this.score == null || 0) {
    this.score = Math.floor(Math.random()*11);
    return this.score;
  }
  var rest = 11 - this.score;
  this.score = Math.floor(Math.random()*rest);
  return this.score;
};
