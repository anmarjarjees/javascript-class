/*
Besides running JavaScript on the Browser,
We can also run JavaScript using Node Sever (Optional in this course)
In such case we only deal with the JS file itself (no HTML/CSS)

NOTE:
We will just try this way for just a quick demonstration only,
as we need to use JS with a full webpage in this module and using DOM also.

First: 
Download and install Node: https://nodejs.org/en/
Just follow the steps with the default selected options
The browser will deduct your OS:
 
Example:
Download for Windows (x64)
16.14.0 LTS
Recommended For Most Users

Second:
In VScode, click "View" menu => Terminal (CTRL+`)
To check the installation/versions of nodeJS, type the command: 
 
node --version

OR:

node -v

This command will return the current installed version in your system:
v.16.14.0
 

Third (The actual needed commands):
type "node" followed by the JS file name, 
in our current folder we hav "script.js" and "d.js-node.js":

The command: 
node d.js-node.js

OR Just the file name without the extension:
node d.js-node


NOTES: 
- When you open the "Terminal Window", VScode will be in the root folder for our module,
not inside "lesson01" for example. 
You need to call this directory using: cd lesson01
Then run the file

- To clear the Terminal window, type: cls
cls for clear screen

- You can use the the Up or Down arrow to browse your commands history in the terminal window
*/

console.log("Running a JavaScript file with nodeJS!");

// This code will generate an error
// as alert() is a method that belongs to the browser window (not terminal)
// alert('testing');