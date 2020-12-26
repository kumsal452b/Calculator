var num1 = document.getElementById("num1");

var num2 = document.getElementById("num2");

var selector = document.getElementById("Select1");

var result = 0.0;

var button = document.getElementById("calculate");

function Calculate() {
    var val1 = num1.value;
    var val2 = num2.value;
   
    if (selector.value = "+") {
        result = val1 + val2;
    }
    else if (selector.value = "-") {

        result = val1 - val2;
    }
    else if (selector.value = "*") {

        result = val1 * val2;
    }
    else {

        result = val1 / val2;
    }

    alert(result);
}
    button.addEventListener("click", Calculate);
