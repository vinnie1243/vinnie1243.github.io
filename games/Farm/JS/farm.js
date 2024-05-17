function main() {
    var size = window.innerWidth
    var off = size / 10
    var s = size - off
    s = s / 14.6
    for(var i = 0; i < 330; i++) {
        var con = document.getElementById("con")
        var sq = document.createElement("div")
        sq.style.width = "100%"
        sq.style.height = "100%"
        sq.style.backgroundColor = "#751D0A"
        sq.style.border = "1px solid black"
        sq.id = i + 1
        sq.addEventListener("drop", (e) => drop(e))
        sq.addEventListener("dragover", (e) => allowDrop(e))
        con.style.border = "3px solid black"
        con.appendChild(sq)
    } 
    var test = window.localStorage.getItem("locks")
    if(test == undefined) {
        sLock()
    }
    init()

    if(hasGame() == true) {
        loadGame()  
    } else {
        setTimeout(function() {saveGame()}, 10000)   
    }
    setTimeout(function() {cropLoop()}, 500)
    setTimeout(function() {saveLoop()}, 500)
    setTimeout(function() {gameLoop()}, 500)
}

function readJSON(type) {   
    if(type == "name") {
        //fetch("./Data/names.json")        
        //.then(response => response.json())
        //.then(data => window.sessionStorage.setItem("data", JSON.stringify(data)))
        //.catch(error => console.log(error))
        var num = Math.floor(Math.random() * 89372)
        var data = getNames();
        var gender = data.names[num].gender
        var name = data.names[num].name
        if(gender == 'unisex') {
            var num2 = Math.floor(Math.random() * 10)
            if(num2 % 2 == 0) {
                gender = "male"
            } else {
                gender = "female"
            }
        }
        return name + "&" + gender
    } else if(type == "crop") {
        var data = getCrops();
        var lvl = JSON.parse(window.localStorage.getItem("lvl"))
        var chck = 0
        while(chck == 0) {
            var num = Math.floor(Math.random() * lvl)
            if(num + 1 <= lvl) {
                return data.crops[num]
            }
        }
    }
}

function hasGame() {
    var crops = JSON.parse(window.localStorage.getItem("crops"))
    var customers = JSON.parse(window.localStorage.getItem("customers"))
    var strg = JSON.parse(window.localStorage.getItem("storage"))
    var locks = JSON.parse(window.localStorage.getItem("locks"))
    if(crops == undefined || customers == undefined || strg == undefined || locks == undefined) {
        return false 
    } else {
        return true
    }
}

function saveGame() {
    var crops = cropArr()
    var customers = custObj()
    var lock = lockArr()
    var storage = strgObj()
    window.localStorage.setItem("crops", JSON.stringify(crops))
    window.localStorage.setItem("customers", JSON.stringify(customers))
    window.localStorage.setItem("locks", JSON.stringify(lock))
    window.localStorage.setItem("storage", JSON.stringify(storage))
}

function sLock() {
    for(var i = 0; i < 55 * 6; i++) {
        var el = document.getElementById(i + 1)
        if(el.id == 1 || el.id == 2 || el.id == 56 || el.id == 57 || el.id == 111 || el.id == 112 || el.id == 166 || el.id == 167 || el.id == 221 || el.id == 222 || el.id == 276 || el.id == 277) {

        } else {
            el.classList.add("locked")
        }
        var mod = i % 55
        if(mod == 2) {
            el.classList.add("test")
        }
    }
}

function strgObj() {
    var coins = document.getElementById("coins").getAttribute("data")
    var tomato = document.getElementById("tomatoes").getAttribute("data")
    var wheat = document.getElementById("wheat").getAttribute("data")
    var eggplant = document.getElementById("eggplants").getAttribute("data")    
    var grapes = document.getElementById("grapes").getAttribute("data")
    var carrots = document.getElementById("carrots").getAttribute("data")
    var pumpkin = document.getElementById("pumpkins").getAttribute("data")
    var peppers = document.getElementById("peppers").getAttribute("data")
    var cucumber = document.getElementById("cucumbers").getAttribute("data")
    var blueberries = document.getElementById("blueberries").getAttribute("data")
    var cabbages = document.getElementById("cabbages").getAttribute("data")
    var corn = document.getElementById("corn").getAttribute("data")
    var potatoes = document.getElementById("potatoes").getAttribute("data")
    var strawberry = document.getElementById("strawberries").getAttribute("data")
    var melons = document.getElementById("watermelons").getAttribute("data")
    var apples = document.getElementById("apples").getAttribute("data")
    var cherries = document.getElementById("cherries").getAttribute("data")
    var beetroot = document.getElementById("beetroots").getAttribute("data")
    var avacado = document.getElementById("avocados").getAttribute("data")
    var cotton = document.getElementById("cotton").getAttribute("data")
    var orange = document.getElementById("oranges").getAttribute("data")
    var lime = document.getElementById("limes").getAttribute("data")
    var pineapple = document.getElementById("pineapples").getAttribute("data")
    var kiwi = document.getElementById("kiwis").getAttribute("data")
    var peach = document.getElementById("peaches").getAttribute("data")
    var fig = document.getElementById("figs").getAttribute("data")
    var pear = document.getElementById("pears").getAttribute("data")
    var pomegranate = document.getElementById("pomegranates").getAttribute("data")
    var coffee = document.getElementById("coffee").getAttribute("data")
    var banana = document.getElementById("bananas").getAttribute("data")
    var lemon = document.getElementById("lemons").getAttribute("data")
    var vals = {    
        "coins": coins,
        "tomato": tomato,
        "wheat": wheat,
        "eggplant": eggplant, 
        "grape": grapes,
        "carrot": carrots,
        "pumpkin": pumpkin,
        "pepper": peppers,
        "cucumber": cucumber,
        "blueberry": blueberries,
        "cabbage": cabbages,
        "corn": corn,
        "potato": potatoes,
        "strawberry": strawberry,
        "watermelon": melons,
        "apples": apples,
        "cherries": cherries,
        "beetroot": beetroot,
        "avacado": avacado,
        "cotton": cotton,
        "orange": orange,
        "lime": lime,
        "pineapple": pineapple,
        "kiwi": kiwi,
        "peach": peach,
        "fig": fig,
        "pear": pear,
        "pomegranate": pomegranate,
        "coffee": coffee,
        "banana": banana,
        "lemon": lemon
    }
    return vals
}

function custObj() {
    var cust1 = {
        name: document.getElementById("cust1Name").innerHTML,
        gender: document.getElementById("cust1Gen").innerHTML,
        worth: document.getElementById("cust1").getAttribute("worth"),
        xp: document.getElementById("cust1").getAttribute("xp"),
        data1T: document.getElementById("cust1Data1Text").innerHTML,
        data1C: document.getElementById("cust1Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust1Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust1Data2Text").innerHTML,
        data2C: document.getElementById("cust1Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust1Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust1Data3Text").innerHTML,
        data3C: document.getElementById("cust1Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust1Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust1Data4Text").innerHTML,
        data4C: document.getElementById("cust1Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust1Data4Text").getAttribute("cost"),
    }
    var cust2 = {
        name: document.getElementById("cust2Name").innerHTML,
        gender: document.getElementById("cust2Gen").innerHTML,
        worth: document.getElementById("cust2").getAttribute("worth"),
        xp: document.getElementById("cust2").getAttribute("xp"),
        data1T: document.getElementById("cust2Data1Text").innerHTML,
        data1C: document.getElementById("cust2Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust2Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust2Data2Text").innerHTML,
        data2C: document.getElementById("cust2Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust2Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust2Data3Text").innerHTML,
        data3C: document.getElementById("cust2Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust2Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust2Data4Text").innerHTML,
        data4C: document.getElementById("cust2Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust2Data4Text").getAttribute("cost"),
    }
    var cust3 = {
        name: document.getElementById("cust3Name").innerHTML,
        gender: document.getElementById("cust3Gen").innerHTML,
        worth: document.getElementById("cust3").getAttribute("worth"),
        xp: document.getElementById("cust3").getAttribute("xp"),
        data1T: document.getElementById("cust3Data1Text").innerHTML,
        data1C: document.getElementById("cust3Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust3Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust3Data2Text").innerHTML,
        data2C: document.getElementById("cust3Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust3Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust3Data3Text").innerHTML,
        data3C: document.getElementById("cust3Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust3Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust3Data4Text").innerHTML,
        data4C: document.getElementById("cust3Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust3Data4Text").getAttribute("cost"),
    }
    var cust4 = {
        name: document.getElementById("cust4Name").innerHTML,
        gender: document.getElementById("cust4Gen").innerHTML,
        worth: document.getElementById("cust4").getAttribute("worth"),
        xp: document.getElementById("cust4").getAttribute("xp"),
        data1T: document.getElementById("cust4Data1Text").innerHTML,
        data1C: document.getElementById("cust4Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust4Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust4Data2Text").innerHTML,
        data2C: document.getElementById("cust4Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust4Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust4Data3Text").innerHTML,
        data3C: document.getElementById("cust4Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust4Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust4Data4Text").innerHTML,
        data4C: document.getElementById("cust4Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust4Data4Text").getAttribute("cost"),
    }
    var cust5 = {
        name: document.getElementById("cust5Name").innerHTML,
        gender: document.getElementById("cust5Gen").innerHTML,
        worth: document.getElementById("cust5").getAttribute("worth"),
        xp: document.getElementById("cust5").getAttribute("xp"),
        data1T: document.getElementById("cust5Data1Text").innerHTML,
        data1C: document.getElementById("cust5Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust5Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust5Data2Text").innerHTML,
        data2C: document.getElementById("cust5Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust5Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust5Data3Text").innerHTML,
        data3C: document.getElementById("cust5Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust5Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust5Data4Text").innerHTML,
        data4C: document.getElementById("cust5Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust5Data4Text").getAttribute("cost"),
    }
    var cust6 = {
        name: document.getElementById("cust6Name").innerHTML,
        gender: document.getElementById("cust6Gen").innerHTML,
        worth: document.getElementById("cust6").getAttribute("worth"),
        xp: document.getElementById("cust6").getAttribute("xp"),
        data1T: document.getElementById("cust6Data1Text").innerHTML,
        data1C: document.getElementById("cust6Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust6Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust6Data2Text").innerHTML,
        data2C: document.getElementById("cust6Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust6Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust6Data3Text").innerHTML,
        data3C: document.getElementById("cust6Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust6Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust6Data4Text").innerHTML,
        data4C: document.getElementById("cust6Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust6Data4Text").getAttribute("cost"),
    }
    var cust7 = {
        name: document.getElementById("cust7Name").innerHTML,
        gender: document.getElementById("cust7Gen").innerHTML,
        worth: document.getElementById("cust7").getAttribute("worth"),
        xp: document.getElementById("cust7").getAttribute("xp"),
        data1T: document.getElementById("cust7Data1Text").innerHTML,
        data1C: document.getElementById("cust7Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust7Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust7Data2Text").innerHTML,
        data2C: document.getElementById("cust7Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust7Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust7Data3Text").innerHTML,
        data3C: document.getElementById("cust7Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust7Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust7Data4Text").innerHTML,
        data4C: document.getElementById("cust7Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust7Data4Text").getAttribute("cost"),
    }
    var cust8 = {
        name: document.getElementById("cust8Name").innerHTML,
        gender: document.getElementById("cust8Gen").innerHTML,
        worth: document.getElementById("cust8").getAttribute("worth"),
        xp: document.getElementById("cust8").getAttribute("xp"),
        data1T: document.getElementById("cust8Data1Text").innerHTML,
        data1C: document.getElementById("cust8Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust8Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust8Data2Text").innerHTML,
        data2C: document.getElementById("cust8Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust8Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust8Data3Text").innerHTML,
        data3C: document.getElementById("cust8Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust8Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust8Data4Text").innerHTML,
        data4C: document.getElementById("cust8Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust8Data4Text").getAttribute("cost"),
    }
    var cust9 = {
        name: document.getElementById("cust9Name").innerHTML,
        gender: document.getElementById("cust9Gen").innerHTML,
        worth: document.getElementById("cust9").getAttribute("worth"),
        xp: document.getElementById("cust9").getAttribute("xp"),
        data1T: document.getElementById("cust9Data1Text").innerHTML,
        data1C: document.getElementById("cust9Data1Text").getAttribute("type"),
        data1N: document.getElementById("cust9Data1Text").getAttribute("cost"),
        data2T: document.getElementById("cust9Data2Text").innerHTML,
        data2C: document.getElementById("cust9Data2Text").getAttribute("type"),
        data2N: document.getElementById("cust9Data2Text").getAttribute("cost"),
        data3T: document.getElementById("cust9Data3Text").innerHTML,
        data3C: document.getElementById("cust9Data3Text").getAttribute("type"),
        data3N: document.getElementById("cust9Data3Text").getAttribute("cost"),
        data4T: document.getElementById("cust9Data4Text").innerHTML,
        data4C: document.getElementById("cust9Data4Text").getAttribute("type"),
        data4N: document.getElementById("cust9Data4Text").getAttribute("cost"),
    }
    var cust = {
        "one": cust1,
        "two": cust2,
        "three": cust3,
        "four": cust4,
        "five": cust5,
        "six": cust6,
        "seven": cust7,
        "eight": cust8,
        "nine": cust9
    }
    return cust
}

