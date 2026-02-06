class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (node) {
            while (node.next) {
                node = node.next;
            }
        }

        return node;
    }

    // Add element to the top of stack
    push(data) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Remove element from the top of stack
    pop() {
        if (!this.head) return null;

        const poppedValue = this.head.data;
        this.head = this.head.next;
        return poppedValue;
    }

    // Remove element from the bottom of stack
    shift() {
        if (!this.head) return null;

        let pointer = this.head;
        if (!pointer.next) { // Only one element in stack
            const value = pointer.data;
            this.top = null;
            return value;
        }

        // Traverse to the second-to-last node
        while (pointer.next && pointer.next.next) {
            pointer = pointer.next;
        }

        const value = pointer.next.data;
        pointer.next = null;
        this.length--;
        return value;
    }

    // Add element at the bottom of stack
    unshift(data) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
        this.length++;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());  // Output: 3
console.log(stack.getFirst());  // Output: 30 (top of the stack)
console.log(stack.getLast());  // Output: 10 (bottom of the stack)

console.log(stack.pop());  // Output: 30 (removes top of stack)
console.log(stack.size());  // Output: 2

stack.unshift(5);  // Add to the bottom of the stack
console.log(stack.getLast());  // Output: 5 (new bottom)

console.log(stack.shift());  // Output: 5 (removes from bottom of stack)
console.log(stack.size());  // Output: 2

stack.clear();  // Clear the stack
console.log(stack.size());  // Output: 0