function digitPerkalianMinimum(angka) {
  var hasil = []
  for (var i = 1; i <= angka; i++){
    var temp = ''
    var temp2 = ''
    if (angka % i === 0){
      temp2 = angka / i
      temp = String(i) + String(temp2)
      hasil.push(temp)
    }
  }
  var result = hasil[0].length
  for (var j = 1; j < hasil.length; j++){
    if (hasil[j].length < result){
      result = hasil[j].length
    }
  }
  return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
