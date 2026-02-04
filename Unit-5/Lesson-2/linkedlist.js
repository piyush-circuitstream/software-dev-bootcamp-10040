class LinkedList {
    constructor(head = null) {
        this.head = head;
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

    getNthNode(n) {
        let count = 0;
        let node = this.head;

        while (node && count !== n) {
            count++;
            node = node.next;
        }

        return node;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);


node1.next = node2;
node2.next = node3;

const linkedlist = new LinkedList(node1);

console.log(linkedlist);
console.log("Size of linked list:", linkedlist.size());
linkedlist.clear();
console.log("Linked list after clearing:", linkedlist.size());
