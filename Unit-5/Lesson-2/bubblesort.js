// ========== Bubble Sort Algorithm Pseudo code ==========
// procedure bubbleSort(array):
//     n = length of array

//     repeat
//         swapped = false

//         for i from 0 to n - 2:
//             if array[i] > array[i + 1]:
//                 swap array[i] and array[i + 1]
//                 swapped = true

//         n = n - 1   // largest element is now at the end
//     until swapped is false

//     return array

function bubbleSortForLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("iteration", i + 1, ":", arr);
    }
    return arr;
}

// bubbleSortForLoop([5, 3, 8, 2]);
console.log("Sorted Array: ", bubbleSortForLoop([5, 3, 8, 2])); // Output: [2, 3, 5, 8]