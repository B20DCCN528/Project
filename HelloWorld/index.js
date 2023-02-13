const changeColor = ()=> {
    let color = getRandomColor();
    document.getElementById("top").style.color = color;
}

const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()* 16) ];
    }
    return color;
}
function calculateSum() {
    var x = parseFloat(document.getElementById("number-1").value);
    var y = parseFloat(document.getElementById("number-2").value);
    var z = x + y;
    document.getElementById("result").innerHTML = "Tong la: " + z;
}