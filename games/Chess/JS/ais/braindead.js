function startBraindead() {
    console.log("braindead Ai started")
    var move = window.sessionStorage.getItem("move");
    if(move = "b") {
        window.sessionStorage.setItem("move", "w")
    } else {
        window.sessionStorage.setItem("move", "b")
    }
    pickMove()
}

function pickMove() {
    var pieces = JSON.parse(window.sessionStorage.getItem("aiPieces"));
    var possibleMoveArray = []
    for(var j = 0; j < pieces.length; j++) {
        for(var i = 0; i < pieces[j].length; i++) {
            if(pieces[j][i].moves.length > 0) {
                possibleMoveArray.push(pieces[j][i])
            }
        }
    }
    var chck = 0
    var randomPiece
    while(chck == 0) {
        randomPiece = possibleMoveArray[Math.floor(Math.random() * possibleMoveArray.length)]
        if(randomPiece.moves.length > 0) {
            chck = 1
        }
    }
    console.log(randomPiece)
    var randomMove = randomPiece.moves[Math.floor(Math.random() * randomPiece.moves.length)]
    console.log(randomMove)
    aimove(randomPiece, randomMove)
} 