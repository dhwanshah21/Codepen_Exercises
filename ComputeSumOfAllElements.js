function ComputeSumOfAllElements(arr) {
  // your code here
  //Dhwan
 let result = arr.reduce((acc,elem)=>{
 acc = acc+elem;
  return acc;
},0);
  return result;
}


console.log(ComputeSumOfAllElements([]));
