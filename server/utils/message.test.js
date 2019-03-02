var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
it('sould generate correct message object', () => {
  var from = 'Jen';
  var text = 'This should work';
  var message = generateMessage(from,text); 
  
  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from,text});  
 
 });	
});

describe('', () => {
it('sould generate correct location object', () => {
var from = "Deb";
var latitude = 15;
var longitude = 19;
var url = 'https://www.google.com/maps?q=15,19';
	var message =   generateLocationMessage(from,latitude,longitude);
	
	 expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from,url});  
 });
});