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
        // to be implemented
    }

    // Remove element from the top of stack
    pop() {
        // to be implemented
    }

    // Remove element from the bottom of stack
    shift() {
        // to be implemented
    }

    // Add element at the bottom of stack
    unshift(data) {
        // to be implemented
    }
}