var moment = require('moment');

// 1st Jan 1970 00:00:00 am
 
//var date = new Date();
//console.log(date.getMonth());
//console.log("hi");

//var date = moment();
//date.add(100,'year').subtract(9,'months');
//console.log(date.format('MMM Do, YYYY'))

// 10:35 am
// 6:01  am


var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt); 
console.log(date.format( 'h:mm a'));

