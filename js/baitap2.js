function tinhTongS() {
    var x = document.getElementById('x').value;
    var n = document.getElementById('n').value;
    var tongbaitap2 = 0;
    for (let i = 1; i <= n; i++) {
        tongbaitap2 += Math.pow(x, i) ;
        document.getElementById('ketquabai2').innerHTML = "Tổng S(n) là: " + tongbaitap2;
    }  
}