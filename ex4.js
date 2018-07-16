function cariModus(arr) {
  var temp1 = []
  var temp2 = []

  for (var i = 0; i < arr.length-1; i++){
    var temp1 = []
    for (var j = i+1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        temp1.push(arr[i])
      }
    }
    if (temp1.length !== 0){
      temp2.push(temp1)
    }
  }
  if (temp2.length === 0){
      return -1
  } else if (temp2.length === 1){
      return temp2[0][0]
  } else {
      if (temp2[0][0] === temp2[1][0]){
        return -1
      } else {
        return temp2[0][0]
      }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