function reset() {
    window.localStorage.removeItem("locks")
    window.localStorage.removeItem("crops")
    window.localStorage.removeItem("customers")
    window.localStorage.removeItem("storage")
    location.reload()
}

function cropArr() {
    var crops = [
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for(var i = 0; i < crops.length; i++) {
        for(var j = 0; j < 55; j++) {
            crops[i].push("")
        }
    }
    for(var i = 0 ; i < 55 * 6; i++) {
        var mod = Math.floor(i % 55)
        var div = Math.floor(i / 55)
        var el = document.getElementById(i + 1)
        if(el.children.length == 1) {
            var kid = el.children[0]    
            if(kid.tagName == "BUTTON") {
                stop()
            }
            var crop = fig1(kid.src)
            var tier = fig2(kid.src)
            switch(crop) {
                case "tomato":
                    if(tier == 1) {
                        crops[div][mod] = "TomatoT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "TomatoT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "TomatoT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "TomatoT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "TomatoT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "TomatoT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "TomatoT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "TomatoT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "TomatoT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "TomatoT10"
                    }
                break;
                case "wheat":
                    if(tier == 1) {
                        crops[div][mod] = "WheatT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "WheatT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "WheatT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "WheatT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "WheatT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "WheatT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "WheatT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "WheatT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "WheatT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "WheatT10"
                    }
                break;
                case "eggplant":
                    if(tier == 1) {
                        crops[div][mod] = "EggplantT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "EggplantT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "EggplantT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "EggplantT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "EggplantT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "EggplantT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "EggplantT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "EggplantT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "EggplantT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "EggplantT10"
                    }
                break;
                case "grape":
                    if(tier == 1) {
                        crops[div][mod] = "GrapeT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "GrapeT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "GrapeT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "GrapeT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "GrapeT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "GrapeT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "GrapeT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "GrapeT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "GrapeT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "GrapeT10"
                    }
                break;
                case "carrot":
                    if(tier == 1) {
                        crops[div][mod] = "CarrotT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CarrotT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CarrotT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CarrotT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CarrotT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CarrotT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CarrotT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CarrotT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CarrotT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CarrotT10"
                    }
                break;
                case "pumpkin":
                    if(tier == 1) {
                        crops[div][mod] = "PumpkinT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PumpkinT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PumpkinT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PumpkinT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PumpkinT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PumpkinT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PumpkinT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PumpkinT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PumpkinT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PumpkinT10"
                    }
                break;
                case "pepper":
                    if(tier == 1) {
                        crops[div][mod] = "PepperT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PepperT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PepperT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PepperT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PepperT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PepperT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PepperT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PepperT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PepperT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PepperT10"
                    }
                break;
                case "cucumber":
                    if(tier == 1) {
                        crops[div][mod] = "CucumberT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CucumberT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CucumberT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CucumberT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CucumberT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CucumberT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CucumberT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CucumberT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CucumberT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CucumberT10"
                    }
                break;
                case "blueberry":
                    if(tier == 1) {
                        crops[div][mod] = "BlueberryT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "BlueberryT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "BlueberryT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "BlueberryT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "BlueberryT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "BlueberryT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "BlueberryT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "BlueberryT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "BlueberryT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "BlueberryT10"
                    }
                break;
                case "cabbage":
                    if(tier == 1) {
                        crops[div][mod] = "CabbageT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CabbageT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CabbageT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CabbageT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CabbageT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CabbageT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CabbageT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CabbageT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CabbageT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CabbageT10"
                    }
                break;
                case "corn":
                    if(tier == 1) {
                        crops[div][mod] = "CornT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CornT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CornT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CornT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CornT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CornT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CornT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CornT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CornT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CornT10"
                    }
                break;
                case "potato":
                    if(tier == 1) {
                        crops[div][mod] = "PotatoT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PotatoT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PotatoT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PotatoT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PotatoT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PotatoT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PotatoT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PotatoT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PotatoT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PotatoT10"
                    }
                break;
                case "strawberry":
                    if(tier == 1) {
                        crops[div][mod] = "StrawberryT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "StrawberryT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "StrawberryT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "StrawberryT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "StrawberryT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "StrawberryT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "StrawberryT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "StrawberryT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "StrawberryT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "StrawberryT10"
                    }
                break;
                case "watermelon":
                    if(tier == 1) {
                        crops[div][mod] = "WatermelonT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "WatermelonT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "WatermelonT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "WatermelonT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "WatermelonT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "WatermelonT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "WatermelonT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "WatermelonT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "WatermelonT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "WatermelonT10"
                    }
                break;
                case "apple":
                    if(tier == 1) {
                        crops[div][mod] = "AppleT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "AppleT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "AppleT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "AppleT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "AppleT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "AppleT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "AppleT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "AppleT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "AppleT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "AppleT10"
                    }
                break;
                case "cherry":
                    if(tier == 1) {
                        crops[div][mod] = "CherryT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CherryT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CherryT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CherryT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CherryT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CherryT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CherryT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CherryT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CherryT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CherryT10"
                    }
                break;
                case "beetroot":
                    if(tier == 1) {
                        crops[div][mod] = "BeetrootT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "BeetrootT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "BeetrootT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "BeetrootT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "BeetrootT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "BeetrootT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "BeetrootT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "BeetrootT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "BeetrootT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "BeetrootT10"
                    }
                break;
                case "avocado":
                    if(tier == 1) {
                        crops[div][mod] = "AvocadoT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "AvocadoT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "AvocadoT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "AvocadoT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "AvocadoT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "AvocadoT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "AvocadoT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "AvocadoT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "AvocadoT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "AvocadoT10"
                    }
                break;
                case "cotton":
                    if(tier == 1) {
                        crops[div][mod] = "CottonT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CottonT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CottonT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CottonT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CottonT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CottonT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CottonT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CottonT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CottonT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CottonT10"
                    }
                break;
                case "orange":
                    if(tier == 1) {
                        crops[div][mod] = "OrangeT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "OrangeT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "OrangeT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "OrangeT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "OrangeT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "OrangeT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "OrangeT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "OrangeT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "OrangeT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "OrangeT10"
                    }
                break;
                case "lime":
                    if(tier == 1) {
                        crops[div][mod] = "LimeT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "LimeT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "LimeT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "LimeT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "LimeT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "LimeT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "LimeT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "LimeT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "LimeT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "LimeT10"
                    }
                break;
                case "pineapple":
                    if(tier == 1) {
                        crops[div][mod] = "PineappleT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PineappleT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PineappleT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PineappleT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PineappleT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PineappleT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PineappleT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PineappleT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PineappleT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PineappleT10"
                    }
                break;
                case "kiwi":
                    if(tier == 1) {
                        crops[div][mod] = "KiwiT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "KiwiT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "KiwiT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "KiwiT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "KiwiT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "KiwiT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "KiwiT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "KiwiT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "KiwiT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "KiwiT10"
                    }
                break;
                case "peach":
                    if(tier == 1) {
                        crops[div][mod] = "PeachT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PeachT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PeachT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PeachT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PeachT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PeachT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PeachT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PeachT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PeachT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PeachT10"
                    }
                break;
                case "fig":
                    if(tier == 1) {
                        crops[div][mod] = "FigT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "FigT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "FigT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "FigT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "FigT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "FigT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "FigT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "FigT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "FigT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "FigT10"
                    }
                break;
                case "pear":
                    if(tier == 1) {
                        crops[div][mod] = "PearT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PearT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PearT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PearT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PearT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PearT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PearT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PearT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PearT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PearT10"
                    }
                break;
                case "pomegranate":
                    if(tier == 1) {
                        crops[div][mod] = "PomegranateT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "PomegranateT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "PomegranateT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "PomegranateT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "PomegranateT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "PomegranateT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "PomegranateT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "PomegranateT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "PomegranateT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "PomegranateT10"
                    }
                break;
                case "coffee":
                    if(tier == 1) {
                        crops[div][mod] = "CoffeeT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "CoffeeT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "CoffeeT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "CoffeeT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "CoffeeT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "CoffeeT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "CoffeeT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "CoffeeT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "CoffeeT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "CoffeeT10"
                    }
                break;
                case "banana":
                    if(tier == 1) {
                        crops[div][mod] = "BananaT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "BananaT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "BananaT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "BananaT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "BananaT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "BananaT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "BananaT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "BananaT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "BananaT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "BananaT10"
                    }
                break;
                case "lemon":
                    if(tier == 1) {
                        crops[div][mod] = "LemonT1"
                    } else if(tier == 2) {
                        crops[div][mod] = "LemonT2"
                    } else if(tier == 3) {
                        crops[div][mod] = "LemonT3"
                    } else if(tier == 4) {
                        crops[div][mod] = "LemonT4"
                    } else if(tier == 5) {
                        crops[div][mod] = "LemonT5"
                    } else if(tier == 6) {
                        crops[div][mod] = "LemonT6"
                    } else if(tier == 7) {
                        crops[div][mod] = "LemonT7"
                    } else if(tier == 8) {
                        crops[div][mod] = "LemonT8"
                    } else if(tier == 9) {
                        crops[div][mod] = "LemonT9"
                    } else if(tier == 10) {
                        crops[div][mod] = "LemonT10"
                    }
                break;
            }
        }
    }
    return crops
}

function lockArr() {
    var arr = [
        [],
        [],
        [],
        [],
        [],
        [],
    ]
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < 55; j++) {
            arr[i].push("")
        }
    }
    for(var i = 0 ; i < 55 * 6; i++) {
        var mod = Math.floor(i % 55)
        var div = Math.floor(i / 55)
        var el = document.getElementById(i + 1)
        if(el.classList.contains("locked") == true) {
            arr[div][mod] = "Locked"
        } else [
            arr[div][mod] = "NL"
        ]
    }
    return arr 
}

function renderUnlock(el) {
    var unlock = document.createElement("button")
    unlock.innerHTML = "Unlock"
    unlock.style.marginTop = "15%"
    unlock.addEventListener("click", (e) => ulock(e))
    el.appendChild(unlock)
    el.style.textAlign = "center"

}

function ulock(e) {
    var parel = e.target.parentElement
    var el = e.target
    el.remove()
    parel.classList.remove("locked")
    parel.style.textAlign = ""
}

function loadGame() {
    var crops = JSON.parse(window.localStorage.getItem("crops"))
    var customers = JSON.parse(window.localStorage.getItem("customers"))
    var locks = JSON.parse(window.localStorage.getItem("locks"))
    var storage = JSON.parse(window.localStorage.getItem("storage"))
    loadCrops(crops)
    updataCropVals()
    loadCustomers(customers)
    locker(locks)
    loadStorage(storage)
}

function loadStorage(obj) {
    document.getElementById("coins").innerHTML = "Coins: " + obj.coins
    document.getElementById("coins").setAttribute("data", obj.coins)
    document.getElementById("tomatoes").innerHTML = "Tomatoes: " + obj.tomato
    document.getElementById("tomatoes").setAttribute("data", obj.tomato)
    document.getElementById("wheat").innerHTML = "Wheat: " + obj.wheat
    document.getElementById("wheat").setAttribute("data", obj.wheat)
    document.getElementById("eggplants").innerHTML = "Eggplants: " + obj.eggplant
    document.getElementById("eggplants").setAttribute("data", obj.eggplant)
    document.getElementById("grapes").innerHTML = "Grapes: " + obj.grape
    document.getElementById("grapes").setAttribute("data", obj.grape)
    document.getElementById("carrots").innerHTML = "Carrots: " + obj.carrot
    document.getElementById("carrots").setAttribute("data", obj.carrot)
    document.getElementById("pumpkins").innerHTML = "Pumpkins: " + obj.pumpkin
    document.getElementById("pumpkins").setAttribute("data", obj.pumpkin)
    document.getElementById("peppers").innerHTML = "Peppers: " + obj.pepper
    document.getElementById("peppers").setAttribute("data", obj.pepper)
    document.getElementById("cucumbers").innerHTML = "Cucumbers: " + obj.cucumber
    document.getElementById("cucumbers").setAttribute("data", obj.cucumber)
    document.getElementById("blueberries").innerHTML = "Blueberries: " + obj.blueberry
    document.getElementById("blueberries").setAttribute("data", obj.blueberry)
    document.getElementById("cabbages").innerHTML = "Cabbages: " + obj.cabbage
    document.getElementById("cabbages").setAttribute("data", obj.cabbage)
    document.getElementById("corn").innerHTML = "Corn: " + obj.corn
    document.getElementById("corn").setAttribute("data", obj.corn)
    document.getElementById("potatoes").innerHTML = "Potatoes: " + obj.potato
    document.getElementById("potatoes").setAttribute("data", obj.potato)
    document.getElementById("strawberries").innerHTML = "Strawberries: " + obj.strawberry
    document.getElementById("strawberries").setAttribute("data", obj.strawberry)
    document.getElementById("watermelons").innerHTML = "Watermelons: " + obj.watermelon
    document.getElementById("watermelons").setAttribute("data", obj.watermelon)
    document.getElementById("apples").innerHTML = "Apples: " + obj.apple
    document.getElementById("apples").setAttribute("data", obj.apple)
    document.getElementById("cherries").innerHTML = "Cherrys: " + obj.cherry
    document.getElementById("cherries").setAttribute("data", obj.cherry)
    document.getElementById("beetroots").innerHTML = "Beetroots: " + obj.beetroot
    document.getElementById("beetroots").setAttribute("data", obj.beetroot)
    document.getElementById("avocados").innerHTML = "Avocados: " + obj.avocado
    document.getElementById("avocados").setAttribute("data", obj.avocado)
    document.getElementById("cotton").innerHTML = "Cotton: " + obj.cotton
    document.getElementById("cotton").setAttribute("data", obj.cotton)
    document.getElementById("oranges").innerHTML = "Oranges: " + obj.orange
    document.getElementById("oranges").setAttribute("data", obj.orange)
    document.getElementById("limes").innerHTML = "Lime: " + obj.lime
    document.getElementById("limes").setAttribute("data", obj.lime)
    document.getElementById("pineapples").innerHTML = "Pineapples: " + obj.pineapple
    document.getElementById("pineapples").setAttribute("data", obj.pineapple)
    document.getElementById("kiwis").innerHTML = "Kiwis: " + obj.kiwi
    document.getElementById("kiwis").setAttribute("data", obj.kiwi)
    document.getElementById("peaches").innerHTML = "Peaches: " + obj.peach
    document.getElementById("peaches").setAttribute("data", obj.peach)
    document.getElementById("figs").innerHTML = "Figs: " + obj.fig
    document.getElementById("figs").setAttribute("data", obj.fig)
    document.getElementById("pears").innerHTML = "Pears: " + obj.pear
    document.getElementById("pears").setAttribute("data", obj.pear)
    document.getElementById("pomegranates").innerHTML = "Pomegranates: " + obj.pomegranate
    document.getElementById("pomegranates").setAttribute("data", obj.pomegranate)
    document.getElementById("coffee").innerHTML = "Coffee Beans: " + obj.coffee
    document.getElementById("coffee").setAttribute("data", obj.coffee)
    document.getElementById("bananas").innerHTML = "Bananas: " + obj.banana
    document.getElementById("bananas").setAttribute("data", obj.banana)
    document.getElementById("lemons").innerHTML = "Lemons: " + obj.lemon
    document.getElementById("lemons").setAttribute("data", obj.lemon)
}

