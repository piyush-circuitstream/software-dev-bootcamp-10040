class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // if value < current node, put it on left-subtree, otherwise right-subtree
        if (value < this.value) {
            if (this.left == null) {
                this.left = new TreeNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right == null) {
                this.right = new TreeNode(value);
            } else {
                this.right.insert(value);
            }
        }

    }

    printInOrder() {

        //Recursive call for left-subtree
        if (this.left !== null) {
            this.left.printInOrder();
        }
        //print the value of the current node
        console.log(this.value, " ");

        //Recursive call for right-subtree
        if (this.right !== null) {
            this.right.printInOrder();
        }
    }
}

const root = new TreeNode(10);
root.insert(5);
root.insert(15);
root.insert(3);
root.insert(12);
root.insert(13);
root.insert(18);


root.printInOrder();  // Output should be: 5, 10, 15 (in order)
