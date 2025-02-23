
//? String Manipulation Functions:
//Reverse a String:
function reverseString(String) {
    return String.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"


//Count Characters :
function countCharacters(count) {
    return count.length;
}
console.log(countCharacters("hello")); // 5



//Capitalize Words :
function capitalizeWords(cap) {
    return cap.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); //"Hello World"


//?Array Functions:
//Find Maximum and Minimum :
function findMaximum(arr) {
    return Math.max(...arr);
}
function findMinimum(arr) {
    return Math.min(...arr);
}
console.log(findMaximum([1, 2, 3, 4, 5])); // 5
console.log(findMinimum([1, 2, 3, 4, 5])); // 1


//Sum of Array :
function sumOfArray(arr) {
    return arr.reduce((Sum, num) => Sum + num, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15


//Filter Array :
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]


//? Mathematical Functions:
//Factorial:

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5)); //  120


// Prime Number Check:
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); //  true
console.log(isPrime(4)); //  false


// Fibonacci Sequence:
function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





