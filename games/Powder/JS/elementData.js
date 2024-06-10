function getElementData(ele) {
    var eleData = {
        water: {
            element: "water",
            properties: {
                meltingPoint: null,
                boilingPoint: 212,
                density: 1,
                conductive: true,
                breakingPoint: null,
            },
            color: "#0000FF",
            state: "liquid",
            temp: 68,
            gravity: true,
        },
        //solid
        titanium: {
            element: "titanium",
            properties: {
                meltingPoint: 3034,
                boilingPoint: 3560,
                density: 4.506,
                conductive: true,
                breakingPoint: 0.5,
            },
            color: "#C0C0C0",
            state: "solid",
            temp: 68,
            gravity: false
        },
        //powder
        dust: {
            element: "dust",
            properties: {
                meltingPoint: null,
                boilingPoint: null,
                density: 0.49,
                conductive: false,
                breakingPoint: null,
            },
            color: "#B2996E",
            state: "powder",
            temp: 68,
            gravity: true
        }
    }
    return eleData[ele];
}