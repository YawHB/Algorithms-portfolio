export class Stack {
    constructor() {
        this.tail = null;
    }

    push(data) {
        const newNode = new Node(data);
        if (this.tail != null) {
            newNode.next = this.tail;
            this.tail = newNode;
        } else {
            this.tail = newNode;
        }
    }

    pop() {
        const nodeToRemove = this.tail;
        if (this.tail != null) {
            this.tail = nodeToRemove.next;
            return nodeToRemove;
        }
    }

    peek() {
        return this.tail;
    }

    getSize() {
        let count = 0;
        let node = this.tail;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getIndex(index) {
        let count = 0;
        let node = this.tail;
        while (node) {
            if (index == count) {
                return node;
            }
            count++;
            node = node.next;
        }
        return count;
    }
}

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
