/*bfs uses a queue because we want to keep track of all the nodes we want to come back to
 even though we havent visited them yet.
 */

 // A node that we add to the queue is called a discovered node.

 const BinarySearchTree = require('./binarySearchTree');

 const tree = new BinarySearchTree();
 tree.add(4);
 tree.add(5);
 tree.add(20);
 tree.add(36);
 tree.add(3);

class BreadthFirstTraverser {
   traverse(rootNode) {
      // Check that a root node exists.
      if (rootNode === null) {
         return;
      }
      let arr = [];
      // Create our queue and push our root node into it.
      var queue = [];
      queue.push(rootNode);


      // Continue searching through as queue as long as it's not empty.
      while (queue.length > 0) {
         const currentNode = queue.shift()
         arr.push(currentNode.value)
         if (currentNode.left !== null) {
            queue.push(currentNode.left)
         }
         if (currentNode.right !== null) {
            queue.push(currentNode.right)
         }

      }
      return arr;
   }
}


const bft = new BreadthFirstTraverser();
console.log(bft.traverse(tree.root));
