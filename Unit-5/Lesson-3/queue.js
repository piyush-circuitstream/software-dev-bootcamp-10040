class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    size() {
        return this.size;
    }

    clear() {
        this.front = null;
        this.rear = null;
        this.size = 0;
        console.log("Queue is cleared!");
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (this.rear === null) {
            // If the queue is empty, both front and rear will point to the new node
            this.front = this.rear = newNode;
        } else {
            // Otherwise, add it to the end of the queue
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty");
            return null;
        }

        const dequeuedData = this.front.data;
        this.front = this.front.next;

        // If the queue becomes empty, set rear to null as well
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return dequeuedData;
    }
}

const queue = new Queue();

// Enqueue values to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size);

console.log(queue.dequeue());    // Output: 10 (removes the front element)
console.log(queue.size);

queue.clear();                  // Clears the queue
console.log(queue.isEmpty());    // Output: true (queue is empty)