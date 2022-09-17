/* 
# Code Quality

## Level 1

Re-write the below code to better code quality standards.

```
async function GET_daTA() {
  let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await r.json();
  return DATA;
}
``` */

const { default: axios } = require("axios")

const get_Data = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
            const res = res.data
            let DATA = res
        })
        .catch((err) => err.message)
    return DATA
}

get_Data()
