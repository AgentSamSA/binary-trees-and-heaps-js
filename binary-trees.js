// implementation of a binary search tree in JavaScript

// class for tree nodes

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// class for binary search tree

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	// helper to create new node, calls insertNode
	insert(data) {
		let newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	// insert a node into the tree
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	// remove helper to call removeNode with given data
	remove(data) {
		this.root = this.removeNode(this.root, data);
	}
	// remove a node from the tree with the given data
	removeNode(node, key) {
		if (node === null) {
			return null;
		} else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.right;
				return node;
			}
			let aux = this.findMinNode(node.right);
			node.data = aux.data;
			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}
	// performs inorder traversal of a tree
	inorder(node) {
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	// performs preorder traversal
	preorder(node) {
		if (node !== null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	// performs postorder traversal
	postorder(node) {
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}

	}
	// finds node in tree with minimum value, starting from specified node
	findMinNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}
	// returns root node of the tree
	getRootNode() {
		return this.root;
	}
	// searches the tree for node with value data
	search(node, data) {
		if (node === null) {
			return null;
		} else if (data < node.data) {
			return this.search(node.left, data);
		} else if (data > node.data) {
			return this.search(node.right, data);
		} else {
			return node;
		}
	}
}