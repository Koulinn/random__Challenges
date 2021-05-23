// Firstly google what is a poring ;)

/*     ======= Challenge =======

King Poring is on the field and you need to determine his position
He receives the following commands 'R','L' that rotate him 90 degrees, and 'M' move him forward in the direction that he is facing
Write code to determine his position and the direction that he is faced after receiving a string of commands.
The position are represented like initial letter of cardinal orientation ('N', 'W', 'S', 'E')
He always start at (0,0, 'N')


Example
String of command -> `"R", "L", "M", "R"` -> Output (0,1,'W') 

*/

/*
Always starts at (0,0, N)

Only changes X,Y if after an 'M'
'R' and 'L' only changes his faced position

Need to check his faced position first
if faced position is N or S change Y
if faced position is W or E change X

N change Y + 1
S change Y -1
W change X -1
E change X +1

*/

function moveKingPoring(str) {
    let currentFacedPosition = 'N'
    let initialXPosition = 0
    let initialYPosition = 0
    let currentCommand = ''

    for (let i = 0; i < str.length; i++) {
        currentCommand = str[i]

        if (currentCommand === 'M') {
            switch (currentFacedPosition) {
                case 'N': initialYPosition++; break
                case 'S': initialYPosition--; break
                case 'W': initialXPosition--; break
                default: initialXPosition++;
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
    console.log(currentFacedPosition, initialXPosition, initialYPosition)
}
let strr = 'MLLMLMLM'

console.log(moveKingPoring(strr))