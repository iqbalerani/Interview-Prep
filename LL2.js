const LinkedList = require('./LinkedList');
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }
  
    remove(value) {
      if (this.head === null) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  
    forEach(callback) {
      let currentNode = this.head;
      while (currentNode !== null) {
        callback(currentNode);
        currentNode = currentNode.next;
      }
    }
  }   
// Create a new linked list
const myList = new LinkedList();

// Add some nodes to the list
myList.add("1");
myList.add("2");
myList.add("3");

// Iterate through the nodes in the list
myList.forEach(node => {
  console.log(node.value); // 1, 2, 3
});

// Remove a node from the list
myList.remove(1);

// Iterate through the nodes in the list again
myList.forEach(node => {
  console.log(node.value); // 2, 3
});

