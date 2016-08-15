describe('ScoreBoard', function() {
  var scoreBoard;

  beforeEach(function(){
    scoreBoard = new ScoreBoard();
    // bowling = jasmine.createSpyObj('Bowling', ['getScore']);
  });

  it('displays points of first roll', function(){
    expect(scoreBoard.getScore(6)).toEqual('6');
  });

  it('displays points of second roll', function(){
    scoreBoard.getScore(4);
    expect(scoreBoard.getScore(2)).toEqual('2');
  });

  it("returns true if it is your first turn", function(){
    expect(scoreBoard.rollTurn()).toEqual(true);
  });

  it("returns false if you are on your second turn", function(){
    scoreBoard.firstRoll(4);
    expect(scoreBoard.rollTurn()).toEqual(false);
  });

});
