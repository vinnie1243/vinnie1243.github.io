function main() {
    var h = window.innerHeight
    var s 
    var off
    s = h / 8
    off = s * 8
    off = window.innerWidth - off
    off = off / 2
    //console.log(s)
    var num = 0
    for(var j = 0; j < 6; j++) {
        for(var i = 0; i < 6; i++) {
            num++
            var el = document.createElement("div")
            el.style.width = (s - 0.8) + "px"
            el.style.height = s + "px"
            el.id = num
            el.style.borderTop = "5px solid black"
            el.style.borderRight = "5px solid black"
            el.style.borderLeft = "5px solid black"
            el.className = "block"
            el.style.textAlign = "center"
            el.addEventListener("dragover", (e) => {
                allowDrop(e)
            })
            el.addEventListener("drop", (e) => {
                drop(e)
            })
            var e = document.createElement("div")
            e.id = num + "$"
            e.classList.add("align")
            e.classList.add("block3")
            e.classList.add("invis")
            e.addEventListener("dragstart", (e) => {
                drag(e)
            })
            el.appendChild(e)
            var con = document.getElementById("con")
            con.appendChild(el)
        }
    }
    
    for(var i = 0; i < 30; i++) {
        var e = document.getElementById(`${i}`)
    }
    for(var i = 1; i < 7; i++) {
        var n = 30 + i
        var e = document.getElementById(`${n}`)
        e.style.borderBottom = "5px solid black"
    }
    var t = s * 6
    //console.log(t)
    var con = document.getElementById("con") 
    con.style.width = (t + (s * 0.38)) + "px"
    con.style.gridTemplateColumns = `${s * 1.05}px ${s * 1.05}px ${s * 1.05}px ${s * 1.05}px ${s * 1.05}px ${s * 1.05}px`
    for(var i = 0; i < 5; i++) {
        num++
        var e = document.createElement("div")
        e.style.width = s + "px"
        e.style.height = s + "px"
        e.style.border = "5px solid black"
        e.id = num
        e.className = "block2"
        e.addEventListener("drop", (e) => {
            drop(e)
        }) 
        e.addEventListener("dragover", (e) => {
            allowDrop(e)
        })
        var con2 = document.getElementById("con2")
        con2.appendChild(e)
    }
    var con2 = document.getElementById("con2")
    con2.style.width = (t + (s * 0.38)) + "px"
    con2.style.gap = (((s * 6) - (s * 5) ) / 3.17) + "px"
    con2.style.gridTemplateColumns = `${s}px ${s}px ${s}px ${s}px ${s}px`
    window.sessionStorage.setItem("s", s)
}

function deal() {
    var chck = document.getElementById("1")
    if(chck.children.length > 0) {
        for(var i = 1; i < 37; i++) {
            var e = document.getElementById(`${i}$`)
            //console.log(e)
            e.remove()
            var el = document.createElement("div")
            el.id = `${i}$`
            el.classList.add("block3")
            el.classList.add("align")
            el.classList.add("invis")
            el.addEventListener("dragstart", (e) => {
                drag(e)
            })
            var c = document.getElementById(`${i}`)
            c.appendChild(el)
        }
    }
    var s = window.sessionStorage.getItem("s")
    for(var i = 1; i < 37; i++) {
        var e = document.getElementById(`${i}$`)
        e.classList.remove("invis")
        var num = Math.round(Math.random() * (7 - 0) + 0);
        //console.log(num)
        var c = colors[num]
        //console.log(c)
        e.style.backgroundColor = c
        e.style.width = (s * 0.9) + "px"
        e.style.height = (s * 0.9) + "px"
        e.style.margin = "auto"
        e.draggable = "true"
    }
    document.querySelector("#in").onclick = reseter;
    color()
}

var colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "darkblue",
    "gray",
    "brown"
]

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.createElement("div")
    var e = document.getElementById(ev.target.id)
}

function drop(ev) {

    var e = ev.target
    if(ev.target.id == ev.toElement.id) {
        stop()
    }
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var kids = 0
    var el = e
    var check = 0
    var num = 0
    //console.log(el.children)
    while (check == 0 && num < 500) {
        //console.log(el)
        num++
        if(el.hasChildNodes == undefined) {
            check = 1
        }
        if(el.hasChildNodes() == true) {
            el = el.children[0]
            kids++
            //console.log(kids)
        } else {
            check = 1
        }
    }
    if(kids > 1) {
        var kid = e.children[kids]
        e.children
    } else {
        e.children[0].id = e.id + "$"
        var kid = e.children[0]
    }
    //console.log(e, kid, kids)
    check3(kid)
    ex()
}

