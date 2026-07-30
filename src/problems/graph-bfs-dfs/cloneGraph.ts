// LC 133 — Clone Graph.
// Given a reference node in a connected undirected graph, return a deep copy
// (clone) of the entire graph.
export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val: number = 0, neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  throw new Error("not implemented");
}
