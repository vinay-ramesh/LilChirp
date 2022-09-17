/* 
### level 2:
1. Write a function to remove all even numbers from an Array.
```
Input array: 
[1, 3, 4, 6, 7, 8]
```
```
Output should be array: [1, 3, 7]
```
2. Replace all the vowels in a string with uppercase vowels.
```
Input string: 'Elie'
```
```
Output should be string: 'ElIE'
```
3. Write a function to find the maximum number in an array.
```
Input array: [1, 3, 4, 6, 7, 8, 2, 5]
```
```
Output should be a number: 8
 */

// 1. Write a function to remove all even numbers from an Array.
const oddArray = (arr) => {
    let result = []
    arr.forEach(element => {
        if (element % 2 === 0) {
            result.push(element)
        }
        return result
    });
}
oddArray([1, 3, 4, 6, 7, 8])

// 2. Replace all the vowels in a string with uppercase vowels.

// Input string: 'Elie' Output should be string: 'ElIE'

const replaceVowels = (str) => {
    let newStr = "", vowels = "aeiou"
    let str = str.toLowerCase() //elie
    for (let i = 0; i <= str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            newStr += str[i].toUpperCase() //E I E
        } else {
            newStr += str[i] //l
        }
    }
    return newStr
}

replaceVowels(Elie)

// 3. Write a function to find the maximum number in an array.
// Input array: [1, 3, 4, 6, 7, 8, 2, 5] Output should be a number: 8


const findHighest = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        let highestNum = arr[0] //1
        if (arr[i] > highestNum) { //1>1 flase , i-2 3>1 - 3,  
            highestNum = arr[i]
        }
    }
    return highestNum
}