function locker(arr) {
    for(var i = 0; i < 55 * 6; i++) {
        var mod = Math.floor(i % 55)
        var div = Math.floor(i / 55)
        var el = document.getElementById(i + 1)
        if(arr[div][mod] == "Locked") {
            el.classList.add("locked")
            renderUnlock(el)
        }
    }
}

function loadCustomers(cust) {
    //cust1
    var name = cust.one.name
    var gender = cust.one.gender 
    var worth = cust.one.worth
    var xp = cust.one.xp
    var data1T = cust.one.data1T
    var data1C = cust.one.data1C
    var data1N = cust.one.data1N
    var data2T = cust.one.data2T
    var data2C = cust.one.data2C
    var data2N = cust.one.data2N
    var data3T = cust.one.data3T
    var data3C = cust.one.data3C
    var data3N = cust.one.data3N
    var data4T = cust.one.data4T
    var data4C = cust.one.data4C
    var data4N = cust.one.data4N
    if(gender == "male") {
        var pfp = document.getElementById("cust1pfp").src = "Media/Profiles/male.jfif"
    } else if(gender == "female") {
        var pfp = document.getElementById("cust1pfp").src = "Media/Profiles/female.png"
    }
    var nEl = document.getElementById("cust1Name")
    nEl.innerHTML = name
    var gEl = document.getElementById("cust1Gen")
    gEl.innerHTML = gender
    var custom = document.getElementById("cust1")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    var d1El = document.getElementById("cust1Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    var d2El = document.getElementById("cust1Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    var d3El = document.getElementById("cust1Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    var d4El = document.getElementById("cust1Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust2
    name = cust.two.name
    gender = cust.two.gender 
    worth = cust.two.worth
    xp = cust.two.xp
    data1T = cust.two.data1T
    data1C = cust.two.data1C
    data1N = cust.two.data1N
    data2T = cust.two.data2T
    data2C = cust.two.data2C
    data2N = cust.two.data2N
    data3T = cust.two.data3T
    data3C = cust.two.data3C
    data3N = cust.two.data3N
    data4T = cust.two.data4T
    data4C = cust.two.data4C
    data4N = cust.two.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust2pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust2pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust2")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust2Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust2Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust2Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust2Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust2Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust2Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust3
    name = cust.three.name
    gender = cust.three.gender 
    worth = cust.three.worth
    xp = cust.three.xp
    data1T = cust.three.data1T
    data1C = cust.three.data1C
    data1N = cust.three.data1N
    data2T = cust.three.data2T
    data2C = cust.three.data2C
    data2N = cust.three.data2N
    data3T = cust.three.data3T
    data3C = cust.three.data3C
    data3N = cust.three.data3N
    data4T = cust.three.data4T
    data4C = cust.three.data4C
    data4N = cust.three.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust3pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust3pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust3")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust3Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust3Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust3Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust3Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust3Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust3Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust4
    name = cust.four.name
    gender = cust.four.gender 
    worth = cust.four.worth
    xp = cust.four.xp
    data1T = cust.four.data1T
    data1C = cust.four.data1C
    data1N = cust.four.data1N
    data2T = cust.four.data2T
    data2C = cust.four.data2C
    data2N = cust.four.data2N
    data3T = cust.four.data3T
    data3C = cust.four.data3C
    data3N = cust.four.data3N
    data4T = cust.four.data4T
    data4C = cust.four.data4C
    data4N = cust.four.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust4pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust4pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust4")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust4Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust4Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust4Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust4Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust4Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust4Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust5 
    name = cust.five.name
    gender = cust.five.gender 
    worth = cust.five.worth
    xp = cust.five.xp
    data1T = cust.five.data1T
    data1C = cust.five.data1C
    data1N = cust.five.data1N
    data2T = cust.five.data2T
    data2C = cust.five.data2C
    data2N = cust.five.data2N
    data3T = cust.five.data3T
    data3C = cust.five.data3C
    data3N = cust.five.data3N
    data4T = cust.five.data4T
    data4C = cust.five.data4C
    data4N = cust.five.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust5pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust5pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust5")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust5Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust5Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust5Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust5Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust5Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust5Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust6
    name = cust.six.name
    gender = cust.six.gender 
    worth = cust.six.worth
    xp = cust.six.xp
    data1T = cust.six.data1T
    data1C = cust.six.data1C
    data1N = cust.six.data1N
    data2T = cust.six.data2T
    data2C = cust.six.data2C
    data2N = cust.six.data2N
    data3T = cust.six.data3T
    data3C = cust.six.data3C
    data3N = cust.six.data3N
    data4T = cust.six.data4T
    data4C = cust.six.data4C
    data4N = cust.six.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust6pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust6pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust6")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust6Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust6Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust6Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust6Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust6Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust6Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust7
    name = cust.seven.name
    gender = cust.seven.gender 
    worth = cust.seven.worth
    xp = cust.seven.xp
    data1T = cust.seven.data1T
    data1C = cust.seven.data1C
    data1N = cust.seven.data1N
    data2T = cust.seven.data2T
    data2C = cust.seven.data2C
    data2N = cust.seven.data2N
    data3T = cust.seven.data3T
    data3C = cust.seven.data3C
    data3N = cust.seven.data3N
    data4T = cust.seven.data4T
    data4C = cust.seven.data4C
    data4N = cust.seven.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust7pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust7pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust7")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust7Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust7Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust7Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust7Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust7Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust7Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust8
    name = cust.eight.name
    gender = cust.eight.gender 
    worth = cust.eight.worth
    xp = cust.eight.xp
    data1T = cust.eight.data1T
    data1C = cust.eight.data1C
    data1N = cust.eight.data1N
    data2T = cust.eight.data2T
    data2C = cust.eight.data2C
    data2N = cust.eight.data2N
    data3T = cust.eight.data3T
    data3C = cust.eight.data3C
    data3N = cust.eight.data3N
    data4T = cust.eight.data4T
    data4C = cust.eight.data4C
    data4N = cust.eight.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust8pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust8pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust8")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust8Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust8Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust8Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust8Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust8Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust8Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
    //cust9
    name = cust.nine.name
    gender = cust.nine.gender 
    worth = cust.nine.worth
    xp = cust.nine.xp
    data1T = cust.nine.data1T
    data1C = cust.nine.data1C
    data1N = cust.nine.data1N
    data2T = cust.nine.data2T
    data2C = cust.nine.data2C
    data2N = cust.nine.data2N
    data3T = cust.nine.data3T
    data3C = cust.nine.data3C
    data3N = cust.nine.data3N
    data4T = cust.nine.data4T
    data4C = cust.nine.data4C
    data4N = cust.nine.data4N
    if(gender == "male") {
        pfp = document.getElementById("cust9pfp").src = "Media/Profiles/male.jfif"
    } else {
        pfp = document.getElementById("cust9pfp").src = "Media/Profiles/female.png"
    }
    custom = document.getElementById("cust9")
    custom.setAttribute("worth", worth)
    custom.setAttribute("xp", xp)
    nEl = document.getElementById("cust9Name")
    nEl.innerHTML = name
    gEl = document.getElementById("cust9Gen")
    gEl.innerHTML = gender
    d1El = document.getElementById("cust9Data1Text")
    d1El.innerHTML = data1T
    d1El.setAttribute("cost", data1N)
    d1El.setAttribute("type", data1C)
    d2El = document.getElementById("cust9Data2Text")
    d2El.innerHTML = data2T
    d2El.setAttribute("cost", data2N)
    d2El.setAttribute("type", data2C)
    d3El = document.getElementById("cust9Data3Text")
    d3El.innerHTML = data3T
    d3El.setAttribute("cost", data3N)
    d3El.setAttribute("type", data3C)
    d4El = document.getElementById("cust9Data4Text")
    d4El.innerHTML = data4T
    d4El.setAttribute("cost", data4N)
    d4El.setAttribute("type", data4C)
}

function loadCrops(crops) {
    for(var i = 0; i < 55 * 6; i++) {
        var mod = Math.floor(i % 55)
        var div = Math.floor(i / 55)
        var el = document.getElementById(i + 1)
        switch (crops[div][mod]) {
            case "TomatoT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato10Img").src
                plant.id = `${i + 1}Tomato10`
                el.appendChild(plant)
            break;
            case "TomatoT1":
                var plant = document.createElement("img")
                plant.src = document.getElementById("Tomato1Img").src
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.setAttribute("data", 0)
                plant.id = `${i + 1}Tomato1`
                el.appendChild(plant)
            break;
            case "TomatoT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato2Img").src   
                plant.id = `${i + 1}Tomato2`
                el.appendChild(plant) 
            break;
            case "TomatoT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato3Img").src  
                plant.id = `${i + 1}Tomato3`
                el.appendChild(plant)
            break;
            case "TomatoT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato4Img").src
                plant.id = `${i + 1}Tomato4`  
                el.appendChild(plant)
            break;
            case "TomatoT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato5Img").src 
                plant.id = `${i + 1}Tomato5`
                el.appendChild(plant)
            break;
            case "TomatoT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato6Img").src
                plant.id = `${i + 1}Tomato6`
                el.appendChild(plant)
            break;
            case "TomatoT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato7Img").src
                plant.id = `${i + 1}Tomato7`
                el.appendChild(plant)
            break;
            case "TomatoT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato8Img").src
                plant.id = `${i + 1}Tomato8`  
                el.appendChild(plant)
            break;
            case "TomatoT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = document.getElementById("Tomato9Img").src
                plant.id = `${i + 1}Tomato9`   
                el.appendChild(plant)
            break;
            case "WheatT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Wheat.png"
                plant.id = `${i + 1}Wheat1`   
                el.appendChild(plant)
            break;
            case "WheatT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Wheat.png"    
                plant.id = `${i + 1}Wheat2`   
                el.appendChild(plant)
            break;
            case "WheatT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Wheat.png"    
                plant.id = `${i + 1}Wheat3`   
                el.appendChild(plant)
            break;
            case "WheatT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Wheat.png"  
                plant.id = `${i + 1}Wheat4`     
                el.appendChild(plant)
            break;
            case "WheatT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Wheat.png"    
                plant.id = `${i + 1}Wheat5`   
                el.appendChild(plant)
            break;
            case "WheatT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Wheat.png"
                plant.id = `${i + 1}Wheat6`    
                el.appendChild(plant)
            break;
            case "WheatT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Wheat.png"  
                plant.id = `${i + 1}Wheat7`  
                el.appendChild(plant)
            break;
            case "WheatT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Wheat.png"    
                plant.id = `${i + 1}Wheat8`
                el.appendChild(plant)
            break;
            case "WheatT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Wheat.png"   
                plant.id = `${i + 1}Wheat9` 
                el.appendChild(plant)
            break;
            case "WheatT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Wheat.png"    
                plant.id = `${i + 1}Wheat10`
                el.appendChild(plant)
            break;
            case "EggplantT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "EggplantT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Eggplant.png"    
                el.appendChild(plant)
            break;
            case "GrapeT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Grape.png"    
                el.appendChild(plant)
            break;
            case "GrapeT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Grape.png"    
                el.appendChild(plant)
            break;
            case "CarrotT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Carrot.png"    
                el.appendChild(plant)
            break
            case "CarrotT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Carrot.png"    
                el.appendChild(plant)
            break;
            case "CarrotT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Carrot.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PumpkinT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Pumpkin.png"    
                el.appendChild(plant)
            break;
            case "PepperT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Pepper.png"    
                el.appendChild(plant)
            break;
            case "PepperT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Pepper.png"    
                el.appendChild(plant)
            break;
            case "CucumberT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "CucumberT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Cucumber.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Blueberry.png"    
                el.appendChild(plant)
            break
            case "BlueberryT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "BlueberryT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Blueberry.png"    
                el.appendChild(plant)
            break;
            case "CabbageT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CabbageT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Cabbage.png"    
                el.appendChild(plant)
            break;
            case "CornT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Corn.png"    
                el.appendChild(plant)
            break;
            case "CornT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Corn.png"    
                el.appendChild(plant)
            break;
            case "PotatoT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Potato.png"    
                el.appendChild(plant)
            break;
            case "PotatoT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Potato.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "StrawberryT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Strawberry.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "WatermelonT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Watermelon.png"    
                el.appendChild(plant)
            break;
            case "AppleT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Apple.png"    
                el.appendChild(plant)
            break;
            case "AppleT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Apple.png"    
                el.appendChild(plant)
            break;
            case "CherryT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Cherry.png"    
                el.appendChild(plant)
            break;
            case "CherryT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Cherry.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "BeetrootT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Beetroot.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Avocado.png"    
                el.appendChild(plant)
            break;
            case "AvocadoT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Avocado.png"    
                el.appendChild(plant)
            break;
            case "CottonT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Cotton.png"    
                el.appendChild(plant)
            break;
            case "CottonT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Cotton.png"    
                el.appendChild(plant)
            break;
            case "OrangeT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Orange.png"    
                el.appendChild(plant)
            break;
            case "OrangeT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Orange.png"    
                el.appendChild(plant)
            break;
            case "LimeT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT4": 
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Lime.png"    
                el.appendChild(plant)
            break;
            case "LimeT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Lime.png"    
                el.appendChild(plant)
            break; 
            case "LimeT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Lime.png"    
                el.appendChild(plant)
            break;
            case "PineappleT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "PineappleT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Pineapple.png"    
                el.appendChild(plant)
            break;
            case "KiwiT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Kiwi.png"    
                el.appendChild(plant)
            break;  
            case "KiwiT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "KiwiT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Kiwi.png"    
                el.appendChild(plant)
            break;
            case "PeachT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Peach.png"    
                el.appendChild(plant)
            break;
            case "PeachT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Peach.png"    
                el.appendChild(plant)
            break;
            case "FigT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Fig.png"    
                el.appendChild(plant)
            break;
            case "FigT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Fig.png"    
                el.appendChild(plant)
            break;
            case "PearT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Pear.png"    
                el.appendChild(plant)
            break;
            case "PearT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Pear.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "PomegranateT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Pomegranate.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Coffee.png"    
                el.appendChild(plant)
            break;
            case "CoffeeT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Coffee.png"    
                el.appendChild(plant)
            break;
            case "BananaT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT3":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T3/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Banana.png"    
                el.appendChild(plant)
            break;
            case "BananaT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Banana.png"    
                el.appendChild(plant)
            break;
            case "LemonT1":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T1/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT2":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T2/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT3": 
            var plant = document.createElement("img")
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            plant.src = "Media/Crops/T3/Lemon.png"    
            el.appendChild(plant)
            break;
            case "LemonT4":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T4/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT5":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T5/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT6":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T6/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT7":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T7/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT8":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T8/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT9":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T9/Lemon.png"    
                el.appendChild(plant)
            break;
            case "LemonT10":
                var plant = document.createElement("img")
                plant.classList.add("cropImage")
                plant.addEventListener("dragstart", (e) => drag(e))
                plant.draggable = "true"
                plant.addEventListener("mouseenter", (e) => collect(e))
                plant.src = "Media/Crops/T10/Lemon.png"    
                el.appendChild(plant)
            break;
        }       
    }
}

