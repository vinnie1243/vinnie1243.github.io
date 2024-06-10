function main() {
    setvals()
    var arr = displayArr();
    document.getElementById("displayData").data = arr;
    var canvas = document.getElementById("simarea");
    var ctx = canvas.getContext("2d");
    ctx.scale(4,4);
    ctx.translate(-0.5, -0.5)
    console.log(canvas.width, canvas.height)
    window.sessionStorage.setItem("canvasW", canvas.width);
    window.sessionStorage.setItem("canvasH", canvas.height);
    var div = document.getElementById("noscroll");
    div.scrollTop = 51;
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const elementRelativeX = e.clientX - rect.left;
        const elementRelativeY = e.clientY - rect.top;
        var x = Math.round(elementRelativeX * canvas.width / rect.width)
        var y = Math.round(elementRelativeY * canvas.height / rect.height)
        x = Math.round(x/4)
        y = Math.round(y/4)
        window.sessionStorage.setItem("mouseX", x);
        window.sessionStorage.setItem("mouseY", y);
    });
    document.getElementById("powder").click();
    setInterval(() => {
        gameloop();
    }, 1000/30);
    setInterval(() => {
        var arr = document.getElementById("displayData").data;
        for(var i = 0; i < arr.length; i++) {
            arr[i].change = false;
        }
        var div = document.getElementById("noscroll");
        div.scrollTop = 51;
    }, 1000/15);

}

function gameloop() {
    spawnElement()
    physics();
    decDelays();
    drawCanvas();   
}

function setvals() {
    window.sessionStorage.setItem("radius", 0.01);
    window.sessionStorage.setItem("selectedEle", "dust");
    window.sessionStorage.setItem("mouseX", 0);
    window.sessionStorage.setItem("mouseY", 0);
    window.sessionStorage.setItem("spawn", false);
    //delays
    window.sessionStorage.setItem("spawnD", 0);
}

function del(e) {
    e.preventDefault()
    window.sessionStorage.setItem("spawn", false);
    var arr = document.getElementById("displayData").data;
    var radius = window.sessionStorage.getItem("radius");
    var x = window.sessionStorage.getItem("mouseX");
    var y = window.sessionStorage.getItem("mouseY");
    x = Number.parseInt(x)
    y = Number.parseInt(y)
    radius = Number.parseInt(radius)
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].x <= Math.round(x + (radius/2)) && arr[i].x >= Math.round(x - (radius/2)) && arr[i].y <= Math.round(y + (radius/2)) && arr[i].y >= Math.round(y - (radius/2)) && arr[i].element.id != null) {
            arr[i].element =  {
                id: null,
                temp: null,
                charge: null,
                velocity: null,
                direction: null,
                state: null,
            },
            arr[i].color = "#000000";

        }
    }
}

function spawnElement() {
    if(JSON.parse(window.sessionStorage.getItem("spawn")) == true && window.sessionStorage.getItem("spawnD") == 0) {
        window.sessionStorage.setItem("spawnD", 4);
        var arr = document.getElementById("displayData").data;
        var radius = window.sessionStorage.getItem("radius");
        var x = window.sessionStorage.getItem("mouseX");
        var y = window.sessionStorage.getItem("mouseY");
        x = Number.parseInt(x)
        y = Number.parseInt(y)
        radius = Number.parseInt(radius)
        var selectedEle = window.sessionStorage.getItem("selectedEle");
        var ele = getElementData(selectedEle);
        if(radius == 1) {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].x == x && arr[i].y == y) {
                    arr[i].element.id = ele.element;
                    arr[i].color = ele.color;
                    arr[i].element.temp = ele.temp;
                    arr[i].element.state = ele.state;
                    arr[i].element.gravity = ele.gravity;
                }
            }
        } else {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].x <= Math.round(x + (radius/2)) && arr[i].x >= Math.round(x - (radius/2)) && arr[i].y <= Math.round(y + (radius/2)) && arr[i].y >= Math.round(y - (radius/2))) {
                    arr[i].element.id = ele.element;
                    arr[i].color = ele.color;
                    arr[i].element.temp = ele.temp;
                    arr[i].element.state = ele.state;
                    arr[i].element.gravity = ele.gravity;
                }
            }
        }
        document.getElementById("displayData").data = arr;
    }
}

