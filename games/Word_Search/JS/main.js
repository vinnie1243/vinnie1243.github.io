function make() {
    var dim = document.getElementById("dim").value
    var diff = document.getElementById("diff").value
    var h = window.innerHeight
    var s = Math.round(h * 0.75)
    var d = Math.round(h * 0.25) 
    var l = s / dim
    
    console.log(dim,diff,h,s,d,l)
    clear()
    
}

function clear() {
    var arr = document.getElementsByClassName("dis")
    for(var i = 0; i < arr.length; i++) {
        var el = arr.item(i)
        el.style.display = "none"
    }
}