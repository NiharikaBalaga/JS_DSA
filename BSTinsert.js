class Node{
    constructor(value){
      this.value=value;
      this.left=null;
      this.right=null;
    }
  }
  
  class BST{
    constructor(){
      this.root=null;
    }
  
    insert(value){
      const newNode = new Node(value);
      if(!this.root){
        this.root=newNode;
        return
      }
      else{
     let current=this.root;
     while(true){
  
       if(value<current.value){
         if(!current.left){
           current.left=newNode;
           return
         }
         else{
         current=current.left
         }
       }
  
       else if(value>current.value){
         if(!current.right){
           current.right=newNode;
           return
         }
         else{
         current=current.right
         }
       }
      }
     }
    }
    contains(value) {
        let current = this.root;
        while (current) {
           if (value === current.value) {
              return true;
           };
           current = value < current.value ? current.left : current.right;
        }
        return false;
     };
  }
  
  const myBST= new BST();
  myBST.insert(50)
  myBST.insert(45)
  myBST.insert(47)
  myBST.insert(100)
  myBST.contains(47)
  console.log(myBST)
  console.log(  myBST.contains(47))
  console.log(  myBST.contains(57))
 