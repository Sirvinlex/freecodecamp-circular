class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
    this.readCount = 0;
    this.writeCount = 0;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }
  moveWrite() {
    if (this.write === this.max){
      this.write = 0
      this.writeCount = this.writeCount + 1
    }else{
      this.write = this.write + 1
    }
  }
  moveRead() {
    if (this.read === this.max){
      this.read = 0
      this.readCount = this.readCount + 1
    }else{
      this.read = this.read + 1
    }
  }
  enqueue(item) {
    // Only change code below this line
    if((this.writeCount > this.readCount && this.write + 1 > this.read) || !item){
      console.log(null)
      return null
    }else{
      this.queue[this.write] = item
      this.moveWrite()
      console.log(this.queue, this.write, this.writeCount)
      return item
    }
    
    // Only change code above this line
  }

  dequeue() {
    if (this.writeCount === this.readCount && (this.read + 1 > this.write || this.queue[this.read] === null)){
      console.log(null)
      return null
    }else{
      this.moveRead()
    console.log(this.queue, this.read, this.readCount)
    return this.queue.splice(this.read - 1, 1, null)[0]
    }
     
    // Only change code above this line
  }
  
}

