/*
The first thing you do to get access to module features is export them. This is done using the export statement.

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features

You can export functions, var, let, const, and classes.

The easiest way to use it is to place it 
in front of any items you want exported out of the module, 
for example:
*/

export const musicInstruments = [
    {
        "name": "Piano",
        "history": "very old",
        "specs": {
            "type": [
                "Baby Grand",
                "Parlor Grand",
                "Concert Grand"
            ],
            "category": [
                "61 keys",
                "76 keys",
                "88 keys"
            ]
        }
    },
    {
        "name": "Guitar",
        "history": "old",
        "specs": {
            "type": [
                "Acoustic",
                "Eclectic",
                "Classical"
            ],
            "category": [
                "6 strings",
                "12 strings",
                "8 strings"
            ]
        }
    },
    {
        "name": "Ukulele",
        "history": "new",
        "specs": {
            "type": [
                "Soprano",
                "Concert",
                "Tenor"
            ],
            "category": [
                "12 Frets",
                "13 Frets",
                "14 Frets"
            ]
        }
    }
]

