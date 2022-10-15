const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.first  = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.first
  }

  enqueue(element) {
    if(this.first) {
      let current = this.first;
      while(current.next) {
        current=current.next;
      }
      current.next = new ListNode(element);
    } else {
      this.first = new ListNode(element);
    }
    this.size++;
  }

  dequeue() {
    let current = this.first;
    this.first = current.next; 
    this.size--;
    
    return current.value;
    }

  }


module.exports = {
  Queue
};
