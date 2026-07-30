# Top Interview 150 — Core Software Engineering Patterns

Source: https://leetcode.com/studyplan/top-interview-150/

Reframed from company-specific interview cramming into the underlying patterns that show up
in day-to-day engineering work — caching layers, parsers, schedulers, dependency graphs,
search/autocomplete, and data pipelines all reduce to one of these.

---

## Arrays & Strings
In-place data manipulation and text processing — the bread and butter of parsing configs,
transforming API payloads, and cleaning up batch data.

- [x] [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)
- [x] [Remove Element](https://leetcode.com/problems/remove-element/description/)
- [x] [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
- [x] [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
- [x] [Majority Element](https://leetcode.com/problems/majority-element/description/)
- [x] [Rotate Array](https://leetcode.com/problems/rotate-array/description/)
- [x] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
- [x] [Jump Game](https://leetcode.com/problems/jump-game/description/)
- [x] [Jump Game II](https://leetcode.com/problems/jump-game-ii/description/)
- [x] [H-Index](https://leetcode.com/problems/h-index/description/)
- [x] [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/description/)
- [x] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)
- [x] [Gas Station](https://leetcode.com/problems/gas-station/description/)
- [x] [Candy](https://leetcode.com/problems/candy/description/)
- [x] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)
- [x] [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)
- [x] [Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)
- [x] [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)
- [x] [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)
- [x] [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/)
- [x] [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)
- [x] [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)
- [x] [Text Justification](https://leetcode.com/problems/text-justification/description/)

## Two Pointers
Efficient in-place scanning without extra memory — merge logic, deduplication, and
convergent search over sorted/ordered data.

- [x] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)
- [x] [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)
- [x] [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)
- [x] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)
- [x] [3Sum](https://leetcode.com/problems/3sum/description/)

## Sliding Window
Bounded-range analysis over sequential data — rate limiting, log/metrics windowing,
network buffering, and streaming aggregation.

- [x] [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
- [x] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [x] [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/)
- [x] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)

## Matrix / Grid Processing
2D data manipulation — image/pixel data, spreadsheets, spatial simulations, game boards.

- [x] [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)
- [x] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)
- [x] [Rotate Image](https://leetcode.com/problems/rotate-image/description/)
- [x] [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/)
- [x] [Game of Life](https://leetcode.com/problems/game-of-life/description/)

## Hash Maps
O(1) lookup structures — caching, deduplication, frequency counting, indexing. Used in
nearly every service layer.

- [x] [Ransom Note](https://leetcode.com/problems/ransom-note/description/)
- [x] [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)
- [x] [Word Pattern](https://leetcode.com/problems/word-pattern/description/)
- [x] [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)
- [x] [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)
- [x] [Two Sum](https://leetcode.com/problems/two-sum/description/)
- [x] [Happy Number](https://leetcode.com/problems/happy-number/description/)
- [x] [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)
- [x] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

## Intervals
Scheduling and range logic — calendar overlap, resource allocation, merging time
windows. Extremely common in backend systems (booking, billing, availability).

- [x] [Summary Ranges](https://leetcode.com/problems/summary-ranges/description/)
- [x] [Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)
- [x] [Insert Interval](https://leetcode.com/problems/insert-interval/description/)
- [x] [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/)

## Stacks
LIFO structures for parsing, expression evaluation, undo/redo, and path normalization —
`simplify-path` is literally how a shell resolves `cd ..`.

- [x] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)
- [x] [Simplify Path](https://leetcode.com/problems/simplify-path/description/)
- [x] [Min Stack](https://leetcode.com/problems/min-stack/description/)
- [x] [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)
- [x] [Basic Calculator](https://leetcode.com/problems/basic-calculator/description/)

## Linked Lists
Low-level, memory-safe pointer manipulation — foundational for cache implementations
(LRU), iterator protocols, and any system that models an ordered chain of nodes.

- [x] [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)
- [x] [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)
- [x] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description/)
- [x] [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)
- [x] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
- [x] [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)
- [x] [Rotate List](https://leetcode.com/problems/rotate-list/description/)
- [x] [Partition List](https://leetcode.com/problems/partition-list/description/)
- [x] [LRU Cache](https://leetcode.com/problems/lru-cache/description/)
- [x] [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

## Binary Trees — General
Hierarchical data modeling — file systems, ASTs/compilers, UI component trees,
serialization formats.

- [x] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)
- [x] [Same Tree](https://leetcode.com/problems/same-tree/description/)
- [x] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/description/)
- [x] [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)
- [x] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)
- [x] [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)
- [x] [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)
- [x] [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)
- [x] [Path Sum](https://leetcode.com/problems/path-sum/description/)
- [x] [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)
- [x] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
- [x] [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/description/)
- [x] [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/description/)
- [x] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

## Binary Trees — BFS
Level-order traversal — rendering UI trees breadth-first, org-chart/hierarchy views,
shortest-path-in-unweighted-hierarchy problems.

- [x] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)
- [x] [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)
- [x] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)
- [x] [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)

## Binary Search Trees
Ordered tree invariants — the logic behind database indexes and any sorted, mutable
lookup structure.

- [x] [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)
- [x] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)
- [x] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

## Graphs — General
Dependency resolution, network routing, and connectivity — build systems, package
managers, social graphs, and infrastructure topology all live here.

- [x] [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
- [x] [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)
- [x] [Clone Graph](https://leetcode.com/problems/clone-graph/description/)
- [x] [Evaluate Division](https://leetcode.com/problems/evaluate-division/description/)
- [x] [Course Schedule](https://leetcode.com/problems/course-schedule/description/)
- [x] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/)

## Graphs — BFS
Shortest-path search over unweighted graphs — used in routing, state-space search, and
"minimum steps between states" problems (config migrations, game AI, protocol retries).

- [x] [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/description/)
- [x] [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/description/)
- [x] [Word Ladder](https://leetcode.com/problems/word-ladder/description/)

## Trie
Prefix trees — autocomplete, spell-check, IP routing tables, and search-engine indexing.

- [x] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/description/)
- [x] [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/description/)
- [x] [Word Search II](https://leetcode.com/problems/word-search-ii/description/)

## Backtracking
Constraint satisfaction and combinatorial search — config/permutation generation,
puzzle solvers, and any "try, fail, undo" exploration.

- [x] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)
- [x] [Combinations](https://leetcode.com/problems/combinations/description/)
- [x] [Permutations](https://leetcode.com/problems/permutations/description/)
- [x] [Combination Sum](https://leetcode.com/problems/combination-sum/description/)
- [x] [N-Queens II](https://leetcode.com/problems/n-queens-ii/description/)
- [x] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)
- [x] [Word Search](https://leetcode.com/problems/word-search/)

## Divide & Conquer
Recursive decomposition — parallelizable algorithms, external/merge sort strategies,
and distributed-computation-style problem splitting.

- [x] [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)
- [x] [Sort List](https://leetcode.com/problems/sort-list/description/)
- [x] [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/description/)
- [x] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)

## Kadane's Algorithm / Greedy
Running-optimum tracking — streaming max/min, resource allocation, and local-choice
optimization problems.

- [x] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)
- [x] [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/description/)

## Binary Search
Search over sorted/monotonic space — log-time lookups, version bisecting, and API
range/threshold queries.

- [x] [Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)
- [x] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)
- [x] [Find Peak Element](https://leetcode.com/problems/find-peak-element/description/)
- [x] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)
- [x] [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)
- [x] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)
- [x] [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

## Heap / Priority Queue
Ordered-by-priority structures — task schedulers, load balancers, top-k queries, and
Dijkstra-style pathfinding.

- [x] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)
- [x] [IPO](https://leetcode.com/problems/ipo/description/)
- [x] [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/)
- [x] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/description/)

## Bit Manipulation
Low-level flag/permission bitmasking — systems and embedded programming, and any
space-constrained encoding.

- [x] [Add Binary](https://leetcode.com/problems/add-binary/description/)
- [x] [Reverse Bits](https://leetcode.com/problems/reverse-bits/description/)
- [x] [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/description/)
- [x] [Single Number](https://leetcode.com/problems/single-number/description/)
- [x] [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/description/)
- [x] [Single Number II](https://leetcode.com/problems/single-number-ii/description/)

## Math
Numeric edge-case handling and precision — common in financial and scientific software
where off-by-one or overflow bugs are costly.

- [x] [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)
- [x] [Plus One](https://leetcode.com/problems/plus-one/description/)
- [x] [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/description/)
- [x] [Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)
- [x] [Pow(x, n)](https://leetcode.com/problems/powx-n/description/)

## Dynamic Programming — 1D
Optimization under constraints via memoized subproblems — resource allocation,
sequence scoring, and cost-minimization over a linear state space.

- [x] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)
- [x] [House Robber](https://leetcode.com/problems/house-robber/description/)
- [x] [Word Break](https://leetcode.com/problems/word-break/description/)
- [x] [Coin Change](https://leetcode.com/problems/coin-change/description/)
- [x] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/description/)

## Dynamic Programming — 2D
The same optimization pattern over a 2D state space — diff/merge tools (edit distance),
pathfinding with cost, and multi-constraint scheduling.

- [x] [Triangle](https://leetcode.com/problems/triangle/description/)
- [x] [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)
- [x] [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/description/)
- [x] [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/)
- [x] [Interleaving String](https://leetcode.com/problems/interleaving-string/description/)
- [x] [Edit Distance](https://leetcode.com/problems/edit-distance/description/)
- [x] [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/) — [walkthrough](https://www.youtube.com/watch?v=1zxgH-YVBbw)
- [x] [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/)
- [x] [Maximal Square](https://leetcode.com/problems/maximal-square/description/)
