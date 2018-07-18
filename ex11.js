function changeMe(arr) {
  var year = 2018
  if (arr.length !== 0){
    for ( var i = 0; i < arr.length; i++){
      var obj = {}
      console.log(i+1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':')
      obj.firstName = arr[i][0]
      obj.lastName = arr [i][1]
      obj.gender = arr [i][2]
      if (arr[i].length < 4 ){
        obj.age = 'Invalid Birth Year'
      } else {
        obj.age = year - arr[i][3]
      }
      console.log(obj)
    }
  }
  return ''
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
