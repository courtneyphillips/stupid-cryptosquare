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
  var letterArray = []

  var letters = removeSpace(newString)
  var rowLength = findSquare(letters)
  var sliceBegin = 0
  var sliceEnd = rowLength

  for (var i = 0; i < rowLength; i++){
    var row = letters.slice(sliceBegin, sliceEnd)
    letterArray.push(row)
    sliceBegin += rowLength
    sliceEnd += rowLength
  }
  
  return letterArray
}


$(document).ready(function() {



});
