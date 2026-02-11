class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Implement the insert method to add a new value to the binary tree
    }

    printInOrder() {
        // Implement the printInOrder method to print the values of the tree in order

        //Recursive call for left-subtree
        if (this.left) {
            this.left.printInOrder();
        }
        //print the value of the current node
        console.log(this.value, " ");

        //Recursive call for right-subtree
        if (this.right) {
            this.right.printInOrder();
        }
    }
}

const root = new TreeNode(10);
root.insert(5);
root.insert(15);


root.printInOrder();  // Output should be: 5, 10, 15 (in order)