function allowDrop(ev) {
    ev.preventDefault()
}

function check3(kid) {
    var c = document.getElementById(kid.id)
    var s = window.sessionStorage.getItem("s")
    //console.log(s)
    var id = c.id
    var len = id.length
    var num = 0
    for(var j = 0; j < len; j++) {     
        if(id.charAt(j) == '$') {
            num++
        }
    }
    //console.log(num)
    switch (num) {
        case 1:
            c.style.width = Math.round(s * 0.9) + "px"    
            c.style.height = Math.round(s * 0.9) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            }
        break;
        
        case 2:
            c.style.width = Math.round(s * 0.8) + "px"
            c.style.height = Math.round(s * 0.8) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            }
        break;

        case 3:
            c.style.width = Math.round(s * 0.7) + "px"
            c.style.height = Math.round(s * 0.7) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            }
        break;

        case 4:
            c.style.width = Math.round(s * 0.6) + "px"
            c.style.height = Math.round(s * 0.6) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            } 
        break;

        case 5:
            c.style.width = Math.round(s * 0.5) + "px"
            c.style.height = Math.round(s * 0.5) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            }
        break;

        case 6:
            c.style.width = Math.round(s * 0.4) + "px"
            c.style.height = Math.round(s * 0.4) + "px"
            if(c.classList.contains("align") == false) {
                c.classList.add("align")
            }
        break;
    }
} 

function color() {
    var obj = {
        "red": 0,
        "blue": 0,
        "green": 0,
        "orange": 0,
        "purple": 0,
        "darkblue": 0,
        "gray": 0,
        "brown": 0
    }
    for(var i = 1; i < 37; i++) {
        var e = document.getElementById(`${i}$`)
        switch(e.style.backgroundColor) {
            case "red":
                obj.red = obj.red + 1
            break;
            case "blue":
                obj.blue = obj.blue + 1
            break;  
            case "green":
                obj.green = obj.green + 1
            break
            case "orange":
                obj.orange = obj.orange + 1
            break;
            case "purple":
                obj.purple = obj.purple + 1
            break;
            case "darkblue":
                obj.darkblue = obj.darkblue + 1
            break;
            case "gray":
                obj.gray = obj.gray + 1
            break;
            case "brown":
                obj.brown = obj.brown + 1
            break;  
        }
    }
    //console.log(obj)
    var num3 = 0
    var chck1 = 0
    while(chck1 == 0 || num3 > 75) {
        //console.log("test")
        num3++
        while(obj.red > 6) {
            //console.log("test red")
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            var e = document.getElementById(`${num1}$`)
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "red") {
                var c = colors[num2]
                while(c === "red") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break;
                }
                obj.red = obj.red - 1
            }
        }
        while(obj.blue > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            //console.log(num1)
            var e = document.getElementById(`${num1}$`)
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            //console.log("test blue")
            if(e.style.backgroundColor == "blue") {
                var c = colors[num2]
                while(c === "blue") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break;
                }
                obj.blue = obj.blue - 1
            }
        }
        while(obj.green > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            //console.log(num1)
            var e = document.getElementById(`${num1}$`)
            //console.log("test green")
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "green") {
                var c = colors[num2]
                while(c === "green") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break;
                }
                obj.green = obj.green - 1
            }
        } 
        while(obj.orange > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            //console.log(num1)
            var e = document.getElementById(`${num1}$`)
            //console.log("test orange")
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "orange") {
                var c = colors[num2]
                while(c === "orange") {
                    num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break
                }
                obj.orange = obj.orange - 1
            }
        }
        while(obj.purple > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            //console.log(num1)
            var e = document.getElementById(`${num1}$`)
            //console.log("test purple")
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "purple") {
                var c = colors[num2]
                while(c === "purple") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break
                }
                obj.purple = obj.purple - 1
            }
        }
        while(obj.darkblue > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            //console.log(num1)
            var e = document.getElementById(`${num1}$`)
            //console.log("test darkblue")
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "darkblue") {
                var c = colors[num2]
                while(c === "darkblue") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break;
                }
                obj.darkblue = obj.darkblue - 1
            }
        }
        while(obj.gray > 6) {
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            var e = document.getElementById(`${num1}$`)
            //console.log("test gray  ")
            var num2 = Math.round(Math.random() * (6 - 0) + 0);
            if(e.style.backgroundColor == "gray") {
                var c = colors[num2]
                while(c === "gray") {
                    var num2 = Math.round(Math.random() * (6 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "brown":
                        obj.brown = obj.brown + 1
                    break;
                }
                obj.gray = obj.gray - 1
            }
        }
        while(obj.brown > 6) {
            console.log("test brown")
            var num1 = Math.round(Math.random() * (36 - 1) + 1)
            var e = document.getElementById(`${num1}$`)
            var num2 = Math.round(Math.random() * (7 - 0) + 0);
            if(e.style.backgroundColor == "brown") {
                var c = colors[num2]
                while(c === "brown") {
                    var num2 = Math.round(Math.random() * (7 - 0) + 0);
                    c = colors[num2]
                }
                e.style.backgroundColor = c
                switch (c) {
                    case "red":
                        obj.red = obj.red + 1
                    break;
                    case "blue":
                        obj.blue = obj.blue + 1
                    break;
                    case "green":
                        obj.green = obj.green + 1
                    break;
                    case "orange":
                        obj.orange = obj.orange + 1
                    break;
                    case "purple":
                        obj.purple = obj.purple + 1
                    break;
                    case "darkblue":
                        obj.darkblue = obj.darkblue + 1
                    break;
                    case "gray":
                        obj.gray = obj.gray + 1
                    break;
                }
                obj.brown = obj.brown - 1
            }
        }
        if(obj.red <= 6 && obj.blue <= 6 && obj.green <= 6 && obj.orange <= 6 && obj.purple <= 6 && obj.darkblue <= 6 && obj.gray <= 6) {
            chck1 = 1
        }
    } 
    window.sessionStorage.setItem("obj", JSON.stringify(obj))   
    console.log(obj)
} 

