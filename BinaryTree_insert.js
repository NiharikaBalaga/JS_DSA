class BSTNode {
    constructor(value) {            //creating parent node
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;               // empty node
    }
  
    insert(value) {
      const newNode = new BSTNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      } else {
        let vertex = this.root;
        while (true) {
          if (value > vertex.value) {
            // Go right
            if (!vertex.right) {
              // Right is empty - this is the place to insert the value
              vertex.right = newNode;
              return;
            } else vertex = vertex.right;
          } else if (value < vertex.value) {
            // Go Left
            if (!vertex.left) {
              vertex.left = newNode;
              return;
            } else {
              vertex = vertex.left;
            }
          }
        }
      }
    }
    //find(value) {}
    contains(value) {
      let vertex = this.root;
      while (vertex) {
         if (value === vertex.value) {
            return 'Found';
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
      return 'Not Found';
   };
   
  }
  
  const myBST = new BST();
  myBST.insert(33);
  myBST.insert(57);
  myBST.insert(50);
  myBST.insert(150);
  myBST.insert(80);
  myBST.insert(60);
  myBST.insert(76);
  // myBST.contains(57);
  //myBST.find(33);
  console.log(myBST);
  // console.log(myBST.contains(60))
  // console.log(myBST.contains(150))

// ==================================================================================


