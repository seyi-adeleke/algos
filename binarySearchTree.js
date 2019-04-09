class BinarySearchTree {
    constructor(){
      this.root = null;
    }

    // add a node to the tree
    add(value){
      let newNode = { value, left: null, right: null};

      // set the root if we don't have one
      if(this.root === null){
        this.root = newNode;
        return;
      }

      let current = this.root;

      while(true){
        // check for right
        if(value > current.value){
          // add right
          if(!current.right){ current.right = newNode; break; }

          current = current.right;

        // check for left
        } else if(value < current.value){
          // add left
          if(!current.left){ current.left = newNode; break; }

          current = current.left;
        } else {
          // if it's the same ignore
          break;
        }
      }
    }

    // search for a specific value
    contains(value){
      let current = this.root;

      while(current){
        if(current.value == value){
          return true;
        } else if (current.value > value){
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return false;
    }
  }



  module.exports = BinarySearchTree;