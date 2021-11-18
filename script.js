var y = Math.floor(Math.random() * 100 + 1);
console.log(y);




function GuessMe() {


    var a = document.getElementById("number").value;

    if (a < y) {
        alert("Opss!!Enter the larger value ")
    } else if (a > y) {
        alert("Opss!!Enter the smaller value")
    } else { alert("Congratulations You caught me!!") }
}

