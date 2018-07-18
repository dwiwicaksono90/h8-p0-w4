function hitungHuruf(kata) {
  var kataSplit = kata.split(' ')
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var hasil2 = []
  console.log(kataSplit);
  for (var i = 0; i < kataSplit.length; i++){
    var hasil = []
    for (var j = 0; j < alfabet.length; j++){
      var temp = 0
      for (var k = 0; k < kataSplit[i].length; k++){
        if (alfabet[j] === kataSplit[i][k]){
          temp += 1
        }
      }
      if ( temp > 1){
      hasil.push(temp)
      }
    }
    hasil2.push(hasil)
  }
  console.log(hasil2, '  hasil2')
  var jumlah = hasil2[0].length
  for (var l = 1; l < hasil2.length-1; l++){
    if (hasil2[l].length > jumlah){
      jumlah = hasil2[l].length
      var hasil4 = l
    }
  }
  var jmljumlah = 0
  for (var m = 0; m < hasil2.length; m++){
    if (hasil2[m].length === jumlah){
      jmljumlah +=1
    }
  }
  // console.log(jmljumlah);
  // console.log(hasil2[0] , '   hasil2[0]');
  if (jmljumlah === 1){
    return kataSplit[hasil4]
  } else {
      var besar = hasil2[0]
      for (var n = 1; n < hasil2.length;n++){
        if (hasil2[n] > besar){
          besar = hasil2[n]
          var hasil3 = n
        }
      }
      console.log(besar, '   besar')
      return kataSplit[hasil3]
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau
