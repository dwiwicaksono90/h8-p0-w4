function changeVocals (str) {
  var alfa = 'abcdefghijklmnopqrstuvwxyz'
  var result = ''
  for (var i = 0; i < str.length; i++){
    switch (str[i]){
      case 'a' : {result = result + alfa[1];break;}
      case 'A' : {result = result + alfa[1].toUpperCase();break;}
      case 'i' : {result = result + alfa[9];break;}
      case 'I' : {result = result + alfa[9].toUpperCase();break;}
      case 'u' : {result = result + alfa[21];break;}
      case 'U' : {result = result + alfa[21].toUpperCase();break;}
      case 'e' : {result = result + alfa[5];break;}
      case 'E' : {result = result + alfa[5].toUpperCase();break;}
      case 'o' : {result = result + alfa[15];break;}
      case 'O' : {result = result + alfa[15].toUpperCase();break;}
      default : {result = result + str[i];}
    }
  }
return result
}


  // var alfa = 'abcdefghijklmnopqrstuvwxyz'
  // var vokal = 'aiueo'
  // var result = ''
  // for (var i = 0; i < str.length; i++){
  //   var temp = str[i]
  //   for (var j = 0; j < vokal.length; j++){
  //     if (str[i] === vokal[j]){
  //       temp = alfa[alfa.indexOf(str[i])+1]
  //       // console.log(temp)
  //     } else if (str[i] === vokal[j].toUpperCase()){
  //       temp = alfa[alfa.indexOf(str[i].toLowerCase())+1].toUpperCase()
  //     }
  //   }
  //   result = result + temp
  // }
  // return result
// }

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
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  var listChangeVoc = changeVocals (name)
  var listReverse = reverseWord (listChangeVoc)
  var listSetLowUp = setLowerUpperCase (listReverse)
  var listRemoveSpace = removeSpaces (listSetLowUp)
  return listRemoveSpace
  }
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
