class ListNode {
  constructor(key, value){
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity){
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.cache = {};
    this.capacity = capacity;
    this.size = 0;
  }

  get(key){
    if (this.cache[key]){
      this.moveToHead(this.cache[key]);
      return this.cache[key].val;
    } else {
      return -1;
    }
  }

  put(key,value){
    let node = this.cache[key];
    if (!node){
      this.cache[key] = new ListNode(key,value);
      this.attachToHead(this.cache[key]);
      this.size++;
    } else {
      this.cache[key].val = value;
      this.moveToHead(node);
    }
    if (this.size > this.capacity){
      this.removeLast();
      this.size--;
    }
  }

  attachToHead(node){
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  moveToHead(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.attachToHead(node);
  }

  removeLast(){
    let last = this.tail.prev;
    last.prev.next = this.tail;
    this.tail.prev = last.prev;
    delete(this.cache[last.key]);
  }
}


["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

let testCache = new LRUCache(2);
console.log(testCache.put(1,1));
console.log(testCache.put(2,2));
console.log(testCache);
console.log(testCache.get(1));
// console.log(testCache.put(3,3));
// console.log(testCache.get(2));
// console.log(testCache.put(4,4));
// console.log(testCache.get(1));
// console.log(testCache.get(3));
// console.log(testCache.get(4));
