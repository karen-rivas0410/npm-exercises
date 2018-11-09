"use strict";

let sayHello = () => console.log('hello');

sayHello();


// index.js--REQUIRE METHOD!!--//
const { niceMessage } = require('./say-hello');

console.log(niceMessage()); // outputs from say-hello.js


// index.js--  METHOD!!--//
//
// import say-Hello from './say-hello';
//
// console.log(say-hello); //
