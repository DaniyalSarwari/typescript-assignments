"use strict";
exports.__esModule = true;
exports.contact = exports.email = exports.lastName = exports.firstName = void 0;
var a; //here type is any so any other data type of value can be set lateron
a = 10;
a = "adnan";
//----------------------------------------------
var num; //here we can provide multiple data type with the help of union (|)
num = 27; //valid
num = 'daniyal'; //valid
var x; //ts determine type by annotation
x = 50; //can only assign numbers
var y = 10; //ts determine type by type of value is initialized
//---------------------------------------------
var s = 5;
var abc = s > 5 ? 20 : 'dani'; // here we have union type set by typescript (union means seting multiple types to same variable)
// type of variable abc is determined by the return type
//--------------------------------------------
var n = 40; //true
n = "This is a string"; //true
//----------------------------------------------
function add(a, b) {
    return a + b;
}
//console.log( add( 2, 5 ) );
//-------------------------------------------
exports.firstName = "Daniyal";
exports.lastName = "Sarwari";
//----------another way to export multiple items-----------
var email = 'iamdaniyalsarwari@gmail.com';
exports.email = email;
var contact = 12345678910;
exports.contact = contact;
