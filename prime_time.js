function prime(num) {
  var primeArr = [];
  var primeCheck = [];
  for(var i=0; i <= num; i++){
    for(var j=0; j<=i; j++){
      if(i%j === 0){
        primeCheck.push(j);
      }
    }
    if(primeCheck.length === 2){
      primeArr.push(i);
    }
    primeCheck = [];
  }
  return primeArr;
}