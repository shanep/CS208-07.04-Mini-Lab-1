import calcWordFrequencies from './index.js';

QUnit.test('5 words input', function(assert) {
   assert.ok(typeof calcWordFrequencies === 'function', 'calcWordFrequencies() is defined');

   const words = 'hey hi Mark hi mark';
   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}\n`; };

   const expectedOutput = `hey 1
hi 2
Mark 1
mark 1
`;

   calcWordFrequencies(words);
   assert.equal(actualOutput, expectedOutput, `Calling with words: ${words}`);
});

QUnit.test('6 words input', function(assert) {
   assert.ok(typeof calcWordFrequencies === 'function', 'calcWordFrequencies() is defined');

   const words = 'pickle test rick Pickle test pickle';
   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}\n`; };

   const expectedOutput = `pickle 2
test 2
rick 1
Pickle 1
`;

   calcWordFrequencies(words);
   assert.equal(actualOutput, expectedOutput, `Calling with words: ${words}`);
});

QUnit.test('16 words input', function(assert) {
   assert.ok(typeof calcWordFrequencies === 'function', 'calcWordFrequencies() is defined');

   const words = 'a cat and a dog may fight but a cat and a cat may fight more';
   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}\n`; };

   const expectedOutput = `a 4
cat 3
and 2
dog 1
may 2
fight 2
but 1
more 1
`;

   calcWordFrequencies(words);
   assert.equal(actualOutput, expectedOutput, `Calling with words: ${words}`);
});