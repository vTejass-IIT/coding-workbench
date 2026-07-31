# coding-workbench

[![Typecheck](https://github.com/vTejass-IIT/coding-workbench/actions/workflows/typecheck.yml/badge.svg)](https://github.com/vTejass-IIT/coding-workbench/actions/workflows/typecheck.yml)

A local practice workbench for interview-style coding problems: ~150 problems in TypeScript,
organized by algorithmic pattern (not just by LeetCode number), each with a pre-written
[Vitest](https://vitest.dev/) test suite. Clone it, pick a problem, implement the function,
run its test — no LeetCode account, no browser IDE.

Every problem ships as an unsolved stub (`throw new Error("not implemented")`) with a short
comment describing the problem and a worked example above the signature. The tests are the
answer key: get them green and you're done.

## Why pattern-organized

Problems are grouped by the technique they exercise — two pointers, sliding window, monotonic
stack, backtracking, and so on — rather than by difficulty or source list. The idea (borrowed
from ["Top Interview 150"](https://leetcode.com/studyplan/top-interview-150/), see
[`LEETCODE150.md`](./LEETCODE150.md) for the full curated index) is that recognizing the
pattern is most of the battle in a live interview.

## Getting started

```bash
npm install

# Run the full suite
npm test

# Run one problem's test in watch mode while you work on it
npx vitest src/problems/hashmap/containsDuplicate.test.ts

# Scratch space: tsx watches src/scratch.ts, good for sketching before you commit to a file
npm run dev
```

Open any file under `src/problems/`, replace the `throw new Error("not implemented")` body
with your solution, and re-run its test file. `noUnusedLocals`/`noUnusedParameters` are off in
`tsconfig.json` so partial attempts don't fight the compiler while you're iterating.

## Layout

```
src/problems/
  arrays-strings/       in-place array & string manipulation
  two-pointers/          convergent scanning over sorted/ordered data
  sliding-window/        bounded-range scans over sequences
  matrix/                2D grid processing
  hashmap/                O(1) lookup structures
  intervals/              range/scheduling logic
  stack/                  LIFO parsing & evaluation
  monotonic-stack/        stack-based next-greater/area problems
  linked-list/            pointer manipulation
  binary-tree-general/    tree traversal & construction
  tree-bfs/               level-order traversal
  bst/                    binary search tree invariants
  graph-bfs-dfs/          connectivity & shortest paths
  trie/                   prefix trees
  backtracking/           constraint search / combinatorics
  divide-and-conquer/     recursive decomposition
  dp/                     dynamic programming (1D & 2D)
  binary-search/          search over sorted/monotonic space
  heap/                   priority-queue problems
  bit-manipulation/       bitmasking
  math/                   numeric edge cases
  oop/                    object-oriented design problems
```

Each category has a matching `<problem>.ts` (implement this) and `<problem>.test.ts` (run
this). Shared fixtures like `TreeNode`/`ListNode` builders live alongside the problems that
need them (e.g. `src/problems/linked-list/listNode.ts`).

See [`LEETCODE150.md`](./LEETCODE150.md) for the full problem list grouped by pattern, with
links back to the original LeetCode prompts.

## Stack

TypeScript, [Vitest](https://vitest.dev/) for tests, [tsx](https://github.com/privatenumber/tsx)
for running/watching `.ts` files directly — no build step needed.

## License

MIT — see [`LICENSE`](./LICENSE).
