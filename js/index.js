var input = document.getElementById("number");
var button = document.getElementById("send");

var fibonnaci = (n) => {
    var fibo = [];

    fibo[0] = 0;
    fibo[1] = 1;
    fibo[2] = 1;

    for(var i = 3; i <= n; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }

    return fibo[n];
};

var submit = () => {
    if (button.onclick = () => {
        if (parseInt(input.value) > 1400) {
            alert("Wprowadzona wartość jest nieprawidłowa!");
            return false;
        } else if (isNaN(input.value)) {
            alert("Wprowadzona wartość, nie jest liczbą!");
            return false;
        } else if (input.value === "" || input.value === undefined) {
            alert("Proszę uzupełnić dane w formularzu");
            return false;
        } else {
            var result = document.getElementById("result");

            return result.innerHTML = "Odpowiednik liczby: "+ input.value + " wynosi " + fibonnaci(input.value);
        }
    });
};

function setClock()
{
    var clock = document.getElementById("clock");

    return clock.innerText = "Aktualny czas: " + moment().format('MMMM Do YYYY, h:mm a');
}

submit();
setClock();