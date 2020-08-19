let Node = require('./node.js')
class LinkedList {

  // constrictor
  constructor() {
    this.head = null;
  }

  // function for appending a new node in the linked list
  appendNode(newData) {
    let newNode = new Node(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    var last = this.head;
    while (last.next != null) {
      last = last.next;
    }
    last.next = newNode;
  }

  //function for printing the linked list
  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
module.exports = LinkedList;