function displayArr() {
    var canvasD = {} 
    canvasD.width = window.sessionStorage.getItem("canvasW");
    canvasD.height = window.sessionStorage.getItem("canvasH");
    var arr = [];
    var total = canvasD.width * canvasD.height;
    console.log(`total pixels: ${total}`)
    for(var i = 0; i < 39; i++) {
        for(var j = 0; j < 76; j++) {
            var obj = {
                element: {
                    id: null,
                    temp: null,
                    charge: null,
                    velocity: null,
                    direction: null,
                    state: null,
                },
                aHeat: 70,
                pressure: 0,
                x: j,
                y: i,
                color: "#000000",
                change: false,
            }
            arr.push(obj);
        }
    }
    return arr;
}

function decDelays() {
    var spawnD = window.sessionStorage.getItem("spawnD");
    if(spawnD > 0) {
        spawnD--
        window.sessionStorage.setItem("spawnD", spawnD);
    }
}

function changeSize(event) {
    event.preventDefault(); 
    var radius = window.sessionStorage.getItem("radius");
    if(event.deltaY < 0) {
        if(radius == 1) {
            radius++
        } else {
            if(radius < 25) {
                radius++
                radius++
            }
        }
    } else {
        if(radius == 2) {
            radius = 0.01
        } else {
            radius--
            radius--
        }
    }
    if(radius < 0.01) {
        radius = 0.01
    }
    window.sessionStorage.setItem("radius", radius);
}

function changeCat(newCat) {
    while(document.getElementById("eleCon").children.length > 0) {
        document.getElementById("eleCon").removeChild(document.getElementById("eleCon").children[0]);
    }
    var eles = getCatElems(newCat);
    for(var i = 0; i < eles.length; i++) {
        var eleDiv = document.createElement("div");
        eleDiv.className = "ele";
        var textCon = document.createElement("p")
        textCon.className = "eleText";
        eleDiv.classList.add("eleBox")
        eleDiv.classList.add("click")
        eleDiv.addEventListener("click", function() {
            var select = this.children[0].innerHTML
            select = swap(select);
            window.sessionStorage.setItem("selectedEle", select);
        })
        textCon.innerHTML = eles[i].display;
        eleDiv.appendChild(textCon);
        document.getElementById("eleCon").appendChild(eleDiv);
    }
}

function drawCanvas() {
    var canvas = document.getElementById("simarea");
    var ctx = canvas.getContext("2d");
    var mousex = window.sessionStorage.getItem("mouseX");
    var mousey = window.sessionStorage.getItem("mouseY");
    var radius = window.sessionStorage.getItem("radius");
    var displayArr = document.getElementById("displayData").data;
    for(var i = 0; i < displayArr.length; i++) {
        ctx.fillStyle = displayArr[i].color;
        ctx.translate(-0.5, -0.5)
        ctx.fillRect(displayArr[i].x, displayArr[i].y, 1, 1);
        ctx.translate(0.5, 0.5)
    }
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(Math.round((mousex) - (radius/2)), ((mousey) - (radius/2)), radius, radius);
    ctx.stroke();
    window.sessionStorage.setItem("oldx", mousex);
    window.sessionStorage.setItem("oldy", mousey);
    window.sessionStorage.setItem("oldr", radius);
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

function swap(diplayName) {
    switch(diplayName) {
        case "WATR":
            return "water";
        break;
        case "TTAN":
            return "titanium";
        break;
        case "DUST":
            return "dust";
        break;
    }
}

function liquidSideMove(id) {
    var arr = document.getElementById("displayData").data;
    var num = rng(1, 2);
    if(num == 1 && arr[id].x != 75) {
        if(arr[id + 1].element.id == null) {
            arr[id + 1].element = arr[id].element;
            arr[id + 1].color = arr[id].color;
            arr[id + 1].change = true;
            arr[id].element =  {
                id: null,
                temp: null,
                charge: null,
                velocity: null,
                direction: null,
                state: null,
            },
            arr[id].color = "#000000";
        }
    } else if(num == 2 && arr[id].x != 1) { 
        if(arr[id - 1].element.id == null) {
            arr[id - 1].element = arr[id].element;
            arr[id - 1].color = arr[id].color;
            arr[id - 1].change = true;
            arr[id].element =  {
                id: null,
                temp: null,
                charge: null,
                velocity: null,
                direction: null,
                state: null,
            },
            arr[id].color = "#000000";
        }
    }
}

function spawnElementStart() {
    window.sessionStorage.setItem("spawn", true);
}

function spawnElementEnd() {
    window.sessionStorage.setItem("spawn", false);
}