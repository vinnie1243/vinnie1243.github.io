function dust(id) {
    var arr = document.getElementById("displayData").data;
    var chck1 = false
    var chck2 = false
    var chck3 = false
    if(id + 75 < 2776) {
        if(arr[id + 75].element.id == null) {
            chck1 = true
        }
    }
    if(id + 77 < 2776) {
        if(arr[id + 77].element.id == null) {
            chck2 = true
        }
    }
    if(id + 76 < 2776) {
        if(arr[id + 76].element.id != null) {
            chck3 = true
        }
    }
    if(chck1 == true && chck2 == true && arr[id].change != true && id + 77 < 2776 && chck3 == true) {
        var num = rng(1, 2);
        if(num == 1) {
            slideLDUST(id);
        } else {
            slideRDUST(id);
        }
    } else if(chck1 == true && chck2 == false && arr[id].change != true && chck3 == true) {
        if(!arr[id + 75].x < arr[id].x) {
            slideLDUST(id);
        }
    } else if(chck1 == false && chck2 == true && arr[id].change != true && chck3 == true) {
        if(!arr[id + 77].x < arr[id].x) {
            slideRDUST(id);
        }
    }
}

function slideRDUST(id) {
    var arr = document.getElementById("displayData").data;
    arr[id + 77].element = arr[id].element;
    arr[id + 77].color = arr[id].color;
    arr[id + 77].change = true;
    arr[id].element =  {
        id: null,
        temp: null,
        charge: null,
        velocity: null,
        direction: null,
        state: null,
    },
    arr[id].color = "#000000";
    document.getElementById("displayData").data = arr;
}

function slideLDUST(id) {
    var arr = document.getElementById("displayData").data;
    arr[id + 75].element = arr[id].element;
    arr[id + 75].color = arr[id].color;
    arr[id + 75].change = true;
    arr[id].element =  {
        id: null,
        temp: null,
        charge: null,
        velocity: null,
        direction: null,
        state: null,
    },
    arr[id].color = "#000000";
    document.getElementById("displayData").data = arr;
}