function ex() {
    var obj = JSON.parse(window.sessionStorage.getItem("obj"))
    var num = 36
    for(var j = 0; j < 5; j++) {
        num++
        var color = {
            "red": 0,
            "blue": 0,
            "green": 0,
            "orange": 0,
            "purple": 0,
            "darkblue": 0,
            "gray": 0,
            "brown": 0
        }
        var e = document.getElementById(`${num}`)
        var e1 
        var e2 
        var e3 
        var e4 
        var e5 
        var e6 
        if(e.children.length == 1) {
            e1 = e.children[0]
            switch(e1.style.backgroundColor) {
                case "red":
                    color.red = color.red + 1
                break;
                case "blue":
                    color.blue = color.blue + 1
                break;
                case "green":
                    color.green = color.green + 1
                break;
                case "orange":
                    color.orange = color.orange + 1
                break;
                case "purple":
                    color.purple = color.purple + 1
                break;
                case "darkblue":
                    color.darkblue = color.darkblue + 1
                break
                case "gray":
                    color.gray = color.gray + 1
                break
                case "brown":
                    color.brown = color.brown + 1
                break;
            }
            if(e1.children.length == 1) {
                e2 = e1.children[0] 
                switch (e2.style.backgroundColor) {
                    case "red":
                        color.red = color.red + 1
                    break;
                    case "blue":
                        color.blue = color.blue + 1
                    break;
                    case "green":
                        color.green = color.green + 1
                    break; 
                    case "orange":
                        color.orange = color.orange + 1
                    break;
                    case "purple":
                        color.purple = color.purple + 1
                    break;
                    case "darkblue":
                        color.darkblue = color.darkblue + 1
                    break;
                    case "gray":
                        color.gray = color.gray + 1
                    break;
                    case "brown":
                        color.brown = color.brown + 1
                    break;
                }
                if(e2.children.length == 1) {
                    e3 = e2.children[0]
                    switch(e3.style.backgroundColor) {
                        case "red":
                            color.red = color.red + 1
                        break;
                        case "blue":
                            color.blue = color.blue + 1
                        break;
                        case "green":
                            color.green = color.green + 1
                        break;
                        case "orange":
                            color.orange = color.orange + 1
                        break;
                        case "purple":
                            color.purple = color.purple + 1
                        break;
                        case "darkblue":
                            color.darkblue = color.darkblue + 1
                        break;
                        case "gray":
                            color.gray = color.gray + 1
                        break;
                        case "brown":
                            color.brown = color.brown + 1
                        break;
                    }
                    if(e3.children.length == 1) {
                        e4 = e3.children[0]
                        switch(e4.style.backgroundColor) {
                            case "red":
                                color.red = color.red + 1
                            break;
                            case "blue":
                                color.blue = color.blue + 1
                            break;
                            case "green":
                                color.green = color.green + 1
                            break;
                            case "orange":
                                color.orange = color.orange + 1
                            break;
                            case "purple":
                                color.purple = color.purple + 1
                            break;
                            case "darkblue":
                                color.darkblue = color.darkblue + 1
                            break;
                            case "gray":
                                color.gray = color.gray + 1
                            break;
                            case "brown":
                                color.brown = color.brown + 1
                            break;
                        }
                        if(e4.children.length == 1) {
                            e5 = e4.children[0]
                            switch(e5.style.backgroundColor) {
                                case "red":
                                    color.red = color.red + 1
                                break;
                                case "blue":
                                    color.blue = color.blue + 1
                                break;
                                case "green":
                                    color.green = color.green + 1
                                break;
                                case "orange":
                                    color.orange = color.orange + 1
                                break;
                                case "purple":
                                    color.purple = color.purple + 1
                                break;
                                case "darkblue":
                                    color.darkblue = color.darkblue + 1
                                break;
                                case "gray":
                                    color.gray = color.gray + 1
                                break;
                                case "brown":
                                    color.brown = color.brown + 1
                                break;
                            }
                            if(e5.children.length == 1) {
                                e6 = e5.children[0]
                                switch(e6.style.backgroundColor) {
                                    case "red":
                                        color.red = color.red + 1
                                    break;
                                    case "blue":
                                        color.blue = color.blue + 1
                                    break;
                                    case "green":
                                        color.green = color.green + 1
                                    break;
                                    case "orange":
                                        color.orange = color.orange + 1
                                    break;
                                    case "purple":
                                        color.purple = color.purple + 1
                                    break;
                                    case "darkblue":
                                        color.darkblue = color.darkblue + 1
                                    break;
                                    case "gray":
                                        color.gray = color.gray + 1
                                    break;
                                    case "brown":
                                        color.brown = color.brown + 1
                                    break;
                                }
                                if(e6.children.length == 1) {
                                    e7 = e6.children[0]
                                    switch(e7.style.backgroundColor) {
                                        case "red":
                                            color.red = color.red + 1
                                        break;
                                        case "blue":
                                            color.blue = color.blue + 1
                                        break;
                                        case "green":
                                            color.green = color.green + 1
                                        break;
                                        case "orange":
                                            color.orange = color.orange + 1
                                        break;
                                        case "purple":
                                            color.purple = color.purple + 1
                                        break;
                                        case "darkblue":
                                            color.darkblue = color.darkblue + 1
                                        break;
                                        case "gray":
                                            color.gray = color.gray + 1
                                        break;
                                        case "brown":
                                            color.brown = color.brown + 1
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        var chck1
        var chck2
        var chck3
        var chck4
        var chck5
        var chck6
        var chck7
        var chck8
        if(color.red == obj.red) {
            console.log("Red Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck1 = 1
            var rs = document.getElementById("red")
            var data = window.localStorage.getItem("red")
            data = Number.parseInt(data)
            if(data != undefined) {
                if(data == 0) {
                    window.localStorage.setItem("red", obj.red)
                } else {
                    obj.red = data + obj.red
                    window.localStorage.setItem("red", obj.red)
                }
            } else {
                set()
            }
            rs.innerHTML = rs.innerHTML + `${obj.red}`
        }
        if(color.blue == obj.blue) {
            console.log("Blue Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck2 = 1
            var bs = document.getElementById("blue")
            var data = window.localStorage.getItem("blue")
            data = Number.parseInt(data)
            if(data != undefined) {
                if(data == 0) {
                    window.localStorage.setItem("blue", obj.blue)
                } else {
                    obj.blue = data + obj.red
                    window.localStorage.setItem("blue", obj.blue)
                }
            } else {
                set()
            }
            bs.innerHTML = bs.innerHTML + `${obj.blue}`
        }
        if(color.green == obj.green) {
            console.log("Green Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck3 = 1
            var gs = document.getElementById("green")
            gs.innerHTML = gs.innerHTML + `${obj.green}`
        }
        if(color.orange == obj.orange) {
            console.log("Orange Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck4 = 1
            var os = document.getElementById("orange")
            os.innerHTML = os.innerHTML + `${obj.orange}`
        }
        if(color.purple == obj.purple) {
            console.log("Purple Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck5 = 1
            var ps = document.getElementById("purple")
            ps.innerHTML = ps.innerHTML + `${obj.purple}`
        }
        if(color.darkblue == obj.darkblue) {
            console.log("Darkblue Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck6 = 1
            var dbs = document.getElementById("darkblue")
            dbs.innerHTML = dbs.innerHTML + `${obj.darkblue}`
        }
        if(color.gray == obj.gray) {
            console.log("Gray Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck7 = 1
            var grs = document.getElementById("gray")
            grs.innerHTML = grs.innerHTML + `${obj.gray}`
        }
        if(color.brown == obj.brown) {
            console.log("Brown Complete")
            var e = document.getElementById(`${num}$`)
            e.remove()
            chck8 = 1
            var brs = document.getElementById("brown")
            brs.innerHTML = brs.innerHTML + `${obj.brown}`
        }
    }
} 

var reset = {
    clear: function() {
        //main 36 blocks
        for(var i = 1; i < 37; i++) {
            var e = document.getElementById(`${i}$`)
            if(e != null) {
                e.remove()
            }
        }
        //5 bottom blocks
        for(var i = 37; i < 43; i++) {
            var e = document.getElementById(`${i}$`)
            if(e != null) {
                e.remove()
            }
        }
        var rs = document.getElementById("red")
        rs.innerHTML = "Red Score: "
        var bs = document.getElementById("blue")
        bs.innerHTML = "Blue Score: "
        var gs = document.getElementById("green")
        gs.innerHTML = "Green Score: "
        var os = document.getElementById("orange")
        os.innerHTML = "Orange Score: "
        var ps = document.getElementById("purple")
        ps.innerHTML = "Purple Score: "
        var dbs = document.getElementById("darkblue")
        dbs.innerHTML = "Darkblue Score: "
        var grs = document.getElementById("gray")
        grs.innerHTML = "Gray Score: "
        var brs = document.getElementById("brown")
        brs.innerHTML = "Brown Score: "
    },
    gen: function() {
        for(var i = 1; i < 37; i++) {
            var e = document.createElement("div")
            e.id = `${i}$`
            e.classList.add("align")
            e.classList.add("block3")
            e.classList.add("invis")
            var el = document.getElementById(`${i}`)
            el.appendChild(e)
        }
    },
    hard: function() {
        var rs = document.getElementById("red")
        rs.innerHTML = "Red Score: "
        window.localStorage.setItem("red", 0)
        var bs = document.getElementById("blue")
        bs.innerHTML = "Blue Score: "
        window.localStorage.setItem("blue", 0)
        var gs = document.getElementById("green")
        gs.innerHTML = "Green Score: "
        window.localStorage.setItem("green", 0)
        var os = document.getElementById("orange")
        os.innerHTML = "Orange Score: "
        window.localStorage.setItem("orange", 0)
        var ps = document.getElementById("purple")
        ps.innerHTML = "Purple Score: "
        window.localStorage.setItem("purple", 0)
        var dbs = document.getElementById("darkblue")
        dbs.innerHTML = "Darkblue Score: "
        window.localStorage.setItem("darkblue", 0)
        var grs = document.getElementById("gray")
        grs.innerHTML = "Gray Score: "
        window.localStorage.setItem("gray", 0)
        var brs = document.getElementById("brown")
        brs.innerHTML = "Brown Score: "
        window.localStorage.setItem("brown", 0)
    }
}

function reseter() {
    reset.clear()
    reset.gen()
    deal()
}

function set() {
    window.localStorage.setItem("red", 0)
    window.localStorage.setItem("blue", 0)
    window.localStorage.setItem("green", 0)
    window.localStorage.setItem("orange", 0)
    window.localStorage.setItem("purple", 0)
    window.localStorage.setItem("darkblue", 0)
    window.localStorage.setItem("gray", 0)
    window.localStorage.setItem("brown", 0)
}