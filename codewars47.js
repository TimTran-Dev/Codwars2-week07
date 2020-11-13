function isVow(a){
  let arrayWithVowels = [];
  for(let i=0; i<a.length; i++){
    if(a[i] === 97){
      arrayWithVowels.push('a');
    }
    else if(a[i] === 101){
      arrayWithVowels.push('e');
    }
    else if(a[i] === 105){
      arrayWithVowels.push('i');
    }
    else if(a[i] === 111){
      arrayWithVowels.push('o');
    }
    else if(a[i] === 117){
      arrayWithVowels.push('u');
    }else{
      arrayWithVowels.push(a[i])
    }
  }
  return arrayWithVowels;
}
