var removeSpace = function(string){
  var whiteSpace = string.replace(/\s+/g, '');
  var punctuation = whiteSpace.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  return punctuation.toLowerCase()
}

var findSquare = function(string){
  var letters = removeSpace(string)
  var letterLength = letters.length;
  var squareRoot = Math.sqrt(letterLength);
  if (squareRoot % 1 === 0){
    return squareRoot;
  }
  else{
    return Math.ceil(squareRoot);
  }
}

var makeSquare = function(newString){
  // var letterArray = []
  var letters = removeSpace(newString)
  var rowLength = findSquare(letters)
  var letterArray = letters.split('')
  var newWord = []
    //
    // newWord.push(letterArray[i])
    // var newIndex = i + rowLength
    // newWord.push(letterArray[newIndex])



  var sliceBegin = 0
  var sliceEnd = 1

  for (var i = 0; i < rowLength; i++){
    var row = letters.slice(sliceBegin, sliceEnd)
    letterArray.push(row.split(''))
  }

  sliceBegin += rowLength
  sliceEnd += rowLength
  return row
}

// var encode = function(finalString){
//   var square = makeSquare(finalString)
//   var finalArray = []
//   var indexLocation = 0
//
//   square.forEach(function(element, index, array) {
//     var letters = element.split('')
//     var singleLetter = letters.shift();
//       array.push(singleLetter)
//   });
//
//   var row = finalArray[0]
//     return square








$(document).ready(function() {



});
