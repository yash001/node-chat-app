const expect = require('expect');

// import isrealstring
const {isRealString} = require('./validation');
// isRealString
   // should reject non-string values
   // should reject string with only space
   // should allow string with non-space characters 

describe('isRealString',() => {
	it('should reject non-string values',() => {
	var res = isRealString(98);
	expect(res).toBe(false);
	});
	
	it('should reject string with only space', () => {
	var res = isRealString('        ');
	expect(res).toBe(false);	
	});
	
	
	it(' should allow string with non-space characters', () => {
	var res = isRealString(' Andrew   ');
	expect(res).toBe(true);	
	});
});