const DOMNodeCollection = require('./dom_node_collection.js');

window.addEventListener('DOMContentLoaded', e => {
  window.$l = (arg) => {
    // let array = Array.from(result);
    // return new DOMNodeCollection(array);
    
    if (arg instanceof HTMLElement) {
      console.log("We are inside instnace of html");
      let array = [arg];
      return new DOMNodeCollection(array);
    } else {
      console.log("Inside else condition of not html");
      const result = document.querySelectorAll(arg);
      let array = Array.from(result);
      return new DOMNodeCollection(array);
       
    }
    console.log(result);
  };

  console.log(
    $l('div').html("Hi from kee")

  );
  
  
  
  
  
});

