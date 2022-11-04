/**
 * This function returns the factorial of the input integer
 * @param {*} n A number
 * @returns The factorial of n
 */
const factorial = n => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  };