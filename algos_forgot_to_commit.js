// Linked Lists

// Sum Lists

const sumList = (head) => {
  // todo
  let sum = 0, current = head;
  
  while(current !== null){
    sum += current.val
    current = current.next
  }
  
  return sum
};

// Linked List Find (Find a Node in a Linked List)

const linkedListFind = (head, target) => {
  // todo
  let current = head;
  
  while(current !== null){
    if(current.val === target) return true
    current = current.next
  }
  return false
};

// Get Value of Node

const getNodeValue = (head, index) => {
  // todo
  let current = head;
  
  for(let i=0; i < index; i++){
    if(current.next === null) return null
    current = current.next
  }
  
  return current.val;
};

// Reverse Linked List 

const reverseList = (head) => {
  // todo
  let current = head, prev = null
  
  while(current){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next
  }
  
  return prev
};

// Zipper Lists (Alternating Nodes)

const zipperLists = (head1, head2) => {
  // todo
  const head = head1;
  let tail = head;
  let curr1 = head1.next, curr2 = head2, count = 0; 
  while(curr1 && curr2){
    if(count % 2 === 0){
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count++
  }
  
  if(curr1 !== null) tail.next = curr1;
  if(curr2 !== null) tail.next = curr2;
  
  return head;
};

// Merge Lists (Sorted Nodes Asc)

const mergeLists = (head1, head2) => {
  // todo
  let returnList = new Node(), tail = returnList;
  
  while(head1 !== null && head2 !== null){
    if(head1.val > head2.val){
      tail.next = head2;
      head2 = head2.next
    } else {
      tail.next = head1;
      head1 = head1.next
    }
    tail = tail.next
  }
  
  if(head1 !== null) tail.next = head1;
  if(head2 !== null) tail.next = head2;
  
  return returnList.next
};

// Uni Value Linked List 

const isUnivalueList = (head) => {
  // todo
  let valSet = new Set();
  
  while(head){
    valSet.add(head.val)
    head = head.next
  }
  
  return valSet.size === 1
};

// Longest Linked List Streak

const longestStreak = (head) => {
  // todo
  let current = head, maxStreak = 0, currStreak = 1, prev;
  
  while(current){
    if(current.val === prev){
      currStreak++
    } else {
      currStreak = 1
    }
    prev = current.val;
    maxStreak = Math.max(currStreak, maxStreak)
    current = current.next
  }
  
  return maxStreak;
};

// Remove Node from Linked List

const removeNode = (head, targetVal) => {
  // todo
  if(head.val === targetVal) return head.next
  
  let dummyHead = head, tail = head;
  
  while(tail.next && tail.next.val !== targetVal){
    tail = tail.next
  }
  
  if(tail.next){
    tail.next = tail.next.next;
  }

  return dummyHead
};

// Insert Node

const insertNode = (head, value, index) => {
  // todo
  let current = head, count = 0, insert = new Node(value);
  
  if(index === 0){
    insert.next = current;
    return insert
  }
  
  while(current){
    if(count === index - 1){
      let next = current.next
      current.next = insert
      current.next.next = next;
    }
    count++
    current = current.next;
  }
  
  return head;
};

// Create Linked List from array

const createLinkedList = (values) => {
  // todo
  let dummyHead = new Node(), tail = dummyHead;
  let current = 0;

  while(current !== values.length){
    let currNode = new Node(values[current])
    tail.next = currNode;
    tail = tail.next;
    current++
  }
  
  return dummyHead.next;
};

// Add Lists
/*
input:
  1 -> 2 -> 6
  4 -> 5 -> 3
Output:
  5 -> 7 -> 9
Example:
  621 + 354 = 975 => 5 -> 7 -> 9
*/ 

const addLists = (head1, head2) => {
  // todo
  let curr1 = head1, curr2 = head2;
  let num1 = [] , num2 = [], sum = 0;
  let dummyHead = new Node(), tail = dummyHead;
  
  while(curr1){
    num1.unshift(curr1.val)
    curr1 = curr1.next;
  };
  
  while(curr2){
    num2.unshift(curr2.val)
    curr2 = curr2.next;
  }
  
  sum = (+num1.join('') + +num2.join('')).toString();
  
  for(let i=sum.length-1; i >= 0; i--){
    let insert = new Node(sum[i])
    tail.next = insert;
    tail = tail.next
  }
  
  return dummyHead.next
};

// Binary Search Tree

// BFS Values

const depthFirstValues = (root) => {
  // todo
  
  if(!root) return [];
  
  const stack = [root], result = [];

  while(stack.length){
    let curr = stack.pop();

    result.push(curr.val)
    
    if(curr.right) stack.push(curr.right)
    if(curr.left) stack.push(curr.left)
  }
  
  return result;
};

// DFS Values

const breadthFirstValues = (root) => {
  // todo
  if(!root) return [];
  
  const queue = [ root ], result = [];
  
  while(queue.length){
    let currNode = queue.pop();
    
    result.push(currNode.val);
    
    if(currNode.left) queue.unshift(currNode.left)
    if(currNode.right) queue.unshift(currNode.right)
  }
  
  return result;
};

// Tree Sum

const treeSum = (root) => {
  // todo
  if(!root) return 0;
  
  const queue = [root]
  let result = 0;
  
  while(queue.length){
    let currNode = queue.pop();
    
    result += currNode.val
    
    if(currNode.left) queue.unshift(currNode.left);
    if(currNode.right) queue.unshift(currNode.right);
  }
  
  return result;
};

// Tree Includes

const treeIncludes = (root, target) => {
  // todo
  if(!root) return false;
  
  const stack = [root];
  
  while(stack.length){
    let curr = stack.pop();
    
    if(curr.val === target) return true;
    
    if(curr.left) stack.push(curr.left);
    if(curr.right) stack.push(curr.right);
  }
  
  return false;
};

// Tree Min Val

const treeMinValue = (root) => {
  // todo
  const stack = [ root ];
  
  let min = Infinity;
  
  while(stack.length){
    let curr = stack.pop();
    
    min = Math.min(curr.val, min);
    
    if(curr.left) stack.push(curr.left);
    if(curr.right) stack.push(curr.right)
  }
  
  return min;
};

// Max Path Sum

const maxPathSum = (root) => {
  // todo
  if(!root) return -Infinity
  if(!root.left && !root.right) return root.val
  const max = Math.max(maxPathSum(root.left),maxPathSum(root.right))
  return root.val + max
};

// Path Finder in BST

const pathFinder = (root, target) => {
  // todo
  if(!root) return null
  if(root.val === target) return [target];
  if(!root.left && !root.right) return null;
  const left = pathFinder(root.left, target),
        right = pathFinder(root.right, target);
  if(left !== null){
    left.unshift(root.val);
    return left
  }
  if(right !== null){
    right.unshift(root.val);
    return right;
  }
  return null
};

// Tree Value Count

const treeValueCount = (root, target) => {
  // todo
  if(!root) return 0;
  
  let count = 0;
  const stack = [root];
  
  while(stack.length){
    let curr = stack.pop();
    
    if(curr.val === target) count++
    
    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right)
  }
  
  return count;
};

