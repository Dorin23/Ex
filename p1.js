function WordSplit(strArr) {
    var sequence = strArr[0];
    var dictionary = strArr[1].split(',');
  
    for (var i = 1; i < sequence.length; i++) {
      var word1 = sequence.substring(0, i);
      var word2 = sequence.substring(i);
  
      if (dictionary.includes(word1) && dictionary.includes(word2)) {
        return word1 + ',' + word2;
      }
    }
  
    return 'not possible';
  }
  
  // Exemplu de utilizare:
  console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
  