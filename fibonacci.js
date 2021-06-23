

let fibonacci = (n)=>  {
    let num = [1,1];
    //while the length of the array is less than length of
    // entered number continue.
        if (n < 0){
            return ("OOPS")
        } else
            while (num.length < n){
            let newNum =(num[num.length-1])
            let oldNum = (num[num.length-2])
            //^^ get last 2 numbers in array */
            let addNum = (newNum + oldNum)
            //add them together than push them
            num.push(addNum)
            console.log(num)
            console.log(num[num.length-1])
            }
            return num[num.length-1];
  }
//want to add 2 previous numbers to get 3rd

module.exports = fibonacci;