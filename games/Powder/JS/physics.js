function physics() {
    var arr = document.getElementById("displayData").data;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].element.id != null) {
            var ele = getElementData(arr[i].element.id);
            //gravity  
            if(arr[i].element.gravity == true) {
                if(arr[i].y != 37) {
                    if(arr[i].y + 1 < 38) {
                        if(arr[i + 76].element.id == null && arr[i].change != true) {
                            arr[i + 76].element = arr[i].element;
                            arr[i + 76].color = arr[i].color;
                            arr[i + 76].change = true;
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
            }
            switch (arr[i].element.id) {
                case "water":
                    water(i)
                break;
                case "titanium":
                    titanium(i)
                break;
                case "dust": 
                    dust(i)
                break;
            }
        }
        document.getElementById("displayData").data = arr;
    }
}