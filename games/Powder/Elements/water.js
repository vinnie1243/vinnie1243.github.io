function water(id) {
    var arr = document.getElementById("displayData").data;
    if(arr[id + 1].element.id == null && arr[id].change != true || arr[id - 1].element.id == null && arr[id].change != true) {
        var num = rng(1, 5);
        if(num == 1) {
            liquidSideMove(id);
        }
    }

}

function boilWATR(id) {

}

function freezeWATR(id) {

}