function renderFoods() {
    var parent = document.getElementById("products")
    parent = parent.children[0]
    //tomato
    var tomCon = document.createElement("div")
    var tomImg = document.createElement("img")
    var tomTxt = document.createElement("p")
    var tomBut = document.createElement("button")
    tomCon.classList.add("border")
    tomCon.classList.add("food")
    tomImg.src = document.getElementById("TomatoIcon").src
    tomImg.alt = "Tomato icon"
    tomImg.classList.add("foodPic")
    tomTxt.innerHTML = "Tomatos"
    tomBut.classList.add("foodButton")
    tomBut.setAttribute("onclick", "spawnCrop('tomato')")
    tomBut.innerHTML = "6 Coins"
    tomCon.appendChild(tomImg)
    tomCon.appendChild(tomTxt)
    tomCon.appendChild(tomBut)
    //wheat
    var wheCon = document.createElement("div")
    var wheImg = document.createElement("img")
    var wheTxt = document.createElement("p")
    var wheBut = document.createElement("button")
    wheCon.classList.add("border")
    wheCon.classList.add("food")
    wheImg.src = document.getElementById("WheatIcon").src
    wheImg.alt = "Wheat icon"
    wheImg.classList.add("foodPic")
    wheTxt.innerHTML = "Wheat"
    wheBut.classList.add("foodButton")
    wheBut.setAttribute("onclick", "spawnCrop('wheat')")
    wheBut.innerHTML = "12 Coins"
    wheCon.appendChild(wheImg)
    wheCon.appendChild(wheTxt)
    wheCon.appendChild(wheBut)
    //eggplant
    var eggCon = document.createElement("div")
    var eggImg = document.createElement("img")
    var eggTxt = document.createElement("p")
    var eggBut = document.createElement("button")
    eggCon.classList.add("border")
    eggCon.classList.add("food")
    eggImg.src = document.getElementById("EggplantIcon").src
    eggImg.alt = "Eggplant icon"
    eggImg.classList.add("foodPic")
    eggTxt.innerHTML = "Eggplant"
    eggBut.classList.add("foodButton")
    eggBut.setAttribute("onclick", "spawnCrop('eggplant')")
    eggBut.innerHTML = "18 Coins"
    eggCon.appendChild(eggImg)
    eggCon.appendChild(eggTxt)
    eggCon.appendChild(eggBut)
    //grapes
    var graCon = document.createElement("div")
    var graImg = document.createElement("img")
    var graTxt = document.createElement("p")
    var graBut = document.createElement("button")
    graCon.classList.add("border")
    graCon.classList.add("food")
    graImg.src = document.getElementById("GrapeIcon").src
    graImg.alt = "Grape Icon"
    graImg.classList.add("foodPic")
    graTxt.innerHTML = "Grape"
    graBut.classList.add("foodButton")
    graBut.setAttribute("onclick", "spawnCrop('grape')")
    graBut.innerHTML = "30 Coins"
    graCon.appendChild(graImg)
    graCon.appendChild(graTxt)
    graCon.appendChild(graBut)
    //Carrot
    var carCon = document.createElement("div")
    var carImg = document.createElement("img")
    var carTxt = document.createElement("p")
    var carBut = document.createElement("button")
    carCon.classList.add("border")
    carCon.classList.add("food")
    carImg.src = document.getElementById("CarrotIcon").src
    carImg.alt = "Carrot Icon"
    carImg.classList.add("foodPic")
    carTxt.innerHTML = "Carrot"
    carBut.classList.add("foodButton")
    carBut.setAttribute("onclick", "spawnCrop('carrot')")
    carBut.innerHTML = "42 Coins"
    carCon.appendChild(carImg)
    carCon.appendChild(carTxt)
    carCon.appendChild(carBut)
    //Pumpkin
    var pumCon = document.createElement("div")
    var pumImg = document.createElement("img")
    var pumTxt = document.createElement("p")
    var pumBut = document.createElement("button")
    pumCon.classList.add("border")
    pumCon.classList.add("food")
    pumImg.src = document.getElementById("PumpkinIcon").src
    pumImg.alt = "Pumpkin Icon"
    pumImg.classList.add("foodPic")
    pumTxt.innerHTML = "Pumpkin"
    pumBut.classList.add("foodButton")
    pumBut.setAttribute("onclick", "spawnCrop('pumpkin')")
    pumBut.innerHTML = "60 Coins"
    pumCon.appendChild(pumImg)
    pumCon.appendChild(pumTxt)
    pumCon.appendChild(pumBut)
    //Pepper
    var pepCon = document.createElement("div")
    var pepImg = document.createElement("img")
    var pepTxt = document.createElement("p")
    var pepBut = document.createElement("button")
    pepCon.classList.add("border")
    pepCon.classList.add("food")
    pepImg.src = document.getElementById("PepperIcon").src
    pepImg.alt = "Pepper Icon"
    pepImg.classList.add("foodPic")
    pepTxt.innerHTML = "Pepper"
    pepBut.classList.add("foodButton")
    pepBut.setAttribute("onclick", "spawnCrop('pepper')")
    pepBut.innerHTML = "90 Coins"
    pepCon.appendChild(pepImg)
    pepCon.appendChild(pepTxt)
    pepCon.appendChild(pepBut)
    //Cucumber
    var cucCon = document.createElement("div")
    var cucImg = document.createElement("img")
    var cucTxt = document.createElement("p")
    var cucBut = document.createElement("button")
    cucCon.classList.add("border")
    cucCon.classList.add("food")
    cucImg.src = document.getElementById("CucumberIcon").src
    cucImg.alt = "Cucumber Icon"
    cucImg.classList.add("foodPic")
    cucTxt.innerHTML = "Cucumber"
    cucBut.classList.add("foodButton")
    cucBut.setAttribute("onclick", "spawnCrop('cucumber')")
    cucBut.innerHTML = "120 Coins"
    cucCon.appendChild(cucImg)
    cucCon.appendChild(cucTxt)
    cucCon.appendChild(cucBut)
    //Blueberry
    var bluCon = document.createElement("div")
    var bluImg = document.createElement("img")
    var bluTxt = document.createElement("p")
    var bluBut = document.createElement("button")
    bluCon.classList.add("border")
    bluCon.classList.add("food")
    bluImg.src = document.getElementById("BlueberryIcon").src
    bluImg.alt = "Blueberry Icon"
    bluImg.classList.add("foodPic")
    bluTxt.innerHTML = "Blueberry"
    bluBut.classList.add("foodButton")
    bluBut.setAttribute("onclick", "spawnCrop('blueberry')")
    bluBut.innerHTML = "150 Coins"
    bluCon.appendChild(bluImg)
    bluCon.appendChild(bluTxt)
    bluCon.appendChild(bluBut)
    //Cabbage
    var cabCon = document.createElement("div")
    var cabImg = document.createElement("img")
    var cabTxt = document.createElement("p")
    var cabBut = document.createElement("button")
    cabCon.classList.add("border")
    cabCon.classList.add("food")
    cabImg.src = document.getElementById("CabbageIcon").src
    cabImg.alt = "Cabbage Icon"
    cabImg.classList.add("foodPic")
    cabTxt.innerHTML = "Cabbage"
    cabBut.classList.add("foodButton")
    cabBut.setAttribute("onclick", "spawnCrop('cabbage')")
    cabBut.innerHTML = "180 Coins"
    cabCon.appendChild(cabImg)
    cabCon.appendChild(cabTxt)
    cabCon.appendChild(cabBut)
    //Corn
    var corCon = document.createElement("div")
    var corImg = document.createElement("img")
    var corTxt = document.createElement("p")
    var corBut = document.createElement("button")
    corCon.classList.add("border")
    corCon.classList.add("food")
    corImg.src = document.getElementById("CornIcon").src
    corImg.alt = "Corn Icon"
    corImg.classList.add("foodPic")
    corTxt.innerHTML = "Corn"
    corBut.classList.add("foodButton")
    corBut.setAttribute("onclick", "spawnCrop('corn')")
    corBut.innerHTML = "210 Coins"
    corCon.appendChild(corImg)
    corCon.appendChild(corTxt)
    corCon.appendChild(corBut)
    //potato
    var potCon = document.createElement("div")
    var potImg = document.createElement("img")
    var potTxt = document.createElement("p")
    var potBut = document.createElement("button")
    potCon.classList.add("border")
    potCon.classList.add("food")
    potImg.src = document.getElementById("PotatoIcon").src
    potImg.alt = "Potato Icon"
    potImg.classList.add("foodPic")
    potTxt.innerHTML = "Potato"
    potBut.classList.add("foodButton")
    potBut.setAttribute("onclick", "spawnCrop('potato')")
    potBut.innerHTML = "240 Coins"
    potCon.appendChild(potImg)
    potCon.appendChild(potTxt)
    potCon.appendChild(potBut)
    //strawberry
    var strCon = document.createElement("div")
    var strImg = document.createElement("img")
    var strTxt = document.createElement("p")
    var strBut = document.createElement("button")
    strCon.classList.add("border")
    strCon.classList.add("food")
    strImg.src = document.getElementById("StrawberryIcon").src
    strImg.alt = "Strawberry Icon"
    strImg.classList.add("foodPic")
    strTxt.innerHTML = "Strawberry"
    strBut.classList.add("foodButton")
    strBut.setAttribute("onclick", "spawnCrop('strawberry')")
    strBut.innerHTML = "270 Coins"
    strCon.appendChild(strImg)
    strCon.appendChild(strTxt)
    strCon.appendChild(strBut)
    //watermelon
    var wtrCon = document.createElement("div")
    var wtrImg = document.createElement("img")
    var wtrTxt = document.createElement("p")
    var wtrBut = document.createElement("button")
    wtrCon.classList.add("border")
    wtrCon.classList.add("food")
    wtrImg.src = document.getElementById("WatermelonIcon").src
    wtrImg.alt = "WatermelonIcon"
    wtrImg.classList.add("foodPic")
    wtrTxt.innerHTML = "Watermelon"
    wtrBut.classList.add("foodButton")
    wtrBut.setAttribute("onclick", "spawnCrop('watermelon')")
    wtrBut.innerHTML = "330 Coins"
    wtrCon.appendChild(wtrImg)
    wtrCon.appendChild(wtrTxt)
    wtrCon.appendChild(wtrBut)
    //apples
    var appCon = document.createElement("div")
    var appImg = document.createElement("img")
    var appTxt = document.createElement("p")
    var appBut = document.createElement("button")
    appCon.classList.add("border")
    appCon.classList.add("food")
    appImg.src = document.getElementById("AppleIcon").src
    appImg.alt = "Apple Icon"
    appImg.classList.add("foodPic")
    appTxt.innerHTML = "Apple"
    appBut.classList.add("foodButton")
    appBut.setAttribute("onclick", "spawnCrop('apple')")
    appBut.innerHTML = "360 Coins"
    appCon.appendChild(appImg)
    appCon.appendChild(appTxt)
    appCon.appendChild(appBut)
    //Cherry
    var cheCon = document.createElement("div")
    var cheImg = document.createElement("img")
    var cheTxt = document.createElement("p")
    var cheBut = document.createElement("button")
    cheCon.classList.add("border")
    cheCon.classList.add("food")
    cheImg.src = document.getElementById("CherryIcon").src
    cheImg.alt = "Cherry Icon"
    cheImg.classList.add("foodPic")
    cheTxt.innerHTML = "Cherry"
    cheBut.classList.add("foodButton")
    cheBut.setAttribute("onclick", "spawnCrop('cherry')")
    cheBut.innerHTML = "390 Coins"
    cheCon.appendChild(cheImg)
    cheCon.appendChild(cheTxt)
    cheCon.appendChild(cheBut)
    //beetroot
    var betCon = document.createElement("div")
    var betImg = document.createElement("img")
    var betTxt = document.createElement("p")
    var betBut = document.createElement("button")
    betCon.classList.add("border")
    betCon.classList.add("food")
    betImg.src = document.getElementById("BeetrootIcon").src
    betImg.alt = "Beetroot Icon"
    betImg.classList.add("foodPic")
    betTxt.innerHTML = "Beetroot"
    betBut.classList.add("foodButton")
    betBut.setAttribute("onclick", "spawnCrop('beetroot')")
    betBut.innerHTML = "420 Coins"
    betCon.appendChild(betImg)
    betCon.appendChild(betTxt)
    betCon.appendChild(betBut)
    //avocado
    var avoCon = document.createElement("div")
    var avoImg = document.createElement("img")
    var avoTxt = document.createElement("p")
    var avoBut = document.createElement("button")
    avoCon.classList.add("border")
    avoCon.classList.add("food")
    avoImg.src = document.getElementById("AvocadoIcon").src
    avoImg.alt = "Avocado Icon"
    avoImg.classList.add("foodPic")
    avoTxt.innerHTML = "Avocado"
    avoBut.classList.add("foodButton")
    avoBut.setAttribute("onclick", "spawnCrop('avocado')")
    avoBut.innerHTML = "450 Coins"
    avoCon.appendChild(avoImg)
    avoCon.appendChild(avoTxt)
    avoCon.appendChild(avoBut)
    //cotton
    var cotCon = document.createElement("div")
    var cotImg = document.createElement("img")
    var cotTxt = document.createElement("p")
    var cotBut = document.createElement("button")
    cotCon.classList.add("border")
    cotCon.classList.add("food")
    cotImg.src = document.getElementById("CottonIcon").src
    cotImg.alt = "Cotton Icon"
    cotImg.classList.add("foodPic")
    cotTxt.innerHTML = "Cotton"
    cotBut.classList.add("foodButton")
    cotBut.setAttribute("onclick", "spawnCrop('cotton')")
    cotBut.innerHTML = "480 Coins"
    cotCon.appendChild(cotImg)
    cotCon.appendChild(cotTxt)
    cotCon.appendChild(cotBut)
    //orange
    var oraCon = document.createElement("div")
    var oraImg = document.createElement("img")
    var oraTxt = document.createElement("p")
    var oraBut = document.createElement("button")
    oraCon.classList.add("border")
    oraCon.classList.add("food")
    oraImg.src = document.getElementById("OrangeIcon").src
    oraImg.alt = "Orange Icon"
    oraImg.classList.add("foodPic")
    oraTxt.innerHTML = "Orange"
    oraBut.classList.add("foodButton")
    oraBut.setAttribute("onclick", "spawnCrop('orange')")
    oraBut.innerHTML = "510 Coins"
    oraCon.appendChild(oraImg)
    oraCon.appendChild(oraTxt)
    oraCon.appendChild(oraBut)
    //lime
    var limCon = document.createElement("div")
    var limImg = document.createElement("img")
    var limTxt = document.createElement("p")
    var limBut = document.createElement("button")
    limCon.classList.add("border")
    limCon.classList.add("food")
    limImg.src = document.getElementById("LimeIcon").src
    limImg.alt = "Lime Icon"
    limImg.classList.add("foodPic")
    limTxt.innerHTML = "Lime"
    limBut.classList.add("foodButton")
    limBut.setAttribute("onclick", "spawnCrop('lime')")
    limBut.innerHTML = "540 Coins"
    limCon.appendChild(limImg)
    limCon.appendChild(limTxt)
    limCon.appendChild(limBut)
    //pineapple
    var pinCon = document.createElement("div")
    var pinImg = document.createElement("img")
    var pinTxt = document.createElement("p")
    var pinBut = document.createElement("button")
    pinCon.classList.add("border")
    pinCon.classList.add("food")
    pinImg.src = document.getElementById("PineappleIcon").src
    pinImg.alt = "Pineapple Icon"
    pinImg.classList.add("foodPic")
    pinTxt.innerHTML = "Pineapple"
    pinBut.classList.add("foodButton")
    pinBut.setAttribute("onclick", "spawnCrop('pineapple')")
    pinBut.innerHTML = "570 Coins"
    pinCon.appendChild(pinImg)
    pinCon.appendChild(pinTxt)
    pinCon.appendChild(pinBut)
    //kiwi
    var kiwCon = document.createElement("div")
    var kiwImg = document.createElement("img")
    var kiwTxt = document.createElement("p")
    var kiwBut = document.createElement("button")
    kiwCon.classList.add("border")
    kiwCon.classList.add("food")
    kiwImg.src = document.getElementById("KiwiIcon").src
    kiwImg.alt = "Kiwi Icon"
    kiwImg.classList.add("foodPic")
    kiwTxt.innerHTML = "Kiwi"
    kiwBut.classList.add("foodButton")
    kiwBut.setAttribute("onclick", "spawnCrop('kiwi')")
    kiwBut.innerHTML = "600 Coins"
    kiwCon.appendChild(kiwImg)
    kiwCon.appendChild(kiwTxt)
    kiwCon.appendChild(kiwBut)
    //peach
    var peaCon = document.createElement("div")
    var peaImg = document.createElement("img")
    var peaTxt = document.createElement("p")
    var peaBut = document.createElement("button")
    peaCon.classList.add("border")
    peaCon.classList.add("food")
    peaImg.src = document.getElementById("PeachIcon").src
    peaImg.alt = "Peach Icon"
    peaImg.classList.add("foodPic")
    peaTxt.innerHTML = "Peach"
    peaBut.classList.add("foodButton")
    peaBut.setAttribute("onclick", "spawnCrop('peach')")
    peaBut.innerHTML = "630 Coins"
    peaCon.appendChild(peaImg)
    peaCon.appendChild(peaTxt)
    peaCon.appendChild(peaBut)
    //fig
    var figCon = document.createElement("div")
    var figImg = document.createElement("img")
    var figTxt = document.createElement("p")
    var figBut = document.createElement("button")
    figCon.classList.add("border")
    figCon.classList.add("food")
    figImg.src = document.getElementById("FigIcon").src
    figImg.alt = "Fig Icon"
    figImg.classList.add("foodPic")
    figTxt.innerHTML = "Fig"
    figBut.classList.add("foodButton")
    figBut.setAttribute("onclick", "spawnCrop('fig')")
    figBut.innerHTML = "660 Coins"
    figCon.appendChild(figImg)
    figCon.appendChild(figTxt)
    figCon.appendChild(figBut)
    //pear
    var perCon = document.createElement("div")
    var perImg = document.createElement("img")
    var perTxt = document.createElement("p")
    var perBut = document.createElement("button")
    perCon.classList.add("border")
    perCon.classList.add("food")
    perImg.src = document.getElementById("PearIcon").src
    perImg.alt = "Pear Icon"
    perImg.classList.add("foodPic")
    perTxt.innerHTML = "Pear"
    perBut.classList.add("foodButton")
    perBut.setAttribute("onclick", "spawnCrop('pear')")
    perBut.innerHTML = "690 Coins"
    perCon.appendChild(perImg)
    perCon.appendChild(perTxt)
    perCon.appendChild(perBut)
    //pomegranate
    var pomCon = document.createElement("div")
    var pomImg = document.createElement("img")
    var pomTxt = document.createElement("p")
    var pomBut = document.createElement("button")
    pomCon.classList.add("border")
    pomCon.classList.add("food")
    pomImg.src = document.getElementById("PomegranateIcon").src
    pomImg.alt = "Pomegranate Icon"
    pomImg.classList.add("foodPic")
    pomTxt.innerHTML = "Pomegranate"
    pomBut.classList.add("foodButton")
    pomBut.setAttribute("onclick", "spawnCrop('pomegranate')")
    pomBut.innerHTML = "720 Coins"
    pomCon.appendChild(pomImg)
    pomCon.appendChild(pomTxt)
    pomCon.appendChild(pomBut)
    //Coffee
    var cofCon = document.createElement("div")
    var cofImg = document.createElement("img")
    var cofTxt = document.createElement("p")
    var cofBut = document.createElement("button")
    cofCon.classList.add("border")
    cofCon.classList.add("food")
    cofImg.src = document.getElementById("CoffeeIcon").src
    cofImg.alt = "Coffee Icon"
    cofImg.classList.add("foodPic")
    cofTxt.innerHTML = "Coffee"
    cofBut.classList.add("foodButton")
    cofBut.setAttribute("onclick", "spawnCrop('coffee')")
    cofBut.innerHTML = "750 Coins"
    cofCon.appendChild(cofImg)
    cofCon.appendChild(cofTxt)
    cofCon.appendChild(cofBut)
    //banana
    var banCon = document.createElement("div")
    var banImg = document.createElement("img")
    var banTxt = document.createElement("p")
    var banBut = document.createElement("button")
    banCon.classList.add("border")
    banCon.classList.add("food")
    banImg.src = document.getElementById("BananaIcon").src
    banImg.alt = "Banana Icon"
    banImg.classList.add("foodPic")
    banTxt.innerHTML = "Banana"
    banBut.classList.add("foodButton")
    banBut.setAttribute("onclick", "spawnCrop('banana')")
    banBut.innerHTML = "780 Coins"
    banCon.appendChild(banImg)
    banCon.appendChild(banTxt)
    banCon.appendChild(banBut)
    //lemon
    var lemCon = document.createElement("div")
    var lemImg = document.createElement("img")
    var lemTxt = document.createElement("p")
    var lemBut = document.createElement("button")
    lemCon.classList.add("border")
    lemCon.classList.add("food")
    lemImg.src = document.getElementById("LemonIcon").src
    lemImg.alt = "Lemon Icon"
    lemImg.classList.add("foodPic")
    lemTxt.innerHTML = "Lemon"
    lemBut.classList.add("foodButton")
    lemBut.setAttribute("onclick", "spawnCrop('lemon')")
    lemBut.innerHTML = "810 Coins"
    lemCon.appendChild(lemImg)
    lemCon.appendChild(lemTxt)
    lemCon.appendChild(lemBut)
    //append
    parent.appendChild(tomCon)
    parent.appendChild(wheCon)
    parent.appendChild(eggCon)
    parent.appendChild(graCon)
    parent.appendChild(carCon)
    parent.appendChild(pumCon)
    parent.appendChild(pepCon)
    parent.appendChild(cucCon)
    parent.appendChild(bluCon)
    parent.appendChild(cabCon)
    parent.appendChild(corCon)
    parent.appendChild(potCon)
    parent.appendChild(strCon)
    parent.appendChild(wtrCon)
    parent.appendChild(appCon)
    parent.appendChild(cheCon)
    parent.appendChild(betCon)
    parent.appendChild(avoCon)
    parent.appendChild(cotCon)
    parent.appendChild(oraCon)
    parent.appendChild(limCon)
    parent.appendChild(pinCon)
    parent.appendChild(kiwCon)
    parent.appendChild(peaCon)
    parent.appendChild(figCon)
    parent.appendChild(perCon)
    parent.appendChild(pomCon)
    parent.appendChild(cofCon)
    parent.appendChild(banCon)
    parent.appendChild(lemCon)
}

