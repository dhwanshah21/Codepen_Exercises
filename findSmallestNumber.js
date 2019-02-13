function findSmallestElement(arr) {
    // your code here
  // var result= arr.reduce((acc,element)=>{
  //   if(element<acc){
  //     acc=element;
  //   }
  //   return acc;
  // },arr[0]);
  //   return result;
    
    let result = Math.min(...arr);
    return result;
  }

  var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
