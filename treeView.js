import { Node } from "./node.js";
import { BinaryTree, BinaryTreeDrawNodes } from "./binaryTree.js";

// Create a binary tree and insert nodes
const tree = new BinaryTree();
const drawNode = new BinaryTreeDrawNodes();

// Initialize canvas and context
const canvas = document.getElementById('binaryTreeCanvas');
const ctx = canvas.getContext('2d');

// Wobble factor for randomness in stylized tree
const worble = Math.PI / 8;
const scale = 0.82;
const len = 100;
const thickness = 4;

// Resize canvas dynamically based on container
function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Default function to draw the binary tree with nodes
function drawNodes() {
  clearCanvas();
  drawNode.drawTree(ctx, tree.root, canvas.width / 2, 50, canvas.width / 4, 80);
}

// Function to draw the stylized binary tree
function drawStylizedTree() {
  clearCanvas();
  drawNode.drawBinaryTreeStylized(ctx, 320, 500, Math.PI / 2, scale, len, thickness, tree.root, worble);
}

// Add event listeners to buttons
document.getElementById('drawNodesBtn').addEventListener('click', drawNodes);
document.getElementById('drawStylizedBtn').addEventListener('click', drawStylizedTree);

// Insert nodes into the binary tree
tree.insert(16); // Root node
tree.insert(8);  // Left child of root
tree.insert(24); // Right child of root
tree.insert(4);
tree.insert(12);
tree.insert(20);
tree.insert(28);
// Continue to level 4...
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(14);
tree.insert(18);
tree.insert(22);
tree.insert(26);
tree.insert(30);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(9);
tree.insert(11);
tree.insert(13);
tree.insert(15);
tree.insert(17);
tree.insert(19);
tree.insert(21);
tree.insert(23);
tree.insert(25);
tree.insert(27);
tree.insert(29);
tree.insert(31);

// Initial setup to resize canvas and draw nodes by default
resizeCanvas();
drawNodes(); // Default is to draw the nodes

// Redraw tree on canvas resize
window.addEventListener('resize', () => {
  resizeCanvas();
  drawNodes(); // Redraw default tree on resize
});
