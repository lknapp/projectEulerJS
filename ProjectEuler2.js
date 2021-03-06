/* Each new term in the Fibonacci sequence is generated by adding the 
previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do 
not exceed four million, find the sum of the even-valued terms. */

let a = 0
let b = 1
let c = a + b
let fibCounter = 0

while (true){
    a = b;
    b = c;
    c = a + b;
    if (c > 4000000){
        break;
    }
    if (c % 2 == 0){
        fibCounter = fibCounter + c;
    }
    console.log("c is " + c + " counter is " +fibCounter);
}
