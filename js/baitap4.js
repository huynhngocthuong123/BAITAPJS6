function taoDIV() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) document.getElementById('ketquabai4').innerHTML += "<p style='background-color: red; color: white; margin:0'> DIV CHẴN "+i+" </p>"
        else document.getElementById('ketquabai4').innerHTML += "<p style='background-color: blue; color: white; margin:0'> DIV LẼ "+i+"</p>"
    }
}