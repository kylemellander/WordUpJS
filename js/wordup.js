function wordUp(phrase){
  var words = [];
  var wordArray = phrase.replace(/[^\w\s]/g, "").toLowerCase().split(" ");

  wordArray.forEach(function(word) {
    var found = false;
    for(var i=0; i < words.length; ++i) {
      if (words[i].word === word) {
        found = true;
      }
    }
    if (found === false) {
      var count = countWords(wordArray, word);
      words.push({word: word, count: count});
    }
  });

  function compare(a,b) {
    return b.count - a.count;
  }

  words.sort(compare);

  return words;
};

function countWords(wordArray, word) {
  var count = 0;
  for(var i = 0; i < wordArray.length; ++i) {
    if (wordArray[i] === word) {
      count += 1;
    }
  }
  return count;
}

function displayWordUp(words) {
  var result = "<ul>";
  for(var i = 0; i < words.length; ++i) {
    result += "<li>" + words[i].word + " - " + words[i].count + "</li>";
  }
  result += "</ul>";
  return result;
}
