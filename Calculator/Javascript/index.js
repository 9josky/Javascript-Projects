function dis(val) {
    document.getElementById("result").value += val;
}

function myKeyboard(event) {
    if (event.key == '48' || event.key == '49'
        || event.key == '50' || event.key == '51'
        || event.key == '52' || event.key == '53'
        || event.key == '54' || event.key == '55'
        || event.key == '56' || event.key == '57'
        || event.key == '106' || event.key == '107'
        || event.key == '109' || event.key == '111'
    )
        document.getElementById("result").value += event.key;
}

// Using the mathjs library to calculate the input (math.evaluate(x))
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";
}