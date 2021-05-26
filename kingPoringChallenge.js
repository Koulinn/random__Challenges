// Firstly google what is a poring ;)

/*     ======= Challenge =======

King Poring is on the field and you need to determine his position
He receives the following commands 'R','L' that rotate him 90 degrees, and 'M' move him forward in the direction that he is facing
Write code to determine his position and the direction that he is faced after receiving a string of commands.
The position are represented like initial letter of cardinal orientation ('N', 'W', 'S', 'E')
He always start at (0,0, 'N')

King Poring forgot how to return to the begging, help him to find the fastest route to the begging (0, 0). You need to return the number of steps and a list of Command for his return! 


Example
String of command -> `"R", "L", "M", "R"` -> Output (0,1,'W') 

*/

/*
Notes

*/

function moveKingPoring(str) {
    let currentFacedPosition = 'N'
    let XPosition = 0
    let YPosition = 0
    let currentCommand = ''

    for (let i = 0; i < str.length; i++) {
        currentCommand = str[i]

        if (currentCommand === 'M') {
            switch (currentFacedPosition) {
                case 'N': YPosition++; break
                case 'S': YPosition--; break
                case 'W': XPosition--; break
                default: XPosition++;
            }
            continue
        }
        if (currentFacedPosition === 'N') {
            switch (currentCommand) {
                case 'L': currentFacedPosition = 'W'; break
                case 'R': currentFacedPosition = 'E'; break
                default:
            }
            continue
        }
        if (currentFacedPosition === 'W') {
            switch (currentCommand) {
                case 'L': currentFacedPosition = 'S'; break
                case 'R': currentFacedPosition = 'N'; break
                default:
            }
            continue
        }
        if (currentFacedPosition === 'S') {
            switch (currentCommand) {
                case 'L': currentFacedPosition = 'E'; break
                case 'R': currentFacedPosition = 'W'; break
                default:
            }
            continue
        }
        if (currentFacedPosition === 'E') {
            switch (currentCommand) {
                case 'L': currentFacedPosition = 'N'; break
                case 'R': currentFacedPosition = 'S'; break
                default:
            }
            continue
        }

    }

    function returnToTheBeginning() {
        let numberOfMoviment = 0

        if (
            (currentFacedPosition === 'W' && XPosition < 0) ||
            (currentFacedPosition === 'E' && XPosition > 0) ||
            (currentFacedPosition === 'N' && YPosition > 0) ||
            (currentFacedPosition === 'S' && YPosition < 0) 
        ) {
            return numberOfMoviment = 2 + Math.abs(YPosition) + Math.abs(XPosition)

        } else if (
            (currentFacedPosition === 'W' && (YPosition === 0 && XPosition > 0)) ||
            (currentFacedPosition === 'E' && (YPosition === 0 && XPosition < 0)) ||
            (currentFacedPosition === 'N' && (YPosition < 0 && XPosition === 0)) ||
            (currentFacedPosition === 'S' && (YPosition > 0 && XPosition === 0))
            
        ){
            return numberOfMoviment = Math.abs(YPosition) + Math.abs(XPosition)

        } else {

        } return numberOfMoviment = 1 + Math.abs(YPosition) + Math.abs(XPosition)
    }

    let turnAround = returnToTheBeginning()
    // console.log(currentFacedPosition, XPosition, YPosition)
    return (` Current position -> (${XPosition}, ${YPosition}, ${currentFacedPosition})
        How to return to the begging -> ${turnAround}
        `)
}

let strr = 'MMMMLRMMMLMLMLRMLMRLRMLRMRMRLRMLRMLRRLMRL'

console.log(moveKingPoring(strr))