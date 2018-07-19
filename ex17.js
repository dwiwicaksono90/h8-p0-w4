function totalDigitRekursif(angka) {
  var angkaStr = String(angka)
  var angkaDepan = angkaStr[0]
  var angkaSisa = angkaStr.slice(1)

  if (angkaSisa.length === 0){
    return Number(angkaDepan)
  }

  return Number(angkaDepan) + totalDigitRekursif(Number(angkaSisa))

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
