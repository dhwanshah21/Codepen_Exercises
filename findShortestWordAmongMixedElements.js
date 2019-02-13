function findShortestWordAmongMixedElements(arr) {
  // your code here
  let temp=[];
  let ans;
  arr.filter(element => {
      if (typeof element == typeof "d"){
          temp.push(element);
      }
  });
  console.log (temp);
  temp.reduce ((acc,element)=> {
    //  console.log ("Acc",acc);
      //console.log ("Elem",element);
      if (element.length<acc){
          acc=element.length;
          ans = element;
        }
      return acc;
  },temp[0].length);
   if (ans == undefined){
       ans = temp[0];
   }

  return ans ;

}





var output = findShortestWordAmongMixedElements([3, "p", "word", 5, "up", 3, 1,"Dhwan", "o"]);
console.log(output); // --> 'two'