const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (value) {
    this.value = value;
    this.data = value;
    this.left  = null;
    this.right  = null;
 
  }
}
class BinarySearchTree {
  constructor () {
    this.Root = null;
   }
  

 
  root() {
    if(!this.Root) {
      return null
    } 
    return this.Root;
  }

  add(value) {
    this.Root = addNode (this.Root, value);

    function addNode (node, value) {
      if (!node) {
        return new Node (value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addNode (node.left, value);
      } else {
        node.right = addNode (node.right, value);
      }
      return node;
    }
  }

   has(value) {
      return searchNode (this.Root, value);

      function searchNode (node, value) {
        while (node) {
          if (node.value === value) {
            return true;
          }
  
          if (value < node.value) {
            node = node.left;
          } else {
            node = node.right;
          }
        }
        return false;
      }
  }

  find(value) {
    return findNodeValue (this.Root, value);

      function findNodeValue (node, value) {
        while (node) {
          if (node.value === value) {
            return node;
          }
    
          if (value < node.value) {
            node = node.left;
          } else {
           node = node.right;
          }
        }
        return null;
      }
  }

  remove(value) {
    this.Root = removeNode (this.Root, value);

    function removeNode (node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode (node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode (node.right, value);
        return node;
      } else {
        if (!node.right && !node.left){
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
      // find min in node.right
        let minRight = node.right;

        while(minRight.left) {
          minRight = minRight.left
        };

        node.value = minRight.value;
        
        node.right = removeNode (node.right, minRight.value);
        return node;

      }
    }
  }

  min() {
    if (!this.Root) {
      return null
    }

    let node = this.Root;
    while (node.left) {
      node = node.left
    }
    return node.value
  }

  max() {
    if (!this.Root) {
      return null
    }

    let node = this.Root;
    while (node.right) {
      node = node.right
    }
    return node.value
  }
  
  
}

module.exports = {
  BinarySearchTree
};