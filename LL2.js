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
