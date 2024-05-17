function genboard(pieces, s) {
    var s = window.innerHeight / 8
    window.sessionStorage.setItem("s", s)
    var off 
    off = s * 8
    off = window.innerWidth - off
    off = off / 2
    var pieces = []
    if(s2 == "white") {
        pieces = [
            ["rookBlack", "knightBlack", "bishopBlack", "queenBlack", "kingBlack", "bishopBlack", "knightBlack", "rookBlack"], 
            ["pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack"],            
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite"],
            ["rookWhite", "knightWhite", "bishopWhite", "queenWhite", "kingWhite", "bishopWhite", "knightWhite", "rookWhite"], 
        ]
    } else if(s2 == "black") {
        pieces = [
            ["rookWhite", "knightWhite", "bishopWhite", "kingWhite", "queenWhite", "bishopWhite", "knightWhite", "rookWhite"], 
            ["pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite", "pawnWhite"],  
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["", "", "", "", "", "", "", ""], 
            ["pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack", "pawnBlack"], 
            ["rookBlack", "knightBlack", "bishopBlack", "kingBlack", "queenBlack", "bishopBlack", "knightBlack", "rookBlack"], 
        ]
    }
    var num = 1
    for(var j = 0; j < 8; j++) {
        for(var i = 0; i < 8; i++) {
            var e = document.createElement("div")
            if(j % 2 == 0) {
                if(i % 2 == 0) {
                    e.style.backgroundColor = "white"
                } else  {
                    e.style.backgroundColor = "#43464a"
                }
            } else {
                if(i % 2 == 0) {
                    e.style.backgroundColor = "#43464a"
                } else {   
                    e.style.backgroundColor = "white"
                }
            }
            e.style.width = `${s}px`
            e.style.height = `${s}px`
            e.classList.add("noselect")
            e.id = `${num}`
            e.style.textAlign = "center"
            var img = document.createElement("img")
            if(document.getElementById(pieces[j][i]) != undefined) {
                var im = document.getElementById(`${pieces[j][i]}`)
                img.src = im.src
                img.style.width = `${s * 0.9}px`
                img.style.height = `${s * 0.9}px`   
                img.style.padding = `${s * 0.05}px`
                var color = cchck(pieces[j][i])
            } 
            var c = document.getElementById("con")
            c.appendChild(e)
            num++
        }
    }
}

function cchck(piece) { 
    var color 
    for(var i = 0; i < piece.length; i++) {
        if(piece.charAt(i) == "W") {
            color = "white"
        } else if(piece.charAt(i) == "B") {
            color = "black"
        }
    }
    if(piece.includes("Dot")) {
        color = "green"
    }
    return color 
}