// BST Depth or Height
// Recursive

const howHigh = (node) => {
  // todo
  if(!node) return -1;
  const left = howHigh(node.left), 
        right = howHigh(node.right)
  return Math.max(left, right) + 1
};

// Bottom Right Value of BST

const bottomRightValue = (root) => {
  // todo
  const queue = [root];
  let lastEle;
  
  while(queue.length){
    let curr = queue.shift();
    lastEle = curr.val;
    if(curr.left) queue.push(curr.left)
    if(curr.right) queue.push(curr.right)
  }
  
  return lastEle
};

// All Paths of BST

const allTreePaths = (root) => {
  // todo
  if(!root){
    return [[]]
  }
  
  if(!root.left && !root.right) return [[root.val]]
  
  let currVal = root.val
  
  let left = allTreePaths(root.left)
  left = left.filter(path => path.length > 0)
  
  for(let i=0; i < left.length; i++){
    let arr = left[i];
    arr.unshift(currVal)
  };
  
  let right = allTreePaths(root.right)
  right = right.filter(path => path.length >= 1)
  
  for(let i=0; i < right.length; i++){
    let arr = right[i];
    arr.unshift(currVal)
  };
  
  return left.concat(right);
};

// Tree Levels in BST

const treeLevels = (root) => {
  // todo
  if(!root) return []
  
  const queue = [root], result = [];
  
//   queue.length 1
//   length 1
//   queue [root]
  
  while(queue.length){
    let newArr = [], length = queue.length
    
    for(let i=0; i < length; i++){
      let shifted = queue.shift()
      
      newArr.push(shifted.val)
      
      if(shifted.left) queue.push(shifted.left)
      if(shifted.right) queue.push(shifted.right)
      // result.push(newArr)
    }
    result.push(newArr)
  }
  return result
  // return result;
};

// Level Averages

const levelAverages = (root) => {
  // todo
  if(!root) return []
  
  let result = [];
  const queue = [root];
  
  while(queue.length){
    let length = queue.length, sum = 0;
    
    for(let i=0; i < length; i++){
      let curr = queue.shift();
      
      sum += +curr.val
      
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    result.push(sum/length)
  }
  
  return result;
};

// Leaf List Recursive

const leafList = (root) => {
  // todo
  if(!root) return [];
  if(!root.left && !root.right) return [root.val];
  const left = leafList(root.left), 
        right = leafList(root.right)
  return left.concat(right)
};

// Graph Problems

// Has Path

const hasPath = (graph, src, dst) => {
  // todo
  const stack = [ src ], seen = new Set();
  
  while(stack.length){
    let curr = stack.pop();
    
    seen.add(curr)
    
    for(let neighbor of graph[curr]){
      stack.push(neighbor)
    }
    if(seen.has(dst))
      return true;
  }
  return false;
};

// Undirected Path

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createAdj(edges);
  return hasPath(graph, nodeA, nodeB, new Set())
};

