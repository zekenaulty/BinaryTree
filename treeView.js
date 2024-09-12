import { Node } from "./node";
import { BinaryTree, BinaryTreeDrawNodes } from "./BinaryTree";


// Create a binary tree and insert nodes
const tree = new BinaryTree();

// Create the draw logic for node view
const drawNode = new BinaryTreeDrawNodes();

      // Initialize canvas
      const canvas = document.getElementById('binaryTreeCanvas');
      const ctx = canvas.getContext('2d');

      // Root node
      tree.insert(16); // The root of the tree, will be at the top, centered

      // Level 1
      tree.insert(8); // Left child of root, appears to the left
      tree.insert(24); // Right child of root, appears to the right

      // Level 2
      tree.insert(4); // Left child of node 8
      tree.insert(12); // Right child of node 8
      tree.insert(20); // Left child of node 24
      tree.insert(28); // Right child of node 24

      // Level 3
      tree.insert(2); // Left child of node 4
      tree.insert(6); // Right child of node 4
      tree.insert(10); // Left child of node 12
      tree.insert(14); // Right child of node 12
      tree.insert(18); // Left child of node 20
      tree.insert(22); // Right child of node 20
      tree.insert(26); // Left child of node 28
      tree.insert(30); // Right child of node 28

      // Level 4
      tree.insert(1); // Left child of node 2
      tree.insert(3); // Right child of node 2
      tree.insert(5); // Left child of node 6
      tree.insert(7); // Right child of node 6
      tree.insert(9); // Left child of node 10
      tree.insert(11); // Right child of node 10
      tree.insert(13); // Left child of node 14
      tree.insert(15); // Right child of node 14
      tree.insert(17); // Left child of node 18
      tree.insert(19); // Right child of node 18
      tree.insert(21); // Left child of node 22
      tree.insert(23); // Right child of node 22
      tree.insert(25); // Left child of node 26
      tree.insert(27); // Right child of node 26
      tree.insert(29); // Left child of node 30
      tree.insert(31); // Right child of node 30

      // Draw the binary tree with canvas, starting at (600, 50), with horizontal and vertical spacing
      drawNode.drawTree(ctx, tree.root, canvas.width / 2, 50, 250, 80);