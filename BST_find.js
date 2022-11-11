class BT{

contains(value) {
  let vertex = this.root;
  while (vertex) {
     if (value === vertex.value) {
        return true;
     }
     else{
       if(value<vertex.value){
        vertex=vertex.left;
       }
       else if(value>vertex.value){
        vertex=vertex.right;
       }
     }
 }
  return false;
}
}





// =========================================
// let map=[];
//       let currentNode = this.root;
//     //   console.log(currentNode.value)
//       while (true) {
//          if (final === currentNode.value) {
//              map.push(city);
//             //  console.log(map)
//             return map;
//          }
//          else{
//          map.push(currentNode);
//          currentNode = final < currentNode.value ? currentNode.left : currentNode.right;         
//          }
//       }
    //   console.log(map)
