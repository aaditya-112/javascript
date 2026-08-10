function reverseString(s, k) {
  let pointer1 = 0;
  let pointer2 = k;
  let result = [];
//   let pointerx = 0;
  for (let i = 0; i < s.length; i + k) {
    if (i == pointer1) {
      let kElements = s.slice(pointer1, pointer2);

      result.push(kElements.split('').reverse().join(''));
      pointer1 = pointer1 + (k * k);
      pointer2 = pointer2 + (k * k);
    }
    else{
        let kElement = s.slice(i,pointer1)
        result.push(kElement);
    }
  }
  return result;
}
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
console.log(reverseString("abcdefghij",2))

// let str = "abcd"

// console.log(str.split('').reverse().join(''))

 

