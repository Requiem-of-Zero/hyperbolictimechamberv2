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

