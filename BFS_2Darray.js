const TEST_MATRIX = [
    [1,   2,  3,  4,  5],
    [6,   7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
]

//BFS O/P: [1,2,6,3,7,11,4,8,12,16,5,9,13,17,10,14,18,15,19,20]
//Queue:[]

const direction=[
    [-1,0], //up
    [0,1],  //right
    [1,0],  //down
    [0,-1]  //left
]

const TraversalBFS = function(matrix){
    const seen= new Array(matrix.length).fill(0).map(()=> new Array(matrix[0].length).fill(false))
    const values=[];
    const queue=[];
    BFS(matrix,queue,seen,values,0,0)
    return values;
}

const BFS= function(matrix,queue,seen,values,row,col){
    if(row<0 || col <0 || row>=matrix.length || col >= matrix[0].length || seen[row][col]){
        return
    }
    seen[row][col]=true;
    for(i=0;i<direction.length;i++)
    {
      const dir=direction[i];
      queue.push(matrix[row+dir[0]][col+dir[1]]);  
    }
    
    
}
