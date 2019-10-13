var assert = require('assert');
var words = require('./words');

describe('Word count', function() {
  describe('One word', function() {
    it('should return 1 when only one word is present', function() {
      assert.equal(words.count('Hello'), 1);
    });
    it('should return 2 when only two word is present', function() {
      assert.equal(words.count('Hello you'), 1);
    });
  });
});