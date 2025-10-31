function task1() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Task 1 completed");
        resolve();
    }, 1000)); // 1 second
}

function task2() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Task 2 completed");
        resolve();
    }, 2000)); // 2 seconds
}

function task3() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Task 3 completed");
        resolve();
    }, 3000)); // 3 seconds
}

function runTasksSynchronously() {
    console.log("Synchronous Execution Time Starts Now!")
    console.time("Synchronous Execution Time");

    task1();
    task2();
    task3();

    console.timeEnd("Synchronous Execution Time"); // This will log immediately
    console.log("Synchronous Execution Time Ends Now!");
}

async function runTasksAsynchronously() {
    console.log("Asynchronous Execution Time Starts Now!");
    console.time("Asynchronous Execution Time");

    await task1(); // Wait for Task 1 to complete
    await task2(); // Wait for Task 2 to complete
    await task3(); // Wait for Task 3 to complete

    console.timeEnd("Asynchronous Execution Time");
    console.log("Asynchronous Execution Time Ends Now!")// This will log after all tasks complete
}

// Run both
runTasksSynchronously();
runTasksAsynchronously();
