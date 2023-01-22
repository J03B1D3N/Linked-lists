

function LinkedList (){
    let length = 0
    let head = null
    let tail = null
   
   this.size = function() {
    return length
   }
   this.head = function(){
    return head
   }
   this.tail = function() {
    return tail;
   }

   let Node = function(value){
    this.value = value
    this.next = null
   }

   this.append = function(value) {
    const node = new Node(value);
    if(head === null){
        head = node
    }
    if(tail === null){
        tail = node
    }
     else {
        let currentNode = head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = node
        tail = node
    }
    length++
   }

   this.prepend = function(value) {
    const node = new Node(value);
    if(head === null) {
        head = node
    }
    if(tail === null){
        tail = node
    }
    else
    {
        let currentNode = head
        head = node
        head.next = currentNode
    }
    length++;
   }

   this.remove = function(value) {
    let currentNode = head
    let previousNode
    if(currentNode.value === value) {
        head = currentNode.next
    } else {
        while(currentNode.value !== value) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
    }
    length--
   }
   this.pop = function() {
    let currentNode = head
    let previousNode
    if(length == 0) {
        return "nothing to pop, list is empty"
    } else {
        while(currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
        tail = previousNode
    }
    length--
   }

   this.find = function(value) {
    let currentNode = head
    let index = -1
    while(currentNode) {
        index++;
        if(currentNode.value === value) {
            return index
        }
        currentNode = currentNode.next
    }
    return -1
   }

   this.at = function(index) {
    let currentNode = head;
    let count = 0;
    while(count < index){
        count++
        currentNode = currentNode.next
    }
    return currentNode.value
   }

   this.addAt = function(index, value) {
    const node = new Node(value);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if(index > length) return false
    if(index === 0) {
        node.next = currentNode
        head = node
    } else {
        while(currentIndex < index) {
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++
   }
   this.removeAt = function(index){
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if(index < 0 || index >= length){
        return null
    }
    if(index === 0) {
        head = currentNode.next
    } else {
        while(currentIndex < index) {
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next
        } 
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.value
   }
   this.toString = function(){
    let string = ""
    let currentNode = head
    if(length == 0 ) return "Nothing to print, list is empty"
    else {
        while(currentNode.next){
            string += "(" + currentNode.value +")" + " => "
            currentNode = currentNode.next
        }
    }
    return string +=  "(" + tail.value +")" + " => null"
   }
}

const conga = new LinkedList();

conga.append('George')
conga.append('Cat')
conga.append('Dog')
conga.append('Bird')
conga.append('Pigeon')
conga.prepend('Edvardas')

console.log(conga.size())
console.log(conga.head())
console.log(conga.tail())
console.log(conga.toString())



