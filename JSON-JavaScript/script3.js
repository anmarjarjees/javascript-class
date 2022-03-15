// This file is linked to "index2-parsing-json.html"
/*
Important Note about file extensions:
XML Document (file): file-name.xml
JSON Document (file): file-name.json
*/

// To be completed...

/*
We need to access an external JSON file "music-inst.json"
To be used in our code.
We can use import from:

Use of native JavaScript modules 
is dependent on the import and export statements; 
IE browsers cannot support these features

Once you've exported some features out of your module, 
you need to import them into your script to be able to use them.

Notice below, we don't add the extension music-inst.js
as in JS script, we only import .js files
like when we import python modules, we don't add .py

Example:
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_features_into_your_script

GitHub: https://github.com/mdn/js-examples/tree/master/modules/basic-modules
*/
import { musicInstruments } from './modules/music_inst.js';

/*
Running in a virtual server to avoid "CORS POLICY" error
*/
// Test:
console.log(musicInstruments);
