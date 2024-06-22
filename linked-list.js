/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head) {
      let last = this.head;
      if (last.next === null) {
        this.head = null;
        this.tail = null;
        this.length--;
        return last.val
      } else {
        while (last.next.next) {
          last = last.next;
        }
        let return_val = last.next.val
        this.tail = last;
        this.tail.next = null;
        this.length--;
        return return_val;
      }
    } else {
      return null;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head) {
      let first = this.head
      if (first.next === null) {
        this.tail = null
      }
      this.head = this.head.next;
      this.length--;
      return first.val
    } else {
      return null
    }    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let cur_node = this.head
    for (let i = 0; i < idx; i++) {
      cur_node = cur_node.next
    }
    return cur_node.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let cur_node = this.head
    for (let i = 0; i < idx; i++) {
      cur_node = cur_node.next
    }
    cur_node.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let new_node = new Node(val)
    if (!this.head) {
      this.head = new_node
      this.tail = new_node
      this.length++
    } else {
      let cur_node = this.head
      for (let i = 0; i < idx - 1; i++) {
        cur_node = cur_node.next
      }
      if (cur_node === this.tail) {
        this.tail = new_node
      }
      new_node.next = cur_node.next
      cur_node.next = new_node
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head) {
      return null
    }

    if (this.length === 1) {
      let return_val = this.head.val
      this.head = null
      this.tail = null
      this.length--
      return return_val
    }

    let cur_node = this.head
    for (let i = 0; i < idx - 1; i++) {
      cur_node = cur_node.next
    }
    let return_val = cur_node.next.val
    cur_node.next = cur_node.next.next
    this.length--
    return return_val
  }

  /** average(): return an average of all values in the list */

  average() {
    let count = 0
    let sum = 0
    if (this.length === 0) {
      return 0
    }
    let cur_node = this.head
    while (cur_node) {
      sum += cur_node.val
      count++
      cur_node = cur_node.next
    }
    return sum / count
  }
}

module.exports = LinkedList;
