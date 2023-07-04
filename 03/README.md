When code is run in JavaScript, the environment in which it is executed is very important, and is evaluated as 1 of the following:

Global code — The default environment where your code is executed for the first time.
Function code — Whenever the flow of execution enters a function body.
Eval code — Text to be executed inside the internal eval function.

The JavaScript interpreter in a browser is implemented as a single thread. What this actually means is that only 1 thing can ever happen at one time in the browser, with other actions or events being queued in what is called the Execution Stack.

As we already know, when a browser first loads your script, it enters the global execution context by default. If in your global code you call a function, the sequence flow of your program enters the function being called, creating a new execution context and pushing that context to the top of the execution stack.

If you call another function inside this current function, the same thing happens. The execution flow of code enters the inner function, which creates a new execution context that is pushed to the top of the existing stack. The browser will always execute the current execution context that sits on top of the stack, and once the function completes executing the current execution context, it will be popped off the top of the stack, returning control to the context below in the current stack.

So, finally there are 5 key points to remember about the execution stack:

1) Single-threaded.
2) Synchronous execution.
3) 1 Global context.
4) Infinite function contexts.
5) Each function call creates a new execution context, even a call to itself.
