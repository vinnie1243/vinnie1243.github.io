function startAi() {
    window.sessionStorage.setItem("aiStarted", true )
    setInterval(() => {
        while(document.getElementById("local").checked != true) {
            var toMove = window.sessionStorage.getItem("move");
            var s = window.localStorage.getItem("switch");
            if(toMove == "w" && s == "black") {
                ai()
                if(toMove == "w") {
                    window.sessionStorage.setItem("move", "b")
                } else {
                    window.sessionStorage.setItem("move", "w")
                }
            } else if(toMove == "b" && s == "white") {
                ai()
                if(toMove == "w") {
                    window.sessionStorage.setItem("move", "b")
                } else {
                    window.sessionStorage.setItem("move", "w")
                }
            }

            return
        }
    }, 500);
    document.getElementById("startButton").remove()
}

function ai() {
    genMove()
    var difficulty = window.sessionStorage.getItem("difficulty");
    pick(difficulty)
}

function pick(input) {
  switch(input) {
        case "braindead":
            startBraindead()
        break;
        case "easy":
            startEasy()
        break;
        case "medium":
            startMedium()
        break
        case "hard": 
            startHard()
        break;
        case "impossible":
            startImpossible()
        break
    }
}

async function genMove() {
    var pieces = []
    for(var i = 0; i < 8; i++) {
        var row = [
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            }, 
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
            {
                piece: "",
                color: "",
                url: "",
                pos: null,
                moves: [],
            },
        ]
        pieces.push(row)
    }
    var pieceArray = JSON.parse(window.sessionStorage.getItem("parr"));
    var iter = 0
    var sw = window.localStorage.getItem("switch")
    var aiColor
    if(sw == "white") {
        aiColor = "black"
    } else {
        aiColor = "white"
    }
    for(var j = 0; j < 8; j++) {
        for(var i = 0; i < 8; i++) {
            iter++
            var piece = pieceArray[j][i]
            if(piece != "") {
                var color 
                if(piece.includes("White")) {
                    color = "white"
                } else {
                    color = "black"
                }
                if(color == aiColor) {
                    var piece2 = document.getElementById(iter)
                    piece2 = piece2.children[0]
                    var pieceUrl = piece2.src
                    var pieceName = pichck(pieceUrl)
                    pieces[j][i].piece = pieceName
                    pieces[j][i].color = color
                    pieces[j][i].url = pieceUrl
                    pieces[j][i].pos = iter
                    pieces[j][i].moves = await gen(pieceUrl, iter, color, true)
                }
            }
        }
    }
    console.log(pieces, "Pieces array")
    window.sessionStorage.setItem("aiPieces", JSON.stringify(pieces))
}

function randFEN() {
    Array.prototype.shuffle = function() {
        for (let i = this.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [this[i], this[j]] = [this[j], this[i]];
        }
    }
    
    function randomFEN() {
    
      let board = [];
      for (let x = 0; x < 8; x++) board.push('. . . . . . . .'.split(' '));
    
      function getRandPos() {
        return [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
      }
    
      function isOccupied(pos) {  
        return board[pos[0]][pos[1]] != '.';
      }
    
      function isAdjacent(pos1, pos2) {
        if (pos1[0] == pos2[0] || pos1[0] == pos2[0]-1 || pos1[0] == pos2[0]+1)
        if (pos1[1] == pos2[1] || pos1[1] == pos2[1]-1 || pos1[1] == pos2[1]+1)
          return true;
        return false;
      }
    
      // place kings
      let wk, bk;
      do { wk = getRandPos(); bk = getRandPos(); }
      while (isAdjacent(wk, bk));
      board[wk[0]][wk[1]] = 'K';
      board[bk[0]][bk[1]] = 'k';
    
      // get peaces
      let peaces = [];
      let names = 'PRNBQ';
      function pick() {
        for (x = 1; x < Math.floor(Math.random() * 32); x++)
          peaces.push(names[Math.floor(Math.random() * names.length)]);
      }
      pick();
      names = names.toLowerCase();
      pick();
      peaces.shuffle();
    
      // place peices
      while (peaces.length > 0) {
        let p = peaces.shift(), pos;
        // paws: cannot be placed in bottom or top row
        if (p == 'p' || p == 'P')
          do { pos = getRandPos() }
          while (isOccupied(pos) || pos[0] == 0 || pos[0] == 7);
        // everything else
        else do { pos = getRandPos(); } while (isOccupied(pos));
        board[pos[0]][pos[1]] = p;
      }
    
      // write FEN
      let fen = [];
      for (x = 0; x < board.length; x++) {
        let str ='', buf = 0;
        for (let y = 0; y < board[x].length; y++)
          if (board[x][y] == '.') buf++;
          else {
            if (buf > 0) { str += buf; buf = 0; }
            str += board[x][y];
          }
        if (buf > 0) str += buf;
        fen.push(str);
      }
      fen = fen.join('/') + ' w - - 0 1';
      return fen;
    }
    
    // example
    console.log(randomFEN());
}

function aimove(randomPiece, randomMove) {
    window.sessionStorage.setItem("sp", randomPiece.pos + "$")
    var manufacturedEvent = new Event("click", { bubbles: true })
    window.sessionStorage.setItem("aimove", randomPiece.pos)
    //fix arr2 so moves actually work
    var npos = randomMove
    var color = randomPiece.color
    var sw = window.localStorage.getItem("switch")
    var nSqrC = takec(npos, color)
    var piece = randomPiece.piece
    var nmove = "NA"
    var cpos = randomPiece.pos
    var arr2 = [] 
    var newarrpart = [Number.parseInt(npos), color, sw, nSqrC, piece, nmove, cpos, "t"]
    arr2.push(newarrpart)
    window.sessionStorage.setItem("arr2", JSON.stringify(arr2))
    //make the move
    console.log(randomPiece, randomMove)
    move(manufacturedEvent, true)
}