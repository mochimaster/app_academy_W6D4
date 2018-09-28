class DOMNodeCollection {
  constructor(arr) {  
    this.arr = arr;
  }
  
  html(str) {
    
    if(str){
      this.arr.forEach(node => {
        node.innerHTML = str;
      });
    } else {
      return this.arr[0].innerHTML;
    }
    
  }
  
  empty(){
    this.arr.forEach(node => {
      node.innerHTML = "";
    });
  }
  
  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      console.log('inside domnode collection');
      let result = this.innerHTML;
      
      this.arr.forEach(node =>{
        arg.arr.forEach(outerNode => {
          node.innerHTML = node.innerHTML + outerNode.innerHTML;
          
        });
      });
    } else if (arg instanceof HTMLElement) {
      let result = this.innerHTML;
      this.innerHTML = result + arg;
    } else {
      let result = this.innerHTML;
      this.innerHTML = result + arg;
    }
  }
  
  children() {
    let result = [];
  
    this.arr.forEach(node => {
      // result.push(node.children);
      let children = Array.from(node.children);
      
      children.forEach(childNode => {
        result.push(childNode);
      });
      
    });
  
    return new DOMNodeCollection(result);
  }
}

module.exports = DOMNodeCollection;