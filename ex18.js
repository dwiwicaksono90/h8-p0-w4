// function kaliTerusRekursif(angka) {
//   var angkaStr = String(angka)
//   var hasil = 1
//   for (var i = 0; i < angkaStr.length; i++){
//     hasil = hasil * Number(angkaStr[i])
//   }
//   if (String(hasil).length === 1){
//     return Number(hasil)
//   }
//   return kaliTerusRekursif(Number(hasil))
// }


// cara pendek
function kaliTerusRekursif(angka) {
  if (String(angka).length  === 1 ){
return angka
  }
  return  kaliTerusRekursif(Number(String(angka)[0]) * kaliTerusRekursif(Number(String(angka).slice(1))))
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
