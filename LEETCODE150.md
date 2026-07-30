# Top Interview 150 — Core Software Engineering Patterns

Source: https://leetcode.com/studyplan/top-interview-150/

The problem index for this repo, reframed from company-specific interview cramming into the
underlying patterns that show up in day-to-day engineering work — caching layers, parsers,
schedulers, dependency graphs, search/autocomplete, and data pipelines all reduce to one of
these. Every problem below has a matching stub + test suite under `src/problems/`; check a box
locally as you solve one — this file ships unchecked so you start from a clean slate.

---

## Arrays & Strings
In-place data manipulation and text processing — the bread and butter of parsing configs,
transforming API payloads, and cleaning up batch data.

- [ ] [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)
- [ ] [Remove Element](https://leetcode.com/problems/remove-element/description/)
- [ ] [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
- [ ] [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
- [ ] [Majority Element](https://leetcode.com/problems/majority-element/description/)
- [ ] [Rotate Array](https://leetcode.com/problems/rotate-array/description/)
- [ ] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
- [ ] [Jump Game](https://leetcode.com/problems/jump-game/description/)
- [ ] [Jump Game II](https://leetcode.com/problems/jump-game-ii/description/)
- [ ] [H-Index](https://leetcode.com/problems/h-index/description/)
- [ ] [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/description/)
- [ ] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)
- [ ] [Gas Station](https://leetcode.com/problems/gas-station/description/)
- [ ] [Candy](https://leetcode.com/problems/candy/description/)
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)
- [ ] [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)
- [ ] [Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)
- [ ] [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)
- [ ] [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)
- [ ] [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/)
- [ ] [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)
- [ ] [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)
- [ ] [Text Justification](https://leetcode.com/problems/text-justification/description/)

## Two Pointers
Efficient in-place scanning without extra memory — merge logic, deduplication, and
convergent search over sorted/ordered data.

- [ ] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)
- [ ] [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)
- [ ] [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)
- [ ] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)
- [ ] [3Sum](https://leetcode.com/problems/3sum/description/)

## Sliding Window
Bounded-range analysis over sequential data — rate limiting, log/metrics windowing,
network buffering, and streaming aggregation.

- [ ] [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [ ] [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/)
- [ ] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)

## Matrix / Grid Processing
2D data manipulation — image/pixel data, spreadsheets, spatial simulations, game boards.

- [ ] [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)
- [ ] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)
- [ ] [Rotate Image](https://leetcode.com/problems/rotate-image/description/)
- [ ] [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/)
- [ ] [Game of Life](https://leetcode.com/problems/game-of-life/description/)

## Hash Maps
O(1) lookup structures — caching, deduplication, frequency counting, indexing. Used in
nearly every service layer.

- [ ] [Ransom Note](https://leetcode.com/problems/ransom-note/description/)
- [ ] [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)
- [ ] [Word Pattern](https://leetcode.com/problems/word-pattern/description/)
- [ ] [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)
- [ ] [Two Sum](https://leetcode.com/problems/two-sum/description/)
- [ ] [Happy Number](https://leetcode.com/problems/happy-number/description/)
- [ ] [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

## Intervals
Scheduling and range logic — calendar overlap, resource allocation, merging time
windows. Extremely common in backend systems (booking, billing, availability).

- [ ] [Summary Ranges](https://leetcode.com/problems/summary-ranges/description/)
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)
- [ ] [Insert Interval](https://leetcode.com/problems/insert-interval/description/)
- [ ] [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/)

## Stacks
LIFO structures for parsing, expression evaluation, undo/redo, and path normalization —
`simplify-path` is literally how a shell resolves `cd ..`.

- [ ] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)
- [ ] [Simplify Path](https://leetcode.com/problems/simplify-path/description/)
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/description/)
- [ ] [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)
- [ ] [Basic Calculator](https://leetcode.com/problems/basic-calculator/description/)

## Linked Lists
Low-level, memory-safe pointer manipulation — foundational for cache implementations
(LRU), iterator protocols, and any system that models an ordered chain of nodes.

- [ ] [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)
- [ ] [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)
- [ ] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description/)
- [ ] [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)
- [ ] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- [ ] [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)
- [ ] [Rotate List](https://leetcode.com/problems/rotate-list/description/)
- [ ] [Partition List](https://leetcode.com/problems/partition-list/description/)
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/description/)
- [ ] [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

## Binary Trees — General
Hierarchical data modeling — file systems, ASTs/compilers, UI component trees,
serialization formats.

- [ ] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)
- [ ] [Same Tree](https://leetcode.com/problems/same-tree/description/)
- [ ] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/description/)
- [ ] [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)
- [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)
- [ ] [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)
- [ ] [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)
- [ ] [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)
- [ ] [Path Sum](https://leetcode.com/problems/path-sum/description/)
- [ ] [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
- [ ] [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/description/)
- [ ] [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/description/)
- [ ] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

## Binary Trees — BFS
Level-order traversal — rendering UI trees breadth-first, org-chart/hierarchy views,
shortest-path-in-unweighted-hierarchy problems.

- [ ] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)
- [ ] [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)
- [ ] [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)

## Binary Search Trees
Ordered tree invariants — the logic behind database indexes and any sorted, mutable
lookup structure.

- [ ] [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

## Graphs — General
Dependency resolution, network routing, and connectivity — build systems, package
managers, social graphs, and infrastructure topology all live here.

- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
- [ ] [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)
- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/description/)
- [ ] [Evaluate Division](https://leetcode.com/problems/evaluate-division/description/)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/description/)
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/)

## Graphs — BFS
Shortest-path search over unweighted graphs — used in routing, state-space search, and
"minimum steps between states" problems (config migrations, game AI, protocol retries).

- [ ] [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/description/)
- [ ] [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/description/)
- [ ] [Word Ladder](https://leetcode.com/problems/word-ladder/description/)

## Trie
Prefix trees — autocomplete, spell-check, IP routing tables, and search-engine indexing.

- [ ] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/description/)
- [ ] [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/description/)
- [ ] [Word Search II](https://leetcode.com/problems/word-search-ii/description/)

## Backtracking
Constraint satisfaction and combinatorial search — config/permutation generation,
puzzle solvers, and any "try, fail, undo" exploration.

- [ ] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)
- [ ] [Combinations](https://leetcode.com/problems/combinations/description/)
- [ ] [Permutations](https://leetcode.com/problems/permutations/description/)
- [ ] [Combination Sum](https://leetcode.com/problems/combination-sum/description/)
- [ ] [N-Queens II](https://leetcode.com/problems/n-queens-ii/description/)
- [ ] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)
- [ ] [Word Search](https://leetcode.com/problems/word-search/)

## Divide & Conquer
Recursive decomposition — parallelizable algorithms, external/merge sort strategies,
and distributed-computation-style problem splitting.

- [ ] [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)
- [ ] [Sort List](https://leetcode.com/problems/sort-list/description/)
- [ ] [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/description/)
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)

## Kadane's Algorithm / Greedy
Running-optimum tracking — streaming max/min, resource allocation, and local-choice
optimization problems.

- [ ] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)
- [ ] [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/description/)

## Binary Search
Search over sorted/monotonic space — log-time lookups, version bisecting, and API
range/threshold queries.

- [ ] [Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)
- [ ] [Find Peak Element](https://leetcode.com/problems/find-peak-element/description/)
- [ ] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)
- [ ] [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)
- [ ] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)
- [ ] [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

## Heap / Priority Queue
Ordered-by-priority structures — task schedulers, load balancers, top-k queries, and
Dijkstra-style pathfinding.

- [ ] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)
- [ ] [IPO](https://leetcode.com/problems/ipo/description/)
- [ ] [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/)
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/description/)

## Bit Manipulation
Low-level flag/permission bitmasking — systems and embedded programming, and any
space-constrained encoding.

- [ ] [Add Binary](https://leetcode.com/problems/add-binary/description/)
- [ ] [Reverse Bits](https://leetcode.com/problems/reverse-bits/description/)
- [ ] [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/description/)
- [ ] [Single Number](https://leetcode.com/problems/single-number/description/)
- [ ] [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/description/)
- [ ] [Single Number II](https://leetcode.com/problems/single-number-ii/description/)

## Math
Numeric edge-case handling and precision — common in financial and scientific software
where off-by-one or overflow bugs are costly.

- [ ] [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)
- [ ] [Plus One](https://leetcode.com/problems/plus-one/description/)
- [ ] [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/description/)
- [ ] [Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)
- [ ] [Pow(x, n)](https://leetcode.com/problems/powx-n/description/)

## Dynamic Programming — 1D
Optimization under constraints via memoized subproblems — resource allocation,
sequence scoring, and cost-minimization over a linear state space.

- [ ] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)
- [ ] [House Robber](https://leetcode.com/problems/house-robber/description/)
- [ ] [Word Break](https://leetcode.com/problems/word-break/description/)
- [ ] [Coin Change](https://leetcode.com/problems/coin-change/description/)
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/description/)

## Dynamic Programming — 2D
The same optimization pattern over a 2D state space — diff/merge tools (edit distance),
pathfinding with cost, and multi-constraint scheduling.

- [ ] [Triangle](https://leetcode.com/problems/triangle/description/)
- [ ] [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)
- [ ] [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/description/)
- [ ] [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/)
- [ ] [Interleaving String](https://leetcode.com/problems/interleaving-string/description/)
- [ ] [Edit Distance](https://leetcode.com/problems/edit-distance/description/)
- [ ] [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/) — [walkthrough](https://www.youtube.com/watch?v=1zxgH-YVBbw)
- [ ] [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/)
- [ ] [Maximal Square](https://leetcode.com/problems/maximal-square/description/)
