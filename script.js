

function LinkedList (){
    let length = 0
    let head = null
   
   this.size = function() {
    return length
   }
   this.head = function(){
    return head
   }

   let Node = function(value){
    this.value = value
    this.next = null
   }

   this.append = function(value) {
    const node = new Node(value);
    if(head === null){
        head = node
    } else {
        const currentNode = head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = node
    }
    length++
   }
   this.remove = function(value) {
    let currentNode = head
    let previousNode
    if(currentNode.value === value) {
        head = currentNode.next
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
    }
    length--
   }

//    this.prepend = function(value) {
//     const node = new Node(value);
//     if(head === null) {
//         head = node
//     } else {

//     }
//    }

}





