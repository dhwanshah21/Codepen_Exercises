function getLongestElement(arr) {
  // your code here
  let ans;
arr.reduce((acc,element) =>{
    console.log("Acccumu...", acc);
    console.log("Element...", element);
    
  if (element.length>acc){
     acc=element.length;
     //return acc;
     ans = element;
  }
  return acc;
},0);
 
 return ans;
}

console.log(getLongestElement(['one','or','three']));