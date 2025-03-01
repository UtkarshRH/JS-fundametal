/*
    Que : Write a recursive function to calculate factorial.
*/

function factorial(n){
    if(n === 1) return 1;
    let fact = n * factorial(n-1);
    return fact;
}
// console.log(factorial(5));


/*
    Que : Implement a recursive function for Fibonacci numbers.
*/

function fibonacci(n,series=[0,1]){
    if(series.length >= n)return series.slice(0,n);
    series.push(series[series.length-1] + series[series.length-2])
    return fibonacci(n,series);
}

console.log(fibonacci(5));

// without recursion

function fib(n){
    let series = [0,1]
    if(series.length >= n) return series.slice(0,n);
    for(let i=2;i<n;i++){
        series.push(series[i-1] + series[i-2]);
    }
    return series.slice(0,n);
}

console.log(fib(5));