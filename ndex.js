// Function to find the smallest number among the provided array
function findSmallestNumber(numbers) {
    let smallest = numbers[0]; // Assume the first number is the smallest initially
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i]; // Update smallest if a smaller number is found
        }
    }
    return smallest;
}

// Main function to take user input and find the smallest number
function findSmallestNumberFromInput() {
    let numbers = [];
    const numberOfInputs = 10;

    // Prompt the user to enter 10 numbers
    for (let i = 0; i < numberOfInputs; i++) {
        let input = prompt(`Enter number ${i + 1}:`);
        // Parse the input as a number and add it to the array
        numbers.push(parseFloat(input));
    }

    // Call the function to find the smallest number
    let smallestNumber = findSmallestNumber(numbers);

    // Display the smallest number to the user
    alert(`The smallest number is: ${smallestNumber}`);
}

// Call the main function to start the program
