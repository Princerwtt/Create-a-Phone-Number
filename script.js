function createphoneno(num){

  let num1=num.slice(0,3).join("");

  let num2=num.slice(3,6).join("");

  let num3=num.slice(6,10).join("");

  let number=" ("+num1+") "+num2+ "-" +num3;

  return(number);

}

console.log(createphoneno([1,2,3,4,5,6,7,8,9,0]));