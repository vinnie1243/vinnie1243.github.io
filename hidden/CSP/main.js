function grade() {
    var grade = document.getElementById("grade");
    var result = document.getElementById("result");
    if (grade < 101 && grade > 89) {
        result.innerHTML = "A";
    } else if (grade >= 80) {
        result.innerHTML = "B";
    } else if (grade >= 70) {
        result.innerHTML = "C";
    } else if (grade >= 60) {
        result.innerHTML = "D";
    } else {
        result.innerHTML = "F";
    }
}