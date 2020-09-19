// main.js

// variable
// var statusOpt = true;

// looping
// while (statusOpt) {
//     var opt = prompt('Pilih operasi matematika:\n(tambah, kurang, kali, bagi, pangkat, min, max)');
//     if (opt == 'tambah' || opt == 'kurang' || opt == 'kali' || opt == 'bagi' || opt == 'pangkat' || opt == 'min' || opt == 'max') {
//         statusOpt = false;
//     } else {
//         statusOpt = true;
//     }
// }

// variable
// var hasil,
//     angkaPertama = parseInt(prompt('Masukkan nilai angka pertama: ')),
//     angkaKedua = parseInt(prompt('Masukkan nilai angka kedua: '));

// condition
// if (opt == 'tambah') {
//     hasil = angkaPertama + angkaKedua;
// } else if (opt == 'kurang') {
//     hasil = angkaPertama - angkaKedua;
// } else if (opt == 'kali') {
//     hasil = angkaPertama * angkaKedua;
// } else if (opt == 'bagi') {
//     hasil = angkaPertama / angkaKedua;
// } else if (opt == 'pangkat') {
//     hasil = Math.pow(angkaPertama, angkaKedua);
// } else if (opt == 'min') {
//     hasil = Math.min(angkaPertama, angkaKedua);
// } else if (opt == 'max') {
//     hasil = Math.max(angkaPertama, angkaKedua);
// } else {
//     hasil = 'Input tidak valid';
// }
// alert('Hasilnya adalah: ' + hasil);

function start(){
    let isValid = false
    let firstNum
    let secondNum
    let operator
    
    do{
        firstNum = prompt("Masukkan angka pertama", "")
        if(isNaN(firstNum)){
            alert("Nilai tidak valid. Coba lagi!")
        }else{
            isValid = true
        }
    }while(!isValid)

    isValid = false
    do{
        secondNum = prompt("Masukkan angka kedua", "")
        if(isNaN(secondNum)){
            alert("Nilai tidak valid. Coba lagi!")
        }else{
            isValid = true
        }
    }while(!isValid)

    isValid = false
    do{
        operator = prompt(`Silahkan masukkan operator: \n 
        Operator penambahan: + \n
        Operator pengurangan: - \n
        Operator perkalian: * \n
        Operator pembagian: / \n
        Operator perpangkatan: ^ \n
        Operator nilai maksimum: max \n
        Operator nilai mininum: min`)

        if(operator.trim() == '+' || operator.trim() == '-' || 
        operator.trim() == '*' || operator.trim() == '/' || operator.trim() == '^' ||
        operator.trim() == 'max' || operator.trim() == 'min' ){
            isValid = true;
        }else{
            alert("Harap masukkan operator yang valid.")
        }
    }while(!isValid);

    firstNum = +firstNum;
    secondNum = +secondNum;
    let res;

    switch(operator.trim()){
        case '+' :
            res = firstNum + secondNum;
            alert(`Hasilnya: ${res}`);
            break;
        case '-':
            res = firstNum - secondNum;
            alert(`Hasilnya: ${res}`);
            break;
        case '*':
            res = firstNum * secondNum;
            alert(`Hasilnya: ${res}`);
            break;
        case '/':
            if(firstNum == 0 || secondNum == 0){
                alert("Erorr! Tidak boleh pembagian 0")
            } else {
                res = firstNum / secondNum;
                alert(`Hasilnya: ${res}`);
            }
            break;
        case '^':
            res = Math.pow(firstNum, secondNum);
            alert(`Hasilnya: ${res}`);
            break;
        case 'min':
            res = Math.min(firstNum, secondNum);
            alert(`Hasilnya: ${res}`);
            break;
        case 'max':
            res = Math.max(firstNum, secondNum);
            alert(`Hasilnya: ${res}`);
            break;
        default:
            alert("Masukkan tidak valid. Coba lagi!")
    }
}

start()