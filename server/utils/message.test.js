var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
it('sould generate correct message object', () => {
  var from = 'Jen';
  var text = 'This should work';
  var message = generateMessage(from,text); 
  
  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from,text});  
 
 });	
});