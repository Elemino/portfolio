function LinkedList() {
    this.head = null;
};

LinkedList.prototype.add = (value) => {
    let node = {
        value: value,
        next: null
    };
    let current;

    if(this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    return node;
    };
