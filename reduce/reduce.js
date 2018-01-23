
function countWords(inputWords) {
  let t =  inputWords.reduce(function (s,x) {
    if (x in s) {
      s[x] = s[x] + 1;
    }
    else {
      s[x] = 1;
    }
    return s;
  },{});
  return t;
}

module.exports = countWords
