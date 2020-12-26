var num1 = document.getElementById("num1");

var num2 = document.getElementById("num2");

var selector = document.getElementById("Select1");

var result = 0.0;

var button = document.getElementById("calculate");

function Calculate() {
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);

    if (selector.value == "1") {
        result = Number(val1 + val2);
        alert(result);
    }
    else if (selector.value == "2") {

        result = Number(val1 - val2);
        alert(result);
    }
    else if (selector.value == "3") {

        result = Number(val1 * val2);
        alert(result);
    }
    else if (selector.value == "4") {

        result = Number(val1 / val2);
        alert(result);
    } else {
        alert("Please select a proceses");
    }

   
}
    button.addEventListener("click", Calculate);
