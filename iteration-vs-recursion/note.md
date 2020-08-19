Iterative Vs. Recursive #
Both recursion and iteration are used for executing instructions repeatedly until some condition is satisfied.

So where does the difference lie between Iteration and Recursion? Let’s discuss a few factors that differentiate them from each other in this lesson.

Recursive
Iterative
Definition
Recursion refers to a situation where a function calls itself again and again until some base condition is reached.

Iteration refers to a situation where some statements are executed again and again using loops until some condition is satisfied.

Application
Recursion is always called on a function, therefore it is called a process.

Iterative code is applied on variables and is a set of instructions that are executed repeatedly.

Program Termination
Recursive code terminates due to the base condition being satisfied.

Iterative code either runs for a particular number of times or until a specified condition is met.

Code Size
Recursive code is smaller and neater in length.

Iterative code is usually extensive and cluttered.

Time Overhead
Recursive code has a time overhead for each recursive call it makes.

There is no significant time overhead associated with each iteration of the loop.

Remember that the increment and test condition evaluation still have to be done in each iteration.

That is an overhead, but, it’s insignificant compared to the function call overhead.

Speed
Recursive code is slower than iterative code as it not only runs the program but also has to manage stack memory.

Iterative code has a relatively faster runtime.

Stack Utilization
Recursion uses the stack to store the variable changes for each recursive call. The stack is used to store the set of new local variables and parameters each time the function is called.

Iterative code does not use the stack

------

Steps for Converting Iterative Code to Recursive #
Identify the main loop

This loop should be modifying one or more variables
Use the loop condition as the base case and the body of the loop as the recursive case.

The local variables in the iterative version turn into parameters in the recursive version.

Compile and rerun tests.

Refactor the new function: You may be able to remove some temporary variables and find a better structure for the conditional statement in the recursive function.
