function Node(data) {
    this.data = data || null;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.lookup = function(data) {
    return this._lookup(this.root, data);
}

BinaryTree.prototype._lookup = function(node, data) {
    if (node == null) {
        return false;
    }
    else {
        if(node.data === data) {
            return true;
        }
        else if (node.data < data) {
            return this._lookup(node.left, data);
        }
        else {
            return this._lookup(node.right, data);
        }
    }
}

BinaryTree.prototype.insert = function(data) {
    this.root = this._insert(this.root, data);
    return this.root;
}

BinaryTree.prototype._insert = function(node, data) {
    if (node == null) {
        node = new Node(data);
    }
    else {
        if (node.data > data) {
            node.left = this._insert(node.left, data);
        }
        else {
            node.right = this._insert(node.right, data);
        }
    }
    return node;
}

BinaryTree.prototype.size = function(node = this.root) {
    if(node == null) {
        return 0;
    }
    else {
        return (this.size(node.left) + 1 + this.size(node.right));
    }
}

BinaryTree.prototype.maxDepth = function(node = this.root) {
    if (node == null) {
        return 0;
    }
    else {
        let leftLen = this.maxDepth(node.left);
        let rightLen = this.maxDepth(node.right);

        return Math.max(leftLen, rightLen) + 1;
    }
}

BinaryTree.prototype.minElement = function() {
    let node = this.root;
    while (node && node.left)
        node = node.left;
    return node.data;
}

BinaryTree.prototype.printTree = function(node = this.root) {
    if (node == null) 
        return;
    console.log(node.data);
    this.printTree(node.left);
    this.printTree(node.right);
}

BinaryTree.prototype.printPaths = function(node = this.root, path = [], pathLen = 0) {
    if (node == null)
        return;
    path[pathLen] = node.data;
    pathLen = pathLen + 1;

    if(!node.left && !node.right) {
        console.log(path);
        path = [];
    }
    else {
        this.printPaths(node.left, path, pathLen);
        this.printPaths(node.right, path, pathLen);
    }
}

BinaryTree.prototype.mirror = function(node = this.root) {
    if (node != null) {
        this.mirror(node.left);
        this.mirror(node.right);

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
}

BinaryTree.prototype.isBST = function(node = this.root, min = 0, max = 1000) {
    if(node == null)
        return true;
    if (node.data < min || node.data > max)
        return false;
    return (this.isBST(node.left, min, node.data) && this.isBST(node.right, node.data + 1, max));
}

BinaryTree.prototype.hasSum = function(sum, node = this.root) {
    if(node == null) {
        return (sum == 0);
    }
    else {
        sum = sum - node.data;
        return(this.hasSum(sum, node.left) || this.hasSum(sum, node.right));
    }
}