function renderMachines() {
    console.log("machine menu")
}

function renderAnimals() {
    console.log("animal menu")
}

function renderVisitors() {
    var logs = JSON.parse(window.localStorage.getItem("logs"))
    var body = document.createElement("section")
    body.id = "visitorBody"
    body.style.backgroundColor = "gray"
    body.style.width = "80%"
    body.style.height = "90%"
    body.style.position = "fixed"
    body.style.marginTop = "2.5%"
    body.style.marginLeft = "15%"
    var table = document.createElement("table")
    table.style.width = "100%"
    var tr = document.createElement("tr")
    var th1 = document.createElement("th")
    th1.innerHTML = "Name"
    th1.style.width = "20%"
    var th2 = document.createElement("th")
    th2.innerHTML = "Gender"
    th2.style.width = "20%"
    var th3 = document.createElement("th")
    th3.innerHTML = "Money Given"
    th3.style.width = "20%"
    var th4 = document.createElement("th")
    th4.innerHTML = "Xp Given"
    th4.style.width = "20%"
    var th5 = document.createElement("th")
    th5.innerHTML = "Last Seen"
    th5.style.width = "20%"
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    table.appendChild(tr)
    for(var i = 0; i < logs.length; i++) {
        var name = logs[i].name
        var gender = logs[i].gender
        var money = logs[i].money
        var xp = logs[i].xp
        var time = logs[i].time
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.style.width = "20%"
        td1.innerHTML = name
        var td2 = document.createElement("td")
        td2.style.width = "20%"
        td2.innerHTML = gender
        var td3 = document.createElement("td")
        td3.style.width = "20%"
        td3.innerHTML = money
        var td4 = document.createElement("td")
        td4.style.width = "20%"
        td4.innerHTML = xp
        var td5 = document.createElement("td")
        td5.style.width = "20%"
        td5.innerHTML = time
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        table.appendChild(tr)
    }
    body.appendChild(table)
    document.body.appendChild(body)
}

