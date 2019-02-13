const myobj={
    dummy : [1,2,3,4,5,6,6,7]
};

function getProductOfAllElementsAtProperty(obj,key) {
  // your code here
if (!obj[key] || obj[key].length===0 || !Array.isArray(obj[key])){
  return 0;
}
  let result = obj[key].reduce((acc,element)=>{
    acc = acc * element;
    return acc;
  },1);
  return result;
}


console.log(getProductOfAllElementsAtProperty(myobj,'dummy')); // Make sure you write key in quotes