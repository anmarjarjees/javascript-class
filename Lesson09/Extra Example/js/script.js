// my JavaScript code
function findResult() {
    // 1. we need to take the input values of the user first and save them into js variable
    /*
        What do you think will be the type of the user values:
        - number
        - string
        - boolean (true and false)

        since we put type="text" so the user values will of type string
        so can name our variable like user Input of type string ==> userInputStr
    */
    var userInputStr = document.getElementById("numbers").value;
    // we want to check if we are really going to take the values of user input
    // console.log(userInputStr); // ok

    /*
        we need to convert the user input of string data type into an array of numbers
        you can refere to our old file named "string-object.html"

        so can use the built-in method of string object in JS called "split()"

        strObjectName.split(argument1)
        argument1 ==> the type of delimeter whether it's space, comma, dash, etc...

        since this method will explod the sting data into an array, so we need to create
        a new variable of type array to save the result of split() method directly
    */
    var userInputArray = userInputStr.split(" ");
    console.log(userInputArray); // for testing

    // we need to scan each value in the array to see if it's even or odd number
    /*
        you can refer to "even-odd.html"
    */

    var sumOdd = 0;
    var sumEven = 0;
    /*
         we don't know how many numbers the user will input,
         but we know that array object has length property
         to return the size of the array (number of elements)
         and since "userInputArray" is an arry object
         so we can use the length property with it
     */
    for (var i = 0; i < userInputArray.length; i++) {
        // if the remainder of division is 0 ==> even number
        // else it's an odd number
        // to find the remainder we can use the symbol %
        if (userInputArray[i] % 2 == 0) {
            // the total (sum) of all even numbers
            /*
            notice that we have to convert the element inside 
            the array into a numeric values:
            like "1" to be 1
            or "22" to be 22

            We can use our common methods: parseFloat() or parseInt()
            Or 
            you can put the + signe before the element to make a postive 
            numeric value

            so below we used both of them just FYI:
            you can pick any one for your project
            */
            sumEven = sumEven + parseFloat(userInputArray[i]);
        } else {
            // odd number
            sumOdd = sumOdd + +userInputArray[i];
        }
    }
    // for testing:
    console.log("even: ", sumEven);
    console.log("odd: ", sumOdd);


    /* 
    we need to know whether the user selectd the 
    even number radio button or odd number radio button

    we need to use and extra property named checked
    */
    if (document.getElementById("even").checked) {
        // do the code for even total 
        // alert("even");
        document.getElementById("result").innerHTML = sumEven;
    } else {
        // do the code for odd total
        // alert("odd");
        document.getElementById("result").innerHTML = sumOdd;
    }
}