function delProducts() {
    var parent = document.getElementById("products")
    parent = parent.children[0]
    console.log(parent.children.length)
    for(var i = 0; i < parent.children.length * 40; i++) {
        parent.children[0].remove()
    }
    var visitor = document.getElementById("visitorBody")
    if(visitor != undefined) {
        visitor.remove()
    }
}

function spawnCrop(food) {
    switch (food) {
        case "tomato":
            var plant = document.createElement("img")
            plant.src = document.getElementById("Tomato1Img").src
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            plant.setAttribute("data", 0)
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)

                    check = 0
                }
            }
        break;
        case "wheat":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Wheat.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "eggplant":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Eggplant.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "grape":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Grape.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "carrot":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Carrot.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "pumpkin":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Pumpkin.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "pepper":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Pepper.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "cucumber":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Cucumber.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "blueberry" :
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Blueberry.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "cabbage":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Cabbage.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "corn":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Corn.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "potatoes":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Potato.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "strawberry":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Strawberry.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break; 
        case "watermelon":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Watermelon.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "apple":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Apple.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "cherry":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Cherry.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "beetroot":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Beetroot.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "avocado":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Avocado.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "cotton":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Cotton.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "orange":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Orange.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "lime":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Lime.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "pineapple":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Pineapple.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "kiwi":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Kiwi.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "peach":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Peach.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "fig":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Fig.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "pear":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Pear.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "pomegranate":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Pomegranate.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "coffee":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Coffee.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "banana":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Banana.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
        case "lemon":
            var plant = document.createElement("img")
            plant.src = "Media/Crops/T1/Lemon.png"
            plant.classList.add("cropImage")
            plant.addEventListener("dragstart", (e) => drag(e))
            plant.draggable = "true"
            plant.addEventListener("mouseenter", (e) => collect(e))
            var check = 1;
            var iter = 0;
            while(check == 1) {
                iter += 1
                if(iter > 1000) {
                    console.log("full")
                    check = 0
                }                
                var num = Math.floor((Math. random() * 330) + 1);
                var el = document.getElementById(num)
                if(el.children.length != 1 && lockChck(el) == false) {
                    el.appendChild(plant)
                    check = 0
                }
            }
        break;
    }
}

function spawnBuilding() {

}

function spawnPen() {

}

function gameLoop() {
    cropId()     
    customerChck()
    lvlprog()
    setTimeout(function() {gameLoop()}, 200)
}

function lvlprog() {
    var lvl = window.localStorage.getItem("lvl")
    var xp = window.localStorage.getItem("xp")
    var el = document.getElementById("lvlprog") 
    document.getElementById("lvlDis").innerHTML = `Level: ${lvl}`
    document.getElementById("lvlDis").setAttribute("lvl", lvl)
    if(lvl == 1) {
        el.max = 150
    }
    el.value = xp
}

function customerChck() {  
    var tomato = document.getElementById("tomatoes").getAttribute("data")
    var wheat = document.getElementById("wheat").getAttribute("data")
    var eggplant = document.getElementById("eggplants").getAttribute("data")
    for(var i = 1; i < 10; i++) {
        var cust = document.getElementById(`cust${i}`).children[4]
        var d1 = cust.children[0].children[1]
        var d2 = cust.children[1].children[1]
        var d3 = cust.children[2].children[1]
        var d4 = cust.children[3].children[1]
        var d1Crop = d1.getAttribute("type")
        var d1Num = d1.getAttribute("cost")
        var d2Crop = d2.getAttribute("type")
        var d2Num = d2.getAttribute("cost")
        var d3Crop = d3.getAttribute("type")
        var d3Num = d3.getAttribute("cost")
        var d4Crop = d4.getAttribute("type")
        var d4Num = d4.getAttribute("cost")
        d1Num = Number.parseInt(d1Num)
        d2Num = Number.parseInt(d2Num)
        d3Num = Number.parseInt(d3Num)
        d4Num = Number.parseInt(d4Num)
        var tomatoChck = 0
        var wheatChck = 0
        var eggplantChck = 0
        var tomatoC = 0
        var wheatC = 0
        if(d1Crop == "Tomato") {
            tomatoC = d1Num
            if(tomato >= d1Num) {
                tomatoChck = 1
                var el = document.getElementById(`cust${i}D1Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        } else if(d1Crop == "Wheat") {
            wheatC = d1Num
            if(wheat >= d1Num) {
                wheatChck = 1
                var el = document.getElementById(`cust${i}D1Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        }
        if(d2Crop == "Tomato") {
            tomatoC = d2Num
            if(tomato >= d2Num) {
                tomatoChck = 1
                var el = document.getElementById(`cust${i}D2Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        } else if(d2Crop == "Wheat") { 
            wheatC = d2Num
            if(wheat >= d2Num) {
                wheatChck = 1
                var el = document.getElementById(`cust${i}D2Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        }
        if(d3Crop == "Tomato") {
            tomatoC = d3Num
            if(tomato >= d3Num) {
                tomatoChck = 1
                var el = document.getElementById(`cust${i}D3Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        } else if(d3Crop == "Wheat") {
            wheatC = d3Num
            if(wheat >= d3Num) {
                wheatChck = 1
                var el = document.getElementById(`cust${i}D3Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        }
        if(d4Crop == "Tomato") {
            tomatoC = d4Num
            if(tomato >= d4Num) {
                tomatoChck = 1
                var el = document.getElementById(`cust${i}D4Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        } else if(d4Crop == "Wheat") {
            wheatC = d4Num
            if(wheat >= d4Num) {
                wheatChck = 1
                var el = document.getElementById(`cust${i}D4Chck`)
                el.classList.remove("noCheck")
                el.classList.add("check")
            }
        }
        if(tomatoC == 0) {
            tomatoChck = 1
        }
        if(wheatC == 0) {
            wheatChck = 1
        }   
        if(tomatoChck == 1 && wheatChck == 1) {
            renderClaim(i)
        } else if(document.getElementById(`cust${i}`).children[4].classList.contains("noDis")) {
            unrenderClaim(i)
        }
    }
}

function unrenderClaim(num) {
    console.log("test")
    var el = document.getElementById(`cust${num}`)
    el.children[4].children[0].children[0].classList.remove("check")
    el.children[4].children[0].children[0].classList.add("noCheck")
    el.children[4].children[1].children[0].classList.remove("check")
    el.children[4].children[1].children[0].classList.add("noCheck")
    el.children[4].children[2].children[0].classList.remove("check")
    el.children[4].children[2].children[0].classList.add("noCheck")
    el.children[4].children[3].children[0].classList.remove("check")
    el.children[4].children[3].children[0].classList.add("noCheck")
    el.children[2].classList.remove("noDis")
    el.children[3].classList.remove("noDis")
    el.children[4].classList.remove("noDis")
    el.children[5].classList.add("noDis")
}

function renderClaim(num) {   
    var el = document.getElementById(`cust${num}`)
    el.children[3].classList.add("noDis")
    el.children[4].classList.add("noDis")
    el.children[5].classList.remove("noDis")
} 

function cropLoop() {
    try {
        updataCropVals()
    } catch (error) {
        console.debug(error)
    }
    setTimeout(function() {cropLoop()}, 1000)
}

function saveLoop() {
    saveGame()
    setTimeout(function() {saveLoop()}, 100)
}

function updataCropVals() { 
    var arr = document.getElementsByClassName("cropImage")
    var tomato = JSON.parse(window.sessionStorage.getItem("tomato"))
    var wheat = {}
    var eggplant = {}
    var grape = {}
    var carrot = {}
    var obj = {
        "tomato": tomato,
        "wheat": wheat,
        "eggplant":  eggplant,
        "grape": grape,
        "carrot": carrot
    }
    //count down
    obj.tomato.T1 = obj.tomato.T1 - 1
    obj.tomato.T2 = obj.tomato.T2 - 1
    obj.tomato.T3 = obj.tomato.T3 - 1
    obj.tomato.T4 = obj.tomato.T4 - 1
    obj.tomato.T5 = obj.tomato.T5 - 1
    obj.tomato.T6 = obj.tomato.T6 - 1
    obj.tomato.T7 = obj.tomato.T7 - 1
    obj.tomato.T8 = obj.tomato.T8 - 1
    obj.tomato.T9 = obj.tomato.T9 - 1
    obj.tomato.T10 = obj.tomato.T10 - 1

    //update crops if time is up
    for(var i = 0; i < arr.length; i++) {
        var el = arr[i]
        var crop = fig1(el.src)
        var teir = fig2(el.src)
        if(crop == "tomato" && teir == 1) {
            if(obj.tomato.T1 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 2) {
            if(obj.tomato.T2 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 3) {
            if(obj.tomato.T3 == 0) {
                upVal(el)
            } 
        } else if(crop == "tomato" && teir == 4) {
            if(obj.tomato.T4 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 5) {
            if(obj.tomato.T5 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 6) {
            if(obj.tomato.T6 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 7) {
            if(obj.tomato.T7 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 8) {
            if(obj.tomato.T8 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 9) {
            if(obj.tomato.T9 == 0) {
                upVal(el)
            }
        } else if(crop == "tomato" && teir == 10) {
            if(obj.tomato.T10 == 0) {
                upVal(el)
            }
        }
    }
    if(obj.tomato.T1 == 0) {
        obj.tomato.T1 = 11
    }
    if(obj.tomato.T2 == 0) {
        obj.tomato.T2 = 9
    }
    if(obj.tomato.T3 == 0) {
        obj.tomato.T3 = 7
    } 
    if(obj.tomato.T4 == 0) {
        obj.tomato.T4 = 5
    }
    if(obj.tomato.T5 == 0) {
        obj.tomato.T5 = 3
    } 
    if(obj.tomato.T6 == 0) {
        obj.tomato.T6 = 3
    } 
    if(obj.tomato.T7 == 0) {
        obj.tomato.T7 = 2
    } 
    if(obj.tomato.T8 == 0) {
        obj.tomato.T8 = 2
    } 
    if(obj.tomato.T9 == 0) {
        obj.tomato.T9 = 2
    } 
    if(obj.tomato.T10 == 0) {
        obj.tomato.T10 = 2
    } 
    window.sessionStorage.setItem("tomato", JSON.stringify(obj.tomato))
}

function upVal(el) {
        /*steps
    get all crops
    figure out how long it has been scince last update
    see if we should update that crop
    update all the crops that apply
    DEFUALT VALS for updates in seconds
    TOMATOES
    TomatoT1 = 10s
    TomatoT2 = 8s
    TomatoT3 = 6s
    TomatoT4 = 4s
    TomatoT5 = 2s
    TomatoT6 = 2s
    TomatoT7 = 1s
    TomatoT8 = 1s
    TomatoT9 = 1s
    TomatoT10 = 1s
    MAX CAP for all crops
    TOMATOES
    TomatoT1 = 1
    TomatoT2 = 2
    TomatoT3 = 4
    TomatoT4 = 8
    TomatoT5 = 14
    TomatoT6 = 28
    TomatoT7 = 50
    TomatoT8 = 90
    TomatoT9 = 160
    TomatoT10 = 300
    */
    var crop = fig1(el.src)
    var teir = fig2(el.src)
    if(crop == "tomato" && teir == 1) {
        var plant = document.getElementById(el.id)
        if(plant.data == undefined || plant.data == null) {
            plant.setAttribute("data", 1)
        }
        if(plant.data != 1) {
            plant.setAttribute("data", 1)
        }
    } else if(crop == "tomato" && teir == 2) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 2) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 3) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 4) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 4) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 8) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 5) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 14) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 6) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 28) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 7) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 50) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 8) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 90) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 9) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 160) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    } else if(crop == "tomato" && teir == 10) {
        var plant = document.getElementById(el.id)
        if(plant.getAttribute("data") == undefined) {
            plant.setAttribute("data", 1)
        }
        if(plant.getAttribute("data") != 300) {
            var num = plant.getAttribute("data")
            num = Number.parseInt(num)
            num += 1
            plant.setAttribute("data", num)
        }
    }
}

function init() {
    var tomato = {
        T1: 11, 
        T2: 9,
        T3: 7,
        T4: 5,
        T5: 3,
        T6: 3,
        T7: 2,
        T8: 2,
        T9: 2,
        T10: 2

    }
    window.sessionStorage.setItem("tomato", JSON.stringify(tomato))
    var logs = JSON.parse(window.localStorage.getItem("logs"))
    if(logs == null || logs == undefined) {
        window.localStorage.setItem("logs", JSON.stringify([]))
    }
}

function fig1(src) {
    var crop
    try {
        if(src.includes("Tomato")) {
            crop = "tomato"
        } else if(src.includes("Wheat")) {
            crop = "wheat"
        }
    } catch (error) {
        
    }
    return crop
}

function fig2(src) {
    var teir 
    try {
        if(src.includes("T10")) {
            teir = 10
        } else if(src.includes("T2")) {
            teir = 2
        } else if(src.includes("T3")) {
            teir = 3
        } else if(src.includes("T4")) {
            teir = 4
        } else if(src.includes("T5")) {
            teir = 5
        } else if(src.includes("T6")) {
            teir = 6
        } else if(src.includes("T7")) {
            teir = 7
        } else if(src.includes("T8")) {
            teir = 8
        } else if(src.includes("T9")) {
            teir = 9
        } else if(src.includes("T1")) {
            teir = 1
        }
        return teir
    } catch (error) {
        stop()
    }

}

function fig3(crop) {
    console.log(crop)
    if(crop.includes("tomato")) {
        return "tomatoes"
    } else if(crop.includes("wheat")) {

    }
}

function lockChck(el) {
    if(el.classList.contains("locked") == true) {
        return true
    } else {
        return false
    }
}

function merge(plant, n) {
    switch (plant) {
        case "tomatoT1":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato2Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            n.appendChild(img)
            cropId()
        break;
        case "tomatoT2":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato3Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT3":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato4Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break; 
        case "tomatoT4":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato5Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT5":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato6Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;  
        case "tomatoT6":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato7Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;  
        case "tomatoT7":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato8Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "tomatoT8": 
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato9Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)            
        break;
        case "tomatoT9":
            var img = document.createElement("img")
            img.src = document.getElementById("Tomato10Img").src
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e))
            img.draggable = "true"
            cropId()
            n.appendChild(img)     
        break;
        case "wheatT1":
            var img = document.createElement("img")
            img.src = "Media/Crops/T2/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT2":
            var img = document.createElement("img")
            img.src = "Media/Crops/T3/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT3":
            var img = document.createElement("img")
            img.src = "Media/Crops/T4/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT4":
            var img = document.createElement("img")
            img.src = "Media/Crops/T5/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT5":
            var img = document.createElement("img")
            img.src = "Media/Crops/T6/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT6":
            var img = document.createElement("img")
            img.src = "Media/Crops/T7/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT7":
            var img = document.createElement("img")
            img.src = "Media/Crops/T8/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT8":
            var img = document.createElement("img")
            img.src = "Media/Crops/T9/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
        case "wheatT9":
            var img = document.createElement("img")
            img.src = "Media/Crops/T10/Wheat.png"
            img.classList.add("cropImage")
            img.addEventListener("drag", (e) => drag(e))
            img.addEventListener("mouseenter", (e) => collect(e)) 
            img.draggable = "true"
            cropId()
            n.appendChild(img)
        break;
    }
}

function allowDrop(ev) {
    var id = window.sessionStorage.getItem("id") 
    if(id != ev.target.id) {
        ev.preventDefault();
    }
}

function drag(ev) {
    cropId()
    window.sessionStorage.setItem("old", ev.target.parentElement.id)
    window.sessionStorage.setItem("id", ev.target.id)
}

function drop(ev) {
    ev.preventDefault();
    data = window.sessionStorage.getItem("id")
    var old = window.sessionStorage.getItem("old")
    var targ = ev.target

    if(targ.parentElement.id != "con") {
        targ = ev.target.parentElement
    }
    if(targ.children.length == 1) {
        var p1 = document.getElementById(data)
        var p2 = targ.children[0]
        var arr = mergechck(p1, p2)
        var chck = arr[0]
        var plant = arr[1]
        if(chck == true) {
            targ.children[0].remove()
            merge(plant, targ)
            old = document.getElementById(old)
            if(old.children.length > 0) {
                old.children[0].remove()
            }
        }
    } else {
        ev.target.appendChild(document.getElementById(data));
    }
}

function cropId() {
    var crops = document.getElementsByClassName("cropImage")
    var teir = 0
    var crop = ""
    var tomato = {
        T1: 0,
        T2: 0,
        T3: 0,
        T4: 0,
        T5: 0,
        T6: 0,
        T7: 0,
        T8: 0,
        T9: 0,
        T10: 0
    }  
    var wheat = {
        T1: 0,
        T2: 0,
    }
    for(var j = 0; j < crops.length; j++) {
        //find teir
        if(crops[j].src.includes("T1")) {
            teir = 1
        } else if(crops[j].src.includes("T2")) {
            teir = 2
        } else if(crops[j].src.includes("T3")) {
            teir = 3
        } else if(crops[j].src.includes("T4")) {
            teir = 4
        } else if(crops[j].src.includes("T5")) {
            teir = 5
        } else if(crops[j].src.includes("T6")) {
            teir = 6
        } else if(crops[j].src.includes("T7")) {
            teir = 7
        } else if(crops[j].src.includes("T8")) {
            teir = 8
        } else if(crops[j].src.includes("T9")) {
            teir = 9
        } else if(crops[j].src.includes("T10")) {
            teir = 10
        }
        //find crop type
        if(crops[j].src.includes("Tomato")) {
            crop = "tomato"
        } else if(crops[j].src.includes("Wheat")) {
            crop = "wheat"
        }
        if(crop == "tomato" && teir == 1) {
            tomato.T1 += 1
            crops[j].id = tomato.T1 + crop + teir
        } else if(crop == "tomato" && teir == 2) {
            tomato.T2 += 1
            crops[j].id = tomato.T2 + crop + teir
        } else if(crop == "tomato" && teir == 3) {
            tomato.T3 += 1
            crops[j].id = tomato.T3 + crop + teir
        } else if(crop == "tomato" && teir == 4) {
            tomato.T4 += 1
            crops[j].id = tomato.T4 + crop + teir
        } else if(crop == "tomato" && teir == 5) {
            tomato.T5 += 1
            crops[j].id = tomato.T5 + crop + teir
        } else if(crop == "tomato" && teir == 6) {
            tomato.T6 += 1
            crops[j].id = tomato.T6 + crop + teir
        } else if(crop == "tomato" && teir == 7) {
            tomato.T7 += 1
            crops[j].id = tomato.T7 + crop + teir
        } else if(crop == "tomato" && teir == 8) {
            tomato.T8 += 1
            crops[j].id = tomato.T8 + crop + teir
        } else if(crop == "tomato" && teir == 9) {
            tomato.T9 += 1
            crops[j].id = tomato.T9 + crop + teir
        } else if(crop == "tomato" && teir == 10) {
            tomato.T10 += 1
            crops[j].id = tomato.T10 + crop + teir
        } else if(crop == "wheat" && teir == 1) {
            wheat.T1 += 1
            crops[j].id = wheat.T1 + crop + teir
        } else if(crop == "wheat" && teir == 2) {
            wheat.T2 += 1
            crops[j].id = wheat.T2 + crop + teir
        }
    }
}

function del() {
    var con = document.getElementById("con")
    for(var i = 0; i < con.children.length; i++) {
        con.children[0].remove()
    }
}

function mergechck(p1, p2) {
    var teir
    var crop
    var plant1
    var plant2
    //find teir
    if(p1.src.includes("T1")) {
        teir = 1
    } else if(p1.src.includes("T2")) {
        teir = 2
    } else if(p1.src.includes("T3")) {
        teir = 3
    } else if(p1.src.includes("T4")) {
        teir = 4
    } else if(p1.src.includes("T5")) {
        teir = 5
    } else if(p1.src.includes("T6")) {
        teir = 6
    } else if(p1.src.includes("T7")) {
        teir = 7
    } else if(p1.src.includes("T8")) {
        teir = 8
    } else if(p1.src.includes("T9")) {
        teir = 9
    } else if(p1.src.includes("T10")) {
        teir = 10
    }
    //find crop type
    if(p1.src.includes("Tomato")) {
        crop = "tomato"
    } else if(p1.src.includes("Wheat")) {
        crop = "wheat"
    }
    plant1 = crop + "T" + teir
    //find teir of plant 2
    if(p2.src.includes("T1")) {
        teir = 1
    } else if(p2.src.includes("T2")) {
        teir = 2
    } else if(p2.src.includes("T3")) {
        teir = 3
    } else if(p2.src.includes("T4")) {
        teir = 4
    } else if(p2.src.includes("T5")) {
        teir = 5
    } else if(p2.src.includes("T6")) {
        teir = 6
    } else if(p2.src.includes("T7")) {
        teir = 7
    } else if(p2.src.includes("T8")) {
        teir = 8
    } else if(p2.src.includes("T9")) {
        teir = 9
    } else if(p2.src.includes("T10")) {
        teir = 10
    }
    //find crop type of plant 2
    if(p2.src.includes("tomato")) {
        crop = "tomato"
    } else if(p2.src.includes("Wheat")) {
        crop = "wheat"
    }
    plant2 = crop + "T" + teir
    //check if they are the same type of plant
    var arr = [0, ""]
    if(plant1 == plant2) {
        arr[0] = true
        arr[1] = plant1
        return arr
    } else {
        arr[0] = false
        return arr
    }
} 

function collect(e) {
    var plant = e.target
    var cropCount = plant.getAttribute("data")
    var crop = fig1(plant.src)
    if(cropCount == null) {
        return
    }
    if(crop == "tomato") {
        var tomato = document.getElementById("tomatoes")
        var num = tomato.getAttribute("data") 
        num = Number.parseInt(num)
        if(num == null || num == undefined || num == NaN) {
            num = 0
        }
        cropCount = Number.parseInt(cropCount)
        tomato.setAttribute("data",  cropCount + num)
        plant.setAttribute("data", 0)
        tomato.innerHTML = `Tomatos: ${cropCount + num}`
    } else if(crop == "wheat") {
        var wheat = document.getElementById("wheat")
        var num = wheat.getAttribute("data") 
        num = Number.parseInt(num)
        if(num == null || num == undefined || num == NaN) {
            num = 0
        }
        cropCount = Number.parseInt(cropCount)
        wheat.setAttribute("data",  cropCount + num)
        plant.setAttribute("data", 0)
        wheat.innerHTML = `Wheat: ${cropCount + num}`
    }
}  

function genCust(num) {
    console.log("genCust", num)
    var el = document.getElementById(`cust${num}`)
    var names = readJSON('name')
    var index = names.indexOf("&")
    var name = names.substring(0, index)
    var gender = names.substring(index + 1)
    var pfp = pic(gender)
    var lvl = JSON.parse(window.localStorage.getItem("lvl"))
    var req1C = readJSON("crop")
    var req1N = Math.floor((Math. random() * 100) + 1) * JSON.parse(window.localStorage.getItem("lvl"));
    var req2C = readJSON("crop")
    var req2N = Math.floor((Math. random() * 100) + 1) * JSON.parse(window.localStorage.getItem("lvl"));
    var req3C = readJSON("crop")
    var req3N = Math.floor((Math. random() * 100) + 1) * JSON.parse(window.localStorage.getItem("lvl"));
    var req4C = readJSON("crop")
    var req4N = Math.floor((Math. random() * 100) + 1) * JSON.parse(window.localStorage.getItem("lvl"));
    var check = 0
    var checker = window.sessionStorage.getItem("checker")
    var number = 0
    var req1CC = 0
    var req2CC = 0
    var req3CC = 0
    var req4CC = 0
    if(lvl == 3) {
        req4C = ""
        req4N = ""
        req4CC = 1
        if(req1C != req2C && req1C != req3C && req2C != req3C) {
            check = 6
        }
    }
    if(lvl == 2) {
        req4C = ""
        req4N = ""
        req3C = ""
        req3N = ""
        req4CC = 1
        req3CC = 1
        if(req1C != req2C) {
            check = 6
        } else {
            req1C = readJSON('crop')
            req2C = readJSON('crop')
            check = -10
        }
    }
    if(lvl == 1) {
        req4C = ""
        req4N = ""
        req3C = ""
        req3N = ""
        req2C = ""
        req2N = ""
        req4CC = 1
        req3CC = 1
        req2CC = 1
        check = 6
    }
    var random = Math.floor((Math. random() * 100));
    if(random < 26) {
        req4CC = 1
    } else if(random > 24 && random < 51) {
        req4CC = 1
        req3CC = 1
    } else if(random > 49 && random < 76) {
        req4CC = 1
        req3CC = 1
        req2CC = 1
    }
    while(check != 6 && number < 50) {
        console.log("while run")
        number++
        if(req1C == req2C && req2CC != 1) {
            req1C = readJSON('crop')
            req2C = readJSON('crop')
            check = 0
        } else {
            check++;
        }
        if(req1C == req3C && req3CC != 1) {
            req1C = readJSON('crop')
            req3C = readJSON('crop')
            check = 0
        } else {
            check++
        }
        if(req1C == req4C && req4CC != 1) {
            req1C = readJSON('crop')
            req4C = readJSON('crop')
            check = 0
        } else {
            check++
        }
        if(req2C == req3C && req3CC != 1) {
            req2C = readJSON('crop')
            req3C = readJSON('crop')
            check = 0
        } else {
            check++
        }
        if(req2C == req4C && req4CC != 1) {
            req2C = readJSON('crop')
            req4C = readJSON('crop')
            check = 0
        } else {
            check++
        }
        if(req3C == req4C && req4CC != 1) {
            req3C = readJSON('crop')
            req4C = readJSON('crop')
            check = 0
        } else {
            check++
        }
    }
    if(number == 50) {
        genCust(num)
    }
    var worth = getCustWorth(req1C, req1N, req2C, req2N, req3C, req3N, req4C, req4N, req1CC, req2CC, req3CC, req4CC);
    worth = Math.round(worth)
    var xp = getCustXp(worth)
    el.setAttribute("worth", worth) //sets customer value
    el.setAttribute("xp", xp)
    el.children[0].innerHTML = name //sets the name
    el.children[2].src = pfp // sets profile picture
    el.children[1].innerHTML = gender
    if(el.children[4].classList.contains('noDis')) {
        el.children[4].classList.remove("noDis")
    }
    el.children[4].children[0].children[1].innerHTML = `${req1C} ${req1N}` // sets the first data requirement text
    el.children[4].children[0].children[1].setAttribute('cost', req1N) // sets the cost attibute to the cost
    el.children[4].children[0].children[1].setAttribute('type', req1C) // sets the crop attribute to the crop
    if(req2CC == 0) {
        el.children[4].children[1].children[1].innerHTML = `${req2C} ${req2N}` // sets the second data requirment text  
        el.children[4].children[1].children[1].setAttribute('cost', req2N) // sets the cost attribute to the cost
        el.children[4].children[1].children[1].setAttribute('type', req2C)
    } else {
        el.children[4].children[1].children[1].innerHTML = `` // sets the second data requirment text  
        el.children[4].children[1].children[1].setAttribute('cost', 0) // sets the cost attribute to the cost
        el.children[4].children[1].children[1].setAttribute('type', 0)
    }
    if(req3CC == 0) {
        el.children[4].children[2].children[1].innerHTML = `${req3C} ${req3N}`
        el.children[4].children[2].children[1].setAttribute('cost', req3N)
        el.children[4].children[2].children[1].setAttribute('type', req3C)
    } else {
        el.children[4].children[2].children[1].innerHTML = ``
        el.children[4].children[2].children[1].setAttribute('cost', 0)
        el.children[4].children[2].children[1].setAttribute('type', 0)
    }
    if(req4CC == 0) {
        el.children[4].children[3].children[1].innerHTML = `${req4C} ${req4N}`
        el.children[4].children[3].children[1].setAttribute('cost', req4N)
        el.children[4].children[3].children[1].setAttribute('type', req4C)
    } else {
        el.children[4].children[3].children[1].innerHTML = ``
        el.children[4].children[3].children[1].setAttribute('cost', 0)
        el.children[4].children[3].children[1].setAttribute('type', 0)
    }
}

function lvlchck() {
    console.log("lvlchck")
    //use 1.5
    //lvl1 = 100
    //lvl2 = 150
    //lvl3 = 225
    //lvl4 = 338
    //lvl5 = 507
    //lvl6 = 761
    //lvl7 = 1142
    //lvl8 = 1713
    //lvl9 = 2570
    //lvl10 = 3855
    //after 10 use 1.25
    //lvl11 = 4819
    //lvl12 = 6024
    //lvl13 = 7530
    //lvl14 = 9413
    //lvl15 = 11766
    //after 15 use 1.15
    //lvl16 = 13531
    //lvl17 = 15561
    //lvl18 = 17895
    //lvl19 = 20579
    //lvl20 = 23666
    //after 20 use 1.1
    //lvl21 = 26033
    //lvl22 = 28636
    //lvl23 = 31500
    //lvl24 = 34650
    //lvl25 = 38115
    //after 25 use 1.05
    //lvl26 = 40021
    //lvl27 = 42022
    //lvl28 = 44123
    //lvl29 = 46329
    //lvl30 = 48645
    var xp = window.localStorage.getItem("xp")
    var lvl = window.localStorage.getItem("lvl")
    switch(lvl) {
        case "1":
            if(xp >= 150) {
                lvl = 2
                xp = xp - 150
                window.localStorage.setItem("lvl", lvl)
                window.localStorage.setItem("xp", xp)
            }
        break;
        case "2":
            if(xp >= 225) {
                lvl = 3
                xp = xp - 225
                window.localStorage.setItem("lvl", lvl)
                window.localStorage.setItem("xp", xp)
            }
        break;
    }
}

function collectCust(cNum) {
    var cust = document.getElementById(`cust${cNum}`)
    var name = document.getElementById(`cust${cNum}Name`).innerHTML
    var gender = document.getElementById(`cust${cNum}Gen`).innerHTML
    var worth = cust.getAttribute("worth")
    var coins = document.getElementById("coins")
    var money = coins.getAttribute("data")
    var lvl = window.localStorage.getItem("lvl")
    var xp = window.localStorage.getItem("xp")
    var exp = cust.getAttribute("xp")
    exp = Number.parseInt(exp)
    xp = Number.parseInt(xp)
    visitorLog(name, exp, gender, worth)
    exp = exp + xp
    window.localStorage.setItem("xp", exp)
    lvlchck()
    console.log(money)
    worth = Number.parseInt(worth)
    money = Number.parseInt(money)
    coins.innerHTML = `Coins: ${worth + money}`
    coins.setAttribute("data", worth + money)
    //1st requirement
    var req1C = cust.children[4].children[0].children[1].getAttribute("cost") // gets the ammount of crop needed
    req1C = Number.parseInt(req1C) // turns it to number
    var req1T = cust.children[4].children[0].children[1].getAttribute("type") //gets the type of crop needed
    var data1 = fig1(req1T)// formatting
    var crop1 = document.getElementById(fig3(data1)) // gets the crop values
    var c1D = crop1.getAttribute("data") // gets the value
    c1D = Number.parseInt(c1D) // turns it to number
    c1D = c1D - req1C // subtracts the ammout we already have by the ammount used
    crop1.setAttribute("data", c1D) // sets held ammount to what it should be
    console.log(`${req1T.charAt(0).toUpperCase()}${req1T.slice(1)}: ${c1D}`) 
    crop1.innerHTML = `${req1T.charAt(0).toUpperCase()}${req1T.slice(1)}: ${c1D}` // sets the text of the ammount of crop we have
    //2nd requirment
    var req2C = cust.children[4].children[1].children[1].getAttribute("cost")
    req2C = Number.parseInt(req2C)
    var req2T = cust.children[4].children[1].children[1].getAttribute("type")
    if(req2T != 0) {
        var data2 = fig1(req2T)
        var crop2 = document.getElementById(fig3(data2))
        var c2D = crop2.getAttribute("data")
        c2D = Number.parseInt(c2D)
        c2D = c2D - req2C
        crop2.setAttribute("data", c2D)
        console.log(`${req2T.charAt(0).toUpperCase()}${req2T.slice(1)}: ${c2D}`)
        crop2.innerHTML = `${req2T.charAt(0).toUpperCase()}${req2T.slice(1)}: ${c2D}`
    }
    //3rd requirement
    var req3C = cust.children[4].children[2].children[1].getAttribute("cost")
    req3C = Number.parseInt(req3C)
    var req3T = cust.children[4].children[2].children[1].getAttribute("type")
    if(req3T != 0) {
        var data3 = fig1(req3T)
        var crop3 = document.getElementById(fig3(data3))
        var c3D = crop2.getAttribute("data")
        c3D = Number.parseInt(c3D)
        c3D = c3D - req2C
        crop3.setAttribute("data", c3D)
        console.log(`${req3T.charAt(0).toUpperCase()}${req3T.slice(1)}: ${c3D}`)
        crop3.innerHTML = `${req3T.charAt(0).toUpperCase()}${req3T.slice(1)}: ${c3D}`
    }
    //4th requirement
    var req4C = cust.children[4].children[3].children[1].getAttribute("cost")
    req4C = Number.parseInt(req4C)
    var req4T = cust.children[4].children[3].children[1].getAttribute("type")
    if(req4T != 0) {
        var data4 = fig1(req4T)
        var crop4 = document.getElementById(fig3(data4))
        var c4D = crop2.getAttribute("data")
        c4D = Number.parseInt(c4D)
        c4D = c4D - req4C
        crop4.setAttribute("data", c4D)
        console.log(`${req4T.charAt(0).toUpperCase()}${req4T.slice(1)}: ${c4D}`)
        crop4.innerHTML = `${req4T.charAt(0).toUpperCase()}${req4T.slice(1)}: ${c4D}`
    }
    unrenderClaim(cNum)
    try {
        console.log()
        genCust(cNum)
    } catch (error) {
        genCust(cNum)
        console.log(error)
    }
}

function pic(gender) {
    if(gender == "male") {
        return "Media/Profiles/male.jfif"
    } else if(gender == 'female') {
        return "Media/Profiles/female.png"
    } else {
        return "Media/Profiles/blank.jfif"
    }
}

function getCustWorth(req1C, req1N, req2C, req2N, req3C, req3N, req4C, req4N, req1CC, req2CC, req3CC, req4CC) {
    if(req1CC == 0) {
        switch (req1C) {
            case "Tomato":
                var perC = 6/12
                var worth = req1N * perC
                return worth
            break
            case "Wheat":
                var perC = 12/12
                var worth = req1N * perC
                return worth
            break
        }
    }
    if(req2CC == 0) {
        switch (req2C) {
            case "Tomato":
                var perC = 6/12
                var worth = req2N * perC
                return worth
            break
            case "Wheat":
                var perC = 12/12
                var worth = req2N * perC
                return worth
            break;
        }
    }
    if(req3CC == 0) {
        switch (req3C) {
            case "Tomato":
                var perC = 0.5
                var worth = req3N * perC
                return worth
            break
        }
    }
    if(req4CC == 0) {
        switch (req4C) {
            case "Tomato":
                var perC = 0.5
                var worth = req4N * perC
                return worth
            break
        }
    }
}

function getCustXp(worth) {
    return Math.round(worth * 0.1)
}

function visitorLog(name, xp, gender, worth) {
    console.log(name, xp, gender, worth)
    if(typeof(worth) == "string") {
        worth = Number.parseInt(worth)
    }
    var date = new Date()
    var weekday = date.getDay()
    var day = date.getDate()
    var month = date.getMonth()
    month++
    var year = date.getFullYear()
    var hrs = date.getHours()
    var minute = date.getMinutes()
    var logs = JSON.parse(window.localStorage.getItem("logs"))
    var old
    console.log(minute)
    if(minute.length == 1) {
        minute = "0" + minute
    }
    var time = `${weekday} ${day}/${month}/${year} ${hrs}:${minute}`
    for(var i = 0; i < logs.length; i++) {
        if(logs[i].name == name && logs[i].gender == gender) {
            old = logs[i]
        }
    }
    if(old != undefined) {
        var oldMoney
        var oldxp
        old.money = oldMoney + worth
        old.xp = oldxp + xp
        old.time = time
        old.visited += 1
    } else {
        var vis = {
            name: name,
            gender: gender,
            money: worth,
            xp: xp,
            time: time,
            visited: 1,
        }
        logs.push(vis)
    }
    window.localStorage.setItem("logs", JSON.stringify(logs))
    console.log(weekday, day, month, year, hrs, minute)
}  