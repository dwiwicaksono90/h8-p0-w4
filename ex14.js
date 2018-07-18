function sorting(arrNumber) {
  var sort =  arrNumber.sort(function(a,b){return b-a})
  // console.log(sort)
  return sort
}

function getTotal(arrNumber) {
  var bigest = arrNumber[0]
  var count = 1
  for (var i = 1; i < arrNumber.length; i++ ){
    if (arrNumber[i] === bigest){
      count++
    }
  }
  // console.log(count)
  return count
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
