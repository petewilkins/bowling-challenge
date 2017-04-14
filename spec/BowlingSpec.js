'use script';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('initially', function() {
    it('starts at 0 points', function() {
      expect(bowling.getCurrentScore()).toEqual(0);
    });

    it('starts at frame 1', function() {
      expect(bowling.getCurrentFrame()).toEqual(1);
    });

    it('starts at roll 1', function() {
      expect(bowling.getCurrentRoll()).toEqual(1);
    });

    it('frame complete is false', function() {
      expect(bowling.isFrameComplete()).toBeFalsy();
    })
  });

  describe('score', function() {
    it('increases score with add()', function() {
      bowling.add(1);
      expect(bowling.getCurrentScore()).toEqual(1);
    });
  });

  describe('bowl', function() {
    it('increments roll by 1', function() {
      bowling.bowl(1);
      expect(bowling.getCurrentRoll()).toEqual(2);
    });

    it('returns number of pins scored', function() {
      bowling.bowl(5);
      expect(bowling.getFrameScore()).toEqual(5);
    });
  });

  describe('frame complete', function() {
    it('is true after 2 bowls', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.isFrameComplete()).toBeTruthy();
    });
  });
});
