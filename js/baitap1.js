function timSoNguyenN() {
    var tong = 0;
    for (i = 0; tong < 10000; i++){
        tong += i;
        document.getElementById('ketquabai1').innerHTML = "Số nguyên N nhỏ nhất : " + i;
    }
}