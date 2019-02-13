function findShortestElement(arr) {
    // your code here
    console.log(arr);
    let ans;
   arr.reduce ((acc,element) => {
    
     if(element.length<acc){
       acc=element.length;
       ans=element;
     }
     else if(acc===arr[0].length){
       ans=arr[0];
     }
     // else ans= arr[0];
     return acc;
   },arr[0].length);
    
    return ans ;
  }
  