function getAverage(marks){
//   let avg = marks
  var grade = 0;
  for(var i = 0; i < marks.length; i++) {
  grade+=marks[i]
}
  
  var getGrade = (grade / marks.length);
  return Math.floor(getGrade)
  console.log(getGrade)
}