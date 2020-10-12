var assert = require('assert');
var words = require('./words');

describe('Word count', async function() {
  describe('One word', async function() {
    it('should return 1 when only one word is present', async function() {
      const count = await words.count('Hello');
      assert.strictEqual(count, 1);
    });
    it('should return 2 when only two word is present', async function() {
      const count = await words.count('Hello you');
      assert.strictEqual(count, 1);
    });
  });
});