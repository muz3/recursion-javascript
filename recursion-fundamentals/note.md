
In general, problems that can be solved with a non-recursive code can also be solved by recursion. However, some problems can only be solved recursively.

Indirect recursion (or mutual recursion) occurs when a function calls another function, eventually resulting in the original function being called again.

Use Where Appropriate #
Recursion should be used where you feel like it is appropriate, or it just feels natural. You will most likely encounter problems where you cannot come up with an iterative solution for it and that is where recursion fits in nicely.

Problem Breaks Down into Smaller Similar Subproblems #
The most obvious sign to use recursion is when a problem can be broken down into smaller subproblems. When you encounter such a problem, then it can likely be solved using recursion.

Problem Requires an Arbitrary Number of Nested Loops #
For some problems, we might have to nest an arbitrary number of loops, to solve them. However, since we do not know the number of loops, the solution might get complicated. Such problems can be more easily solved using recursion.

### If you know the number of loops that have to be nested, then use the iterative approach, otherwise, use recursion

For example, iterating through a graph or a tree, finding all permutations of a string, etc.
