
function GuessMe() {
    var a = document.getElementById("number").value;
    if (a < 86) {
        alert("Enter the larger value")
    } else if (a > 86) {
        alert("Enter the smaller value")
    } else { alert("Congratulations You caught me!!") }
}

