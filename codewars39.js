// function reverseVowels(s) {
//   const LEN = s.length;
//   const str = [...s];
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const rev = [];
//   for (let i = 0; i < LEN; i++) {
//     if (vowels.includes(s[i])) {
//       rev.push(s[i]);
//     }
//   }
//   for (let i = 0; i < LEN; i++) {
//     if (vowels.includes(str[i])) {
//       str[i] = rev.pop();
//     }
//   }
//   return str.join("");
// }
