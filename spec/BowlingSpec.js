describe('Bowling', function(){

    var bowling;

    beforeEach (function(){
      bowling = new Bowling();
    });

  it('gets the score of current roll', function() {
    expect(bowling.getScore(2)).toEqual(2);
  });

  it('gets random score', function() {
    expect(bowling.getScore()).toBeLessThan(11)
  });


});
