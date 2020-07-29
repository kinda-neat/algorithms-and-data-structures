const performance = require("../performance");
const range = require("../range");

function validAnagram(str, anagram) {
  if (str.length !== anagram.length) {
    return false;
  }

  const strArray = Array.from(str);
  const anagramArray = Array.from(anagram);

  const strLetterToFrequencyMap = mkElementToFrequencyMap(strArray);
  const anagramLetterToFrequencyMap = mkElementToFrequencyMap(anagramArray);

  return !strArray.some(
    (l) => strLetterToFrequencyMap[l] !== anagramLetterToFrequencyMap[l]
  );
}

function mkLetterToFrequencyMap(arr) {
  return arr.reduce((acc, l) => {
    const letterCount = acc[l];
    return {
      ...acc,
      [l]: letterCount ? letterCount + 1 : 1,
    };
  }, {});
}

function mkElementToFrequencyMap(arr) {
  return arr.reduce((acc, n) => {
    if (n in acc) {
      acc[n] += 1;
    } else {
      acc[n] = 1;
    }
    return acc;
  }, {});
} 

performance(() =>
  validAnagram(range(0, 1000000).join(), range(0, 1000000).join())
); // using mkLetterToFrequencyMap - time elapsed: 25.453 seconds. using mkElementToFrequencyMap - time elapsed: 0.979 seconds.
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
