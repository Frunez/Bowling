describe('ScoreBoard', function() {
  var scoreBoard;

  beforeEach(function(){
    scoreBoard = new ScoreBoard();
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
    scoreBoard.getScore(4);
    expect(scoreBoard.rollTurn()).toEqual(false);
  });

  it("stores a frame in an array", function(){
    scoreBoard.firstRoll(3);
    scoreBoard.secondRoll(2);
    expect(scoreBoard.allFrames).toEqual([[3,2]]);
  });

  it("stores 2 frames in an array", function(){
    scoreBoard.getScore(5);
    scoreBoard.getScore(4);
    scoreBoard.getScore(2);
    scoreBoard.getScore(3);
    expect(scoreBoard.allFrames).toEqual([[5,4],[2,3]]);
  });

  describe("#currentTurn", function(){
    it("is first turn", function(){
      expect(scoreBoard.currentTurn()).toEqual(0);
    });
    it("is second turn", function(){
      scoreBoard.firstRoll(5);
      scoreBoard.secondRoll(2);
      expect(scoreBoard.currentTurn()).toEqual(1);
    });
  });

  describe("#turnTotal", function(){
    it("returns total after first roll", function(){
      scoreBoard.firstRoll(5);
      expect(scoreBoard.turnTotal()).toEqual(5);
    });
    it("returns total after turn", function(){
      scoreBoard.firstRoll(5);
      scoreBoard.secondRoll(4);
      expect(scoreBoard.turnTotal()).toEqual(9);
    });
    it("returns total score of third turn", function(){
      scoreBoard.firstRoll(5);
      scoreBoard.secondRoll(4);
      scoreBoard.firstRoll(2);
      scoreBoard.secondRoll(6);
      scoreBoard.firstRoll(3);
      scoreBoard.secondRoll(2);
      expect(scoreBoard.turnTotal()).toEqual(5);
    });
  });
});
