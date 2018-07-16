function ubahHuruf(kata) {
  var alfa = 'abcdefghijklmnopqrstuvwxyz'
  var alfabet = alfa.split('')
  var result = ''
  for(var i = 0; i < kata.length; i++){
    for(var j = 0; j < alfabet.length; j++){
      if (kata[i] === alfabet[j]){
        result += alfabet[j+1]
      }
    }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
