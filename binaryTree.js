import { Node } from './node.js';
  
export class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (!this.root) {
        this.root = new Node(value); // Set the root node
      } else {
        this._insertRecursive(this.root, value); // Recursively find the right place for the new node
      }
    }
  
    _insertRecursive(current, value) {
      if (value < current.value) {
        // If the value is less, go to the left
        if (!current.left) {
          current.left = new Node(value); // Insert as the left child if empty
        } else {
          this._insertRecursive(current.left, value); // Recursively insert into the left subtree
        }
      } else {
        // If the value is greater, go to the right
        if (!current.right) {
          current.right = new Node(value); // Insert as the right child if empty
        } else {
          this._insertRecursive(current.right, value); // Recursively insert into the right subtree
        }
      }
    }
  
  }

  export class BinaryTreeDrawNodes {
    drawTree(ctx, node, x, y, dx, dy) {
      if (node !== null) {
        // Draw node (circle)
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI); // Draw a circle for the node
        ctx.fillStyle = '#76c7c0'; // Node color
        ctx.fill();
        ctx.stroke();
  
        // Draw value inside the node
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(node.value, x - 8, y + 5); // Node value centered in the circle
  
        // Draw left child if exists
        if (node.left !== null) {
          ctx.beginPath();
          ctx.moveTo(x, y); // Line starts from the current node
          ctx.lineTo(x - dx, y + dy); // Line goes to the left child
          ctx.stroke();
          this.drawTree(ctx, node.left, x - dx, y + dy, dx / 2, dy); // Recursively draw the left subtree
        }
  
        // Draw right child if exists
        if (node.right !== null) {
          ctx.beginPath();
          ctx.moveTo(x, y); // Line starts from the current node
          ctx.lineTo(x + dx, y + dy); // Line goes to the right child
          ctx.stroke();
          this.drawTree(ctx, node.right, x + dx, y + dy, dx / 2, dy); // Recursively draw the right subtree
        }
      }
    }
  }

  export class BinaryTreeDrawStylized {
    drawTree(ctx, x, y, angle, scale, len, thickness, node, worble) {
      if (node === null) return; // If the node is empty, return
  
      const rando = Math.random() * 10 * (Math.PI / 180); // Randomize angle slightly
      const x1 = Math.floor(scale * len * Math.cos(angle));
      const y1 = Math.floor(scale * len * Math.sin(angle));
  
      // Draw the current branch (line)
      ctx.beginPath();
      ctx.strokeStyle = 'brown';
      ctx.lineWidth = thickness;
      ctx.moveTo(x, y);
      ctx.lineTo(x + x1, y - y1);
      ctx.stroke();
  
      // Draw the node (circle for leaves)
      if (len < 18) {
        ctx.beginPath();
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0,0,0,0.73)";
        ctx.fillStyle = 'green';
        ctx.arc(x + x1, y - y1, 6, 0, 2 * Math.PI); // Leaf node
        ctx.fill();
      }
  
      // Draw the value of the node if it's not too small
      if (len > 6) {
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(node.value, x + x1 - 8, y - y1 + 5); // Node value
      }
  
      // Stop recursion if the length is too short
      if (len < 6) return;
  
      // Recursively draw the left and right children with randomized angles
      this.drawTree(
        ctx,
        x + x1,
        y - y1,
        angle - worble + rando,
        scale,
        scale * len,
        0.7 * thickness,
        node.left,
        worble
      );
      this.drawTree(
        ctx,
        x + x1,
        y - y1,
        angle + worble + rando,
        scale,
        scale * len,
        0.7 * thickness,
        node.right,
        worble
      );
    }
  }
  