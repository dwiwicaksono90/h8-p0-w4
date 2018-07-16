function fpb(angka1, angka2) {
  var fpb1 = []
  var fpb2 = []

  for (var i = 1; i <= angka1; i++){
    if (angka1 % i === 0){
      fpb1.push(i)
    }
  }
  for (var j = 1; j <= angka2; j++){
    if (angka2 % j === 0){
      fpb2.push(j)
    }
  }
  fpb1.sort(function(a,b){return b-a})
  fpb2.sort(function(a,b){return b-a})

  for (var k = 0; k < fpb1.length; k++){
    for (var l = 0; l < fpb2.length; l++){
      if (fpb1[k] === fpb2[l]){
        return fpb1[k]
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
