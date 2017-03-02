describe('Bowling', function(){
    var bowling;

    beforeEach (function(){
      bowling = new Bowling();
    });

  it('gets the score of current roll', function() {
    expect(bowling.roll(2)).toEqual(2);
  });

  it('gets random score', function() {
    expect(bowling.roll()).toBeLessThan(11);
  });

  it("doesn't return more than 10 after second roll" , function(){
    expect(bowling.roll(9) + bowling.roll()).toBeLessThan(11);
  });

});
