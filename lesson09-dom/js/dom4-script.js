// NOTE: This file is used/called by "d.dom4.html"
// Our pure JS code goes her
function findResult() {
    /*
        we need to take the user input (numbers)
        getElementById()
    */

    // the user input will be just a text (string ) of numbers
    // HTML form input field convert the user input to text
    var userInputStr = document.getElementById("numbers").value;

    // for testing we will use the console window
    // to output the user's values (his/her numbers);
    // so we will output the value of this variable "userInputStr"
    console.log(userInputStr); // "1 2 3 4 5"

    // to remove all the extra spaces before and after the user input (Remove whitespace from both sides of a string) 
    // we can use the JavaScript built-in method trim() as we covered before
    userInputStr = userInputStr.trim(); // "1 2 3 4 5"

    // we need to convert this string into an array:
    // using split() method of string object to split the string letters into an array
    // split() method (function) needs one parameter which the delimiter
    // in our example the delimiter will be a space
    var userNumberArray = userInputStr.split(" ");
    //  userNumberArray = [ "1", "2", "3", "4", "5"]
    console.log(userNumberArray);

    // we want to get the user input for which option/radio button was clicked/checked/selected
    // we will use if condition:

    /*
    The returned value or the final calculation result for each if condition 
    has to be saved into a global variable and let's name it "result"
    Yes, it's a global variable based on "findResult" function 
    (it’s a local variable based on the entire JS file)
    you will need to declare this empty variable first, then use it inside each if condition or else block:
    */

    // declare our new global variable to contain the result:
    var result;
    // Using the DOM property named "checked"
    if (document.getElementById("mul").checked) {
        // for testing:
        // alert("multiply");

        // The code below will be about JS skills that we learnt before:
        // now we need to start writing the code for multiplying all the numbers in the array using for loop:
        result = 1; // We need to set the initial value to 1 => we are going to multiply not adding!
        for (let i = 0; i < userNumberArray.length; i++) {
            // The formula to calculate the result
            /*
            NOTE:
            Notice  that there is no need to use parseFloat() because JS will convert the string into a number
            */
            result *= userNumberArray[i]; // "1" * "2" = 1 * 2 * 3 * 4 * 5
        }
    } else if (document.getElementById("div").checked) {
        // alert("Divide");
        // Task: to find the division of all numbers
        result = "Dividing all numbers! You can try it :-)";
    }
    else {
        result = userNumberArray.length;
    }

    // at the end of the if else block:
    document.getElementById("result").innerHTML = result;

    // for testing:
    console.log(document.getElementById("mul").value); // 1
    console.log(document.getElementById("div").value); // 2
    console.log(document.getElementById("ctn").value); // 3

    // NOTE: We can NOT use this if/else block because all radio button will have their values always:
    if (document.getElementById("mul").value == "1") {
        console.log("write my code for multiplying");
    } else if (document.getElementById("mul").value == "2") {
        console.log("write my code for multiplying");
    }
    else { // This else block will never run
        console.log("write my code for dividing");
    }
} // end function findResult()