const hasPath = (graph, src, dst, visited) => {
  if(src === dst) return true;
  if(visited.has(src)) return false;
  
  visited.add(src);
  
  for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst, visited) === true){
      return true;
    }
  }
  return false;
}

const createAdj = (edges) => {
  const hash = {};
  
  for(const edge of edges){
    let [e1, e2] = edge
    
    if(!(e1 in hash)) hash[e1] = new Set();
    if(!(e2 in hash)) hash[e2] = new Set();
    hash[e1].add(e2);
    hash[e2].add(e1);
  }
  
  return hash
}

// Connected Components Count

const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let count = 0;
  
  for(let node in graph){
    if(explore(graph, node, visited) === true)
      count += 1
  }
  return count;
};

const explore = (graph, curr, visited) => {
  if(visited.has(curr.toString())) return false;
  
  visited.add(curr.toString())
  
  for(let neighbor of graph[curr]){
    explore(graph, neighbor, visited)
  }
  
  return true;
}

// Largest Component

const largestComponent = (graph) => {
  // todo
  let largest = 0;
  
  for(const node in graph){
    const size = explore(graph, node, new Set());
    if(size > largest) largest = size
  }
  
  return largest;
};

const explore = (graph, curr, visited) => {
  if(visited.has(curr)) return 0;
  
  visited.add(curr)
  
  let size = 1;
  
  for(const neighbor of graph[curr]){
    size += explore(graph, neighbor, visited)
  }
  
  return size;
}

// Shortest Path

const shortestPath = (edges, nodeA, nodeB) => {
  let graph = createAdj(edges), visited = new Set([nodeA, 0]), queue = [[nodeA, 0]];
  
  while(queue.length){
    let [curr, distance] = queue.shift();
    
    if(curr === nodeB) return distance;
    
    for(let neighbor of graph[curr]){
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        queue.push([neighbor, distance + 1]) //ask why distance++ doesnt work
      }
    }
  }
  
  return -1
};

const createAdj = (edges) => {
  let graph = {};
  
  for(const edge of edges){
    let [a, b] = edge;
    
    if(graph[a] === undefined) graph[a] = [];
    if(graph[b] === undefined) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph
}

// Minimum size island

const minimumIsland = (grid) => {
  let visited = new Set(), minimum = Infinity;
  // todo
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[0].length; col++){
      const size = explore(grid, row, col, visited)
      if(size > 0 && size < minimum)
        minimum = size
    }
  }
  return minimum
};

const explore = (grid, row, col, visited) => {
  const rowInBound = 0 <= row && row < grid.length;
  const colInBound = 0 <= col && col < grid[0].length;
  if(!rowInBound || !colInBound) return 0;
  
  if(grid[row][col] === 'W') return 0;
  
  let pos = row + ',' + col
  
  if(visited.has(pos)) return 0;
  visited.add(pos);
  
  let size = 1;
  
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);
  
  return size
}

// Closest Carrot

const closestCarrot = (grid, startRow, startCol) => {
  // todo
  let visited = new Set([startRow + ',' + startCol]), 
      shortest = Infinity, 
      queue = [[startRow, startCol, 0]];
  
  while(queue.length){
    let curr = queue.shift(),
        [currRow, currCol, distance] = curr;
    
    if(grid[currRow][currCol] === 'C') return distance
      
    const moves = [[1,0], [-1,0], [0,1], [0,-1]];
    
    for(const move of moves){
      let [rowChange, colChange] = move;
      let rowMove = currRow + rowChange;
      let colMove = currCol + colChange;
      let pos = rowMove + ',' + colMove;
      let rowInbound = 0 <= rowMove && rowMove < grid.length;
      let colInbound = 0 <= colMove && colMove < grid[0].length;
      if(rowInbound && colInbound && grid[rowMove][colMove] !== 'X' && !visited.has(pos)){
        visited.add(pos)
        queue.push([rowMove, colMove, distance + 1])
      }
    }
  }
  return -1;
};

// Longest Path

const longestPath = (graph) => {
  // todo
  let distance = {}
  
  for(let node in graph){
    let curr = graph[node];
    if(curr.length === 0){
      distance[node] = 0;
    }
  }
  
  for(let node in graph){
    traverseDistance(graph, node, distance);
  }
  return Math.max(...Object.values(distance))
}

  const traverseDistance = (graph, node, distance) => {
    if(node in distance) return distance[node];
    let maxLen = 0;
    for(let neighbor of graph[node]){
      const attempt = traverseDistance(graph, neighbor, distance);
      if(attempt > maxLen) maxLen = attempt
    }
    distance[node] = 1 + maxLen;
    return distance[node];
  };

  