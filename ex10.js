function checkAB(num) {

  for (var i = 0; i < num.length; i++){
    if (num[i] === 'b'){
      if (i > 2 ){
        for (var j = 1; j <= 4; j++){
          if (num[i-j] === 'a'){
            return true
          }
        }
      }
    }
  }
return false
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
