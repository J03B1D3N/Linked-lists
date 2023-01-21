

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
}





