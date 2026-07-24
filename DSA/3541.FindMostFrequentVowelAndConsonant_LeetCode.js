function FindMaxVowelAndConsonant(s) {
    if(s.length<1) return 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let objVowels = {};
  let objConsonant = {};

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (objVowels[s[i]]) {
        objVowels[s[i]]++;
      } else {
        objVowels[s[i]] = 1;
      }
    } else {
      if (objConsonant[s[i]]) {
        objConsonant[s[i]]++;
      } else {
        objConsonant[s[i]] = 1;
      }
    }
  }
  let maxVowel;
  let maxConsonant;
  if (Object.keys(objConsonant).length > 0) {
    if (Object.keys(objVowels).length > 0) {
      maxVowel = Math.max(...Object.values(objVowels));
      maxConsonant = Math.max(...Object.values(objConsonant));
      return maxVowel + maxConsonant;
    } else {
      maxConsonant = Math.max(...Object.values(objConsonant));
      return maxConsonant;
    }
  } else if (Object.keys(objVowels).length > 0) {
    maxVowel = Math.max(...Object.values(objVowels));
    return maxVowel;
  }
}
console.log(FindMaxVowelAndConsonant("aeiaeia"));

// Input: s = "successes"
// Output: 6
