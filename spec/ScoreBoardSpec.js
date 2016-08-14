describe('ScoreBoard', function() {
  var scoreBoard;
  var bowling;

  beforeEach(function(){
    scoreBoard = new ScoreBoard();
    bowling = jasmine.createSpyObj('bowling', ['getScore']);
  });

  it('displays points of first roll', function(){
    bowling.getScore(6);
    expect(scoreBoard.firstRoll(6)).toEqual('6');
  });

  it('displays points of second roll', function(){
    bowling.andReturn(2);
    expect(scoreBoard.firstRoll()).toEqual('2');
  });
});
