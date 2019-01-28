// JavaScript Document
/*   jslint browser:true*/
///Adding in the header text

"use strict";


document.querySelector('#headerOne').textContent = "Joe's Bed and Breakfast";
document.querySelector('#headerTwo').textContent = "Breakfast is Better in Bed";
var dateGetter = new Date();
var theDate = "Today's date is " + dateGetter;
document.querySelector('#dateToday').innerHTML = theDate;

var welcomeBox = prompt("Please enter your name", "Jane Doe");

var welcomeAlert = "Welcome, " + welcomeBox + ", to Joe's Bed and Breakfast!";
document.querySelector('#welcomeMsg').textContent = welcomeAlert;