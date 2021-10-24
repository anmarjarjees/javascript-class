// JavaScript Document
/*
Problem:
1. We will ask the user to enter the number of exams that they finished
2. We will ask the user to enter the mark of each exam. So if the user finished 3 exams, we will ask them 3 times
3. In each time we ask, the exam value/mark has to be placed/saved into an array. So we need to create a new array to hold all the marks.
4. To find the maximum and the minimum marks
*/

// 1- ask for the exams numbers (how many exams?)
var examNum = parseInt(prompt("How many exams you have finished?")); // 3
// 2- We need to check if the user put a number or not:
// to check the value if it's number or not we can use the JavaScript function "isNaN()" ==> is Not a Number
// we need to use if condition
if (isNaN(examNum)) {
	document.write("Invalid Input!");
} else {
	// write the entire code here:
	// for testing:
	// document.write("Ok");
	// all the rest of the code has to be inside the else

	// we need to declare an "empty" array
	var examMarks = [];

	// for keep the user the same question x of times
	// we need to use the loop
	// we can use for, while, do... while

	var index = 0; // this variable will represent the index of each exam value inside the "examMarks[]" array
	/*	
	for (var i=0;i<examNum; i++) {
		examMarks[i] = parseFloat(prompt("Enter the current exam mark"));
	}
	*/

	while (index < examNum) {
		examMarks[index] = parseFloat(prompt("Enter the current exam mark"));
		index++; // index = index+1  
	} // end while

	// good job, we have finished creating the array that contains the exam numbers

	// we can now print the array:
	for (var i = 0; i < examNum; i++) {
		document.write("<br>" + examMarks[i]);
	}


} // end else