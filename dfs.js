const BinarySearchTree = require('./binarySearchTree');

// pre-order -> root, left, right
// in-order -> left, root, right
// post-order -> left, right, root

class DepthFirstTraverser {

    constructor(){
      this.traverseMethod = 'pre-order';
    }

    setTraverseMethod(traverseMethod){
      if(traverseMethod === 'pre-order' || traverseMethod === 'in-order' || traverseMethod === 'post-order') {
        this.traverseMethod = traverseMethod;
      } else {
        console.error('Not a valid search method, must be "pre-order", "in-order" or "post-order"');
      }
    }

    getTraverseMethod(){
      return this.traverseMethod;
    }

    traverse(value, array){
      switch(this.traverseMethod) {
        case 'pre-order':
          return this.preOrderTraverse(value, array);
        case 'in-order':
          return this.inOrderTraverse(value, array);
        case 'post-order':
          return this.postOrderTraverse(value, array);
        default:
          console.error('invalid traverse method');
      }
    }

    preOrderTraverse(node, array) {

        // Check that a node exists.
        if (!node) {
            return array;
        }

        // Print the data of the node.
        array.push(node.value);

        this.preOrderTraverse(node.left, array);
        this.preOrderTraverse(node.right, array);
        return array;

    }

    inOrderTraverse(node, array){
        if (!node) {
            return array;
        }

        array = this.inOrderTraverse(node.left, array);
        array.push(node.value)
        array = this.inOrderTraverse(node.right, array);
        return array

    }

    postOrderTraverse(node, array){
        if (!node) {
            return array;
        }
        array = this.postOrderTraverse(node.left, array);
        array = this.postOrderTraverse(node.right, array);
        array.push(node.value);
        return array
    }
  }
  const tree = new BinarySearchTree();
  tree.add(4);
  tree.add(5);
  tree.add(20);
  tree.add(36);
  tree.add(3);


  const dftPre = new DepthFirstTraverser();

  const dft_in_order = new DepthFirstTraverser();
  dft_in_order.setTraverseMethod('in-order');

  const dftPost = new DepthFirstTraverser();
  dftPost.setTraverseMethod('post-order');


  console.log(dft_in_order.traverse(tree.root, []));
  console.log(dftPre.traverse(tree.root, []));
  console.log(dftPost.traverse(tree.root, []));