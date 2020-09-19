console.log("Soal Array")
console.log();

var inputan = [["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]]

function dataHandling2 (inputan) {
    var arrInput = []
    var results1 = arrInput.push(inputan[0][0])
    var tampung = arrInput.splice(1, 1, 'Roman Alamsyah Elsharawy')
    var tampung1 = arrInput.splice(2, 1, 'Provinsi Bandar Lampung')
    var results3 = arrInput.push(inputan[0][3])
    var tampung2 = arrInput.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(arrInput)

    var date = arrInput[3]
    var splitDate = date.split('/')
    var tempDay = splitDate[0]
    var tempMonth = splitDate[1]
    var tempYear = splitDate[2]
    var bulan = tempMonth
    switch (bulan) {
        case "01":
            console.log("Januari")
            break;
        case "02":
            console.log("Februari")
            break;
        case "03":
            console.log("Maret")
            break;
        case "04":
            console.log("April")
            break;
        case "05":
            console.log("Mei")
            break;
        case "06":
            console.log("Juni")
            break;
        case "07":
            console.log("Juli")
            break;
        case "08":
            console.log("Agustus")
            break; 
        case "09":
            console.log("September")
            break;
        case "10":
            console.log("Oktober")
            break;
        case "11":
            console.log("November")
            break;
        case "12":
            console.log("Desember")
            break;
        default:
            console.log("Invalid input")
            break;
    }

    var dateArr = [tempDay, tempMonth, tempYear]
    dateArr.sort(function (a, b) { return b - a })
    console.log(dateArr);

    var dateArrNew = [tempDay, tempMonth, tempYear]
    var dateNewFormat = dateArrNew.join("-")
    console.log(dateNewFormat);

    var name = arrInput[1].toString()
    var stringFormat = name.slice(0, 15)
    console.log(stringFormat);
}
 
console.log(dataHandling2(inputan));