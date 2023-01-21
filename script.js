

function LinkedList (){
    let length = 0
    let head = null
   
   this.size = function() {
    return length
   }
   this.head = function(){
    return head
   }

   let Node = function(element){
    this.element = element
    this.next = null
   }

   this.add = function(element) {
    const node = new Node(element);
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
   

}





