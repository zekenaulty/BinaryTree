import { BinaryTree, BinaryTreeDrawNodes, BinaryTreeDrawStylized } from "./src/binaryTree.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootswatch/dist/darkly/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

// Create a binary tree and insert nodes
const tree = new BinaryTree();
const drawNode = new BinaryTreeDrawNodes();
const drawStyle = new BinaryTreeDrawStylized();

const canvasA = document.getElementById('binaryTreeCanvasA');
const canvasB = document.getElementById('binaryTreeCanvasB');
const ctxA = canvasA.getContext('2d');
const ctxB = canvasB.getContext('2d');

const worble = Math.PI / 8;
const scale = 0.82;
const len = 100;
const thickness = 4;

function resizeCanvas() {
  canvasA.width = canvasA.parentElement.clientWidth;
  canvasA.height = canvasA.parentElement.clientHeight;
  canvasB.width = canvasB.parentElement.clientWidth;
  canvasB.height = canvasB.parentElement.clientHeight;
}

function clearCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawNodes() {
  clearCanvas(ctxA, canvasA);
  drawNode.drawTree(ctxA, tree.root, canvasA.width / 2, 50, canvasA.width / 4, 80);
}

function drawStylizedTree() {
  clearCanvas(ctxB, canvasB);
  drawStyle.drawTree(ctxB, 320, 500, Math.PI / 2, scale, len, thickness, tree.root, worble);
}

document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((tabButton) => {
  tabButton.addEventListener('shown.bs.tab', (event) => {
    const targetId = event.target.getAttribute('data-bs-target');
    if (targetId === '#nodes') {
      resizeCanvas(ctxA, canvasA);
      drawNodes();
    } else if (targetId === '#stylized') {
      resizeCanvas(ctxB, canvasB);
      drawStylizedTree();
    }
  });
});

tree.insert(16);
tree.insert(8);
tree.insert(24);
tree.insert(4);
tree.insert(12);
tree.insert(20);
tree.insert(28);
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

resizeCanvas();
window.addEventListener('resize', () => {
  if (document.getElementById('nodes-tab').classList.contains('active')) {
    resizeCanvas(canvasA);
    drawNodes();
  } else if (document.getElementById('stylized-tab').classList.contains('active')) {
    resizeCanvas(canvasB);
    drawStylizedTree();
  }
});
