/* 

Write a function in Javascript to print the sum of the first n fibonacci numbers.

**Input:** 6

**Output:**

```                                 1 + 1         3 =   2    +  1  
1 1 2 3 5 8  num1=1, num2=1, num3= num1+num2=2, num4= num3=2 + num2=1 
Sum: 20

// generate fibonacci series
// get the sum
 */

const fibonacciSum = (num) => {
    const sum = 0, result = []
    for (let i = 1; i <= num; i++) {
        let num1 = 1, num2 = 1
        nextNum = num1 + num2 //2 
        num1 = num2 // 
        num2 = nextNum
        result.push(nextNum)
    }
    result.forEach(ele => {
        sum += ele
    })
    return sum
}