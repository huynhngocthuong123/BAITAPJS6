function giaiThua() {
    var inputN = document.getElementById('inputN').value;
    var tongbaitap3 = 1;
    for (let i = 1; i <= inputN; i++) {
        tongbaitap3 *= i;
document.getElementById('ketquabt3').innerHTML = "Giai thừa của: " + inputN  + "! = " + tongbaitap3;
    } 
}