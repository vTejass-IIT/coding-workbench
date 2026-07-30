// LC 427 — Construct Quad Tree.
// grid is n x n of 0s and 1s (n a power of 2). Recursively build a quad tree: a leaf
// node when the region is uniform, otherwise an internal node split into four equal
// quadrants (topLeft, topRight, bottomLeft, bottomRight).
export class QuadNode {
  val: boolean;
  isLeaf: boolean;
  topLeft: QuadNode | null;
  topRight: QuadNode | null;
  bottomLeft: QuadNode | null;
  bottomRight: QuadNode | null;

  constructor(
    val: boolean,
    isLeaf: boolean,
    topLeft: QuadNode | null = null,
    topRight: QuadNode | null = null,
    bottomLeft: QuadNode | null = null,
    bottomRight: QuadNode | null = null
  ) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

export function construct(grid: number[][]): QuadNode {
  throw new Error("not implemented");
}
