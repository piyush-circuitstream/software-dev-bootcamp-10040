function towersOfHanoi(n, fromRod, toRod, auxRod) {
    // Base case: If only one disk is left
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    // Move n-1 disks from fromRod to auxRod using toRod as auxiliary
    towersOfHanoi(n - 1, fromRod, auxRod, toRod);

    // Move the nth disk from fromRod to toRod
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

    // Move n-1 disks from auxRod to toRod using fromRod as auxiliary
    towersOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// Example usage: Move 3 disks from rod A to rod C using rod B as auxiliary
towersOfHanoi(5, 'A', 'C', 'B');