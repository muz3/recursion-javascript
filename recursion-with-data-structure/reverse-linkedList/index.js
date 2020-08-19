//todo: Reverse Linked List

let LinkedList = require('./linkedList.js')

function helperFunction(myLinkedList, current, previous) { // This function reverses the linked list recursively
  // Base case
  if (current.next == null) {
    myLinkedList.head = current;
    current.next = previous;
    return;
  }

  // Recursive case
  helperFunction(myLinkedList, current.next, current);

  // next = current.next;
  current.next = previous;


}

function reverse(myLinkedList) {
  // Check if the head node of the linked list is null or not
  if (myLinkedList.head == null) {
    return;
  }

  // Call the helper function --> main recursive function
  helperFunction(myLinkedList, myLinkedList.head, null);
}

// Driver code
var list = new LinkedList();
list.appendNode(4);
list.appendNode(3);
list.appendNode(11);
list.appendNode(7);

console.log("Original Linked List:");
list.printList();

reverse(list);
console.log("\nReversed Linked List:");
list.printList();