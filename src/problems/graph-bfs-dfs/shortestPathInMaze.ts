// m x n binary grid, 0 = open, 1 = wall. Return the length (in cells, including start and end)
// of the shortest 4-directional path from (0,0) to (m-1,n-1). Return -1 if none exists.
// Input: [[0,0,0],[0,1,0],[0,0,0]] -> Output: 5
export function shortestPathInMaze(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  if (grid[0][0] !== 0 || grid[rows - 1][cols - 1] !== 0) {
    return -1;
  }

  const visited = new Set<string>(["0,0"]);
  let queue: [number, number][] = [[0, 0]];
  let dist = 1;

  while (queue.length > 0) {
    const nextQueue: [number, number][] = [];

    for (const [r, c] of queue) {
      if (r === rows - 1 && c === cols - 1) {
        return dist;
      }

      const neighbors: [number, number][] = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];

      for (const [nr, nc] of neighbors) {
        const key = `${nr},${nc}`;
        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          grid[nr][nc] === 0 &&
          !visited.has(key)
        ) {
          visited.add(key);
          nextQueue.push([nr, nc]);
        }
      }
    }

    queue = nextQueue;
    dist++;
  }

  return -1;
}
