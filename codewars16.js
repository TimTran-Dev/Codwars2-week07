Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'


function solution(str){
  let reverse = str.split("")
  let revArray = reverse.reverse()
  let joinArray = revArray.join("")
  return joinArray
}
