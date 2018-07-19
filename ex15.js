function changeVocals (str) {
  var alfa = 'abcdefghijklmnopqrstuvwxyz'
  var vokal = 'aiueo'
  var result = ''
  for (var i = 0; i < str.length; i++){
    var temp = str[i]
    for (var j = 0; j < vokal.length; j++){
      if (str[i] === vokal[j]){
        temp = alfa[alfa.indexOf(str[i])+1]
        // console.log(temp)
      } else if (str[i] === vokal[j].toUpperCase()){
        temp = alfa[alfa.indexOf(str[i].toLowerCase())+1].toUpperCase()
      }
    }
    result = result + temp
  }
  return result
}

function reverseWord (str) {
  return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
  var result2 = ''
  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      result2 = result2 + str[i].toLowerCase()
    } else if (str[i] === str[i].toLowerCase()){
      result2 = result2 + str[i].toUpperCase()
    }
  }
  return result2
}

function removeSpaces (str) {
  var result3 = ''
  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' '){
      result3 = result3 + str[i]
    }
  }
  return result3
}

function passwordGenerator (name) {
  var listChangeVoc = changeVocals (name)
  var listReverse = reverseWord (listChangeVoc)
  var listSetLowUp = setLowerUpperCase (listReverse)
  var listRemoveSpace = removeSpaces (listSetLowUp)
  // var listPassGen = passwordGenerator (listRemoveSpace)
  return listRemoveSpace
}

// console.log(changeVocals('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
