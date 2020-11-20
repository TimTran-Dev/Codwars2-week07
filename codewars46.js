const arr = N => {
  let newArr = []
  if(typeof N === "number"){
    for(let i = 0; i < N; i++){
      newArr.push(i)
    }
  }
  return